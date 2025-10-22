# 🚀 Vercel 배포 가이드

## ✅ 준비 완료!

프로젝트가 Vercel 배포에 최적화되었습니다. 다음 파일들이 생성되었습니다:

- `vercel.json` - Vercel 설정 파일
- `api/reservations.js` - Vercel Functions API 엔드포인트
- 기존 HTML 파일들은 그대로 사용 가능

## 📋 배포 단계

### 1. GitHub에 코드 업로드

```bash
# Git 저장소 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Vercel 배포 준비 완료"

# GitHub 저장소에 푸시
git remote add origin https://github.com/sense80/gwanje-science-Lab.git
git push -u origin main
```

### 2. Vercel에서 배포

1. **[Vercel](https://vercel.com)에 접속**하여 GitHub 계정으로 로그인

2. **"New Project"** 클릭

3. **GitHub 저장소 선택**:
   - `gwanje-science-Lab` 저장소 선택

4. **프레임워크 설정**:
   - Framework Preset: `Other` 또는 `Static Site`
   - Build Command: (비워두기)
   - Output Directory: (비워두기)

5. **Environment Variables** (필요시):
   - 현재는 추가 설정 불필요

6. **"Deploy"** 클릭

### 3. 배포 완료 후

- Vercel이 자동으로 배포 URL을 제공합니다
- 예: `https://gwanje-science-lab-xxx.vercel.app`

## 🔧 주요 변경사항

### Vercel Functions API
- **엔드포인트**: `/api/reservations`
- **메서드**: GET, POST, DELETE
- **데이터 저장**: Vercel의 임시 파일 시스템 사용

### 자동 기능
- **실시간 동기화**: 모든 사용자가 동일한 예약 정보 공유
- **오프라인 지원**: 서버 연결 실패 시 로컬 저장
- **자동 동기화**: 서버 연결 시 오프라인 데이터 업로드

## 🌐 배포 후 사용법

1. **Vercel 배포 URL로 접속**
2. **과학실 선택** (화학실/물리실)
3. **예약하기** 클릭하여 정보 입력
4. **실시간 확인**: 다른 사용자도 즉시 예약 내역 확인 가능

## ⚠️ 주의사항

### 데이터 지속성
- Vercel Functions는 **임시 파일 시스템**을 사용합니다
- 서버 재시작 시 데이터가 초기화될 수 있습니다
- **영구 저장**이 필요하다면 외부 데이터베이스 연동 필요

### 대안: 영구 데이터 저장
더 안정적인 데이터 저장을 원한다면:
- **MongoDB Atlas** (무료)
- **Supabase** (무료)
- **Firebase** (무료)

## 🎉 완료!

이제 모든 사용자가 동일한 예약 정보를 실시간으로 공유할 수 있습니다!

### 배포 URL 예시
```
https://gwanje-science-lab-abc123.vercel.app
```

### 테스트 방법
1. 배포 URL로 접속
2. 예약하기
3. 다른 브라우저/기기에서 같은 URL 접속
4. 예약 내역이 실시간으로 보이는지 확인
