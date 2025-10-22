const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// 데이터 파일 경로
const DATA_FILE = path.join(__dirname, 'data', 'reservations.json');

// 데이터 디렉토리 생성
if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

// 초기 데이터 파일 생성
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// 예약 데이터 읽기
function readReservations() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('데이터 읽기 오류:', error);
        return [];
    }
}

// 예약 데이터 저장
function saveReservations(reservations) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(reservations, null, 2));
        return true;
    } catch (error) {
        console.error('데이터 저장 오류:', error);
        return false;
    }
}

// API 라우트

// 모든 예약 조회
app.get('/api/reservations', (req, res) => {
    const reservations = readReservations();
    res.json(reservations);
});

// 특정 과학실의 예약 조회
app.get('/api/reservations/:lab', (req, res) => {
    const lab = req.params.lab;
    const reservations = readReservations();
    const labReservations = reservations.filter(r => r.lab === lab);
    res.json(labReservations);
});

// 새 예약 추가
app.post('/api/reservations', (req, res) => {
    const { lab, date, period, teacherName, purpose, className } = req.body;
    
    // 필수 필드 검증
    if (!lab || !date || !period || !teacherName || !purpose || !className) {
        return res.status(400).json({ 
            error: '필수 필드가 누락되었습니다.',
            required: ['lab', 'date', 'period', 'teacherName', 'purpose', 'className']
        });
    }
    
    const reservations = readReservations();
    
    // 중복 예약 확인
    const duplicate = reservations.find(r => 
        r.lab === lab && 
        r.date === date && 
        r.period === parseInt(period)
    );
    
    if (duplicate) {
        return res.status(409).json({ 
            error: '이미 예약된 시간입니다.',
            existing: duplicate
        });
    }
    
    // 새 예약 생성
    const newReservation = {
        id: Date.now().toString(), // 간단한 ID 생성
        lab,
        date,
        period: parseInt(period),
        teacherName,
        purpose,
        className,
        createdAt: new Date().toISOString()
    };
    
    reservations.push(newReservation);
    
    if (saveReservations(reservations)) {
        res.status(201).json(newReservation);
    } else {
        res.status(500).json({ error: '예약 저장에 실패했습니다.' });
    }
});

// 예약 삭제
app.delete('/api/reservations/:id', (req, res) => {
    const id = req.params.id;
    const reservations = readReservations();
    
    const index = reservations.findIndex(r => r.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: '예약을 찾을 수 없습니다.' });
    }
    
    const deletedReservation = reservations.splice(index, 1)[0];
    
    if (saveReservations(reservations)) {
        res.json({ message: '예약이 삭제되었습니다.', deleted: deletedReservation });
    } else {
        res.status(500).json({ error: '예약 삭제에 실패했습니다.' });
    }
});

// 특정 조건으로 예약 삭제 (lab, date, period로)
app.delete('/api/reservations', (req, res) => {
    const { lab, date, period } = req.query;
    
    if (!lab || !date || !period) {
        return res.status(400).json({ 
            error: '삭제를 위한 필수 파라미터가 누락되었습니다.',
            required: ['lab', 'date', 'period']
        });
    }
    
    const reservations = readReservations();
    const initialLength = reservations.length;
    
    const filteredReservations = reservations.filter(r => 
        !(r.lab === lab && r.date === date && r.period === parseInt(period))
    );
    
    if (filteredReservations.length === initialLength) {
        return res.status(404).json({ error: '해당 조건의 예약을 찾을 수 없습니다.' });
    }
    
    if (saveReservations(filteredReservations)) {
        res.json({ 
            message: '예약이 삭제되었습니다.',
            deletedCount: initialLength - filteredReservations.length
        });
    } else {
        res.status(500).json({ error: '예약 삭제에 실패했습니다.' });
    }
});

// 서버 상태 확인
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        reservations: readReservations().length
    });
});

// 정적 파일 서빙 (메인 페이지)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`🚀 과학실 예약 시스템 서버가 포트 ${PORT}에서 실행 중입니다.`);
    console.log(`📱 웹사이트: http://localhost:${PORT}`);
    console.log(`📊 API 상태: http://localhost:${PORT}/api/status`);
});

module.exports = app;
