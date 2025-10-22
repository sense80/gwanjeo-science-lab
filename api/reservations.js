// Vercel에서 사용할 간단한 메모리 저장소 (실제 운영에서는 데이터베이스 사용 권장)
let reservations = [];

// 데이터 읽기
function readReservations() {
    return reservations;
}

// 데이터 저장
function saveReservations(newReservations) {
    reservations = newReservations;
    return true;
}

module.exports = async (req, res) => {
    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        if (req.method === 'GET') {
            // 모든 예약 조회
            const data = readReservations();
            console.log('GET 요청 - 현재 예약 수:', data.length);
            res.status(200).json(data);
        } else if (req.method === 'POST') {
            // 새 예약 추가
            const { lab, date, period, teacherName, purpose, className } = req.body;
            
            console.log('POST 요청 - 예약 데이터:', { lab, date, period, teacherName, purpose, className });
            
            // 필수 필드 검증
            if (!lab || !date || !period || !teacherName || !purpose || !className) {
                console.log('필수 필드 누락');
                return res.status(400).json({ 
                    error: '필수 필드가 누락되었습니다.',
                    required: ['lab', 'date', 'period', 'teacherName', 'purpose', 'className']
                });
            }
            
            const currentReservations = readReservations();
            
            // 중복 예약 확인
            const duplicate = currentReservations.find(r => 
                r.lab === lab && 
                r.date === date && 
                r.period === parseInt(period)
            );
            
            if (duplicate) {
                console.log('중복 예약 발견');
                return res.status(409).json({ 
                    error: '이미 예약된 시간입니다.',
                    existing: duplicate
                });
            }
            
            // 새 예약 생성
            const newReservation = {
                id: Date.now().toString(),
                lab,
                date,
                period: parseInt(period),
                teacherName,
                purpose,
                className,
                createdAt: new Date().toISOString()
            };
            
            currentReservations.push(newReservation);
            
            if (saveReservations(currentReservations)) {
                console.log('예약 저장 성공:', newReservation);
                res.status(201).json(newReservation);
            } else {
                console.log('예약 저장 실패');
                res.status(500).json({ error: '예약 저장에 실패했습니다.' });
            }
        } else if (req.method === 'DELETE') {
            // 예약 삭제
            const { lab, date, period } = req.query;
            
            console.log('DELETE 요청 - 삭제 조건:', { lab, date, period });
            
            if (!lab || !date || !period) {
                return res.status(400).json({ 
                    error: '삭제를 위한 필수 파라미터가 누락되었습니다.',
                    required: ['lab', 'date', 'period']
                });
            }
            
            const currentReservations = readReservations();
            const initialLength = currentReservations.length;
            
            const filteredReservations = currentReservations.filter(r => 
                !(r.lab === lab && r.date === date && r.period === parseInt(period))
            );
            
            if (filteredReservations.length === initialLength) {
                console.log('삭제할 예약을 찾을 수 없음');
                return res.status(404).json({ error: '해당 조건의 예약을 찾을 수 없습니다.' });
            }
            
            if (saveReservations(filteredReservations)) {
                console.log('예약 삭제 성공');
                res.json({ 
                    message: '예약이 삭제되었습니다.',
                    deletedCount: initialLength - filteredReservations.length
                });
            } else {
                res.status(500).json({ error: '예약 삭제에 실패했습니다.' });
            }
        } else {
            res.status(405).json({ error: '지원하지 않는 HTTP 메서드입니다.' });
        }
    } catch (error) {
        console.error('API 오류:', error);
        res.status(500).json({ error: '서버 내부 오류가 발생했습니다.' });
    }
};