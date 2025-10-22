# 🚀 Vercel 배포 가이드 (GitHub 푸시 완료 후)

## ✅ 현재 상태
- ✓ GitHub에 코드 푸시 완료!
- → 이제 Vercel로 배포하여 실제 웹사이트 만들기

---

## 📋 단계별 가이드

### 1단계: GitHub 저장소 확인 (선택사항)

웹브라우저에서 접속하여 파일들이 올라갔는지 확인:
```
https://github.com/sense80/gwanjeo-science-lab
```

**확인할 파일들:**
- ✓ index.html
- ✓ booking.html
- ✓ api/reservations.js
- ✓ package.json
- ✓ vercel.json
- ✓ README.md

---

### 2단계: Vercel 계정 생성 및 로그인

#### Vercel 웹사이트 접속
1. **웹브라우저**에서 접속: **https://vercel.com**
2. 우측 상단 **"Sign Up"** 클릭
3. **"Continue with GitHub"** 선택 (GitHub 아이콘 클릭)
4. GitHub 계정으로 로그인
5. **"Authorize Vercel"** 클릭
   - Vercel이 GitHub 저장소에 접근 권한을 요청합니다
   - **"Authorize vercel"** 버튼 클릭

---

### 3단계: 새 프로젝트 배포

#### 프로젝트 추가
1. Vercel 대시보드에서 **"Add New..." → "Project"** 클릭
   - 또는 **"Create a New Project"** 버튼 클릭

#### GitHub 저장소 연결
1. **"Import Git Repository"** 섹션이 나타납니다
2. 저장소 목록에서 **`gwanjeo-science-lab`** 찾기
   - 목록에 안 보이면: **"Adjust GitHub App Permissions"** 클릭
   - 모든 저장소 또는 특정 저장소 선택
3. **`gwanjeo-science-lab`** 옆의 **"Import"** 버튼 클릭

---

### 4단계: 배포 설정

#### 프로젝트 설정 화면
다음과 같이 설정하세요:

```
Project Name: gwanjeo-science-lab
Framework Preset: Other
Root Directory: ./
Build Command: (비워두기 또는 그대로)
Output Directory: (비워두기 또는 그대로)
Install Command: npm install
```

#### 환경 변수 (Environment Variables)
- **현재는 추가하지 않아도 됩니다**
- 나중에 데이터베이스 연결 시 필요할 수 있습니다

#### 배포 시작!
1. 모든 설정 확인 후
2. **"Deploy"** 버튼 클릭! 🚀

---

### 5단계: 배포 진행 상황 확인

#### 빌드 로그 확인
- 화면에 실시간 로그가 표시됩니다
- 다음과 같은 메시지들이 나타납니다:
  ```
  Cloning repository...
  Installing dependencies...
  Build completed
  Deploying...
  ```

#### 소요 시간
- **1-2분** 정도 소요됩니다
- 인내심을 가지고 기다려주세요! ☕

---

### 6단계: 배포 완료! 🎉

#### 성공 화면
배포가 완료되면 다음과 같은 화면이 나타납니다:
```
🎉 Congratulations!
Your project is successfully deployed!
```

#### 배포 URL 확인
Vercel이 자동으로 URL을 생성합니다:
```
https://gwanjeo-science-lab.vercel.app
```
또는
```
https://gwanjeo-science-lab-xxx.vercel.app
```

#### 웹사이트 접속!
1. 생성된 URL을 클릭
2. **과학실 예약 시스템이 실행됩니다!** 🧪⚡

---

## 7단계: 웹사이트 테스트

### 기능 테스트
1. **과학실 선택**: 화학실 또는 물리실 선택
2. **예약 시간 선택**: 원하는 날짜와 교시 클릭
3. **예약 정보 입력**: 교사명, 용도, 반 입력
4. **예약 완료**: "예약하기" 버튼 클릭
5. **예약 확인**: 시간표에 예약이 표시되는지 확인

### 다른 기기에서 테스트
- 스마트폰에서 URL 접속
- 다른 컴퓨터에서 접속
- **모두 같은 예약 내역이 보여야 합니다!**

---

## 📱 URL 공유하기

이제 이 URL을 학교 선생님들께 공유하세요!

### 공유 방법
- 📧 **이메일**로 전송
- 💬 **카카오톡**으로 공유
- 🏫 **학교 홈페이지**에 게시
- 📄 **공지사항**에 올리기

### 공유 예시 메시지
```
안녕하세요,
과학실 예약 시스템이 완성되었습니다!

아래 링크로 접속하여 과학실을 예약하실 수 있습니다:
https://gwanjeo-science-lab.vercel.app

- 화학실(1층), 물리실(3층) 선택 가능
- 월~금, 1~7교시 예약 가능
- 실시간 예약 현황 확인

감사합니다!
```

---

## 🔄 코드 수정 후 재배포

나중에 코드를 수정하고 싶다면:

### 1. 코드 수정
- Cursor에서 파일 수정

### 2. GitHub에 푸시
**GitHub Desktop 사용 시:**
1. GitHub Desktop 열기
2. 변경사항 확인
3. Summary 입력 (예: "예약 기능 개선")
4. "Commit to main" 클릭
5. "Push origin" 버튼 클릭

**Git 명령어 사용 시:**
```bash
git add .
git commit -m "수정 내용 설명"
git push origin main
```

### 3. 자동 재배포!
- **Vercel이 자동으로 감지하여 다시 배포합니다!**
- 1-2분 후 변경사항이 반영됩니다
- 별도 작업 필요 없음! 🎉

---

## 🎯 커스텀 도메인 설정 (선택사항)

학교 도메인을 사용하고 싶다면:

### Vercel에서 도메인 연결
1. Vercel 대시보드 → 프로젝트 선택
2. **"Settings" → "Domains"** 클릭
3. 원하는 도메인 입력 (예: science.gwanjeo-hs.kr)
4. DNS 설정 안내에 따라 설정

### 무료 도메인도 가능
- 현재 `gwanjeo-science-lab.vercel.app`도 충분히 사용 가능합니다!

---

## ⚠️ 중요 사항

### 데이터 저장 방식
현재 설정:
- ⚠️ **Vercel은 임시 메모리에 데이터를 저장**합니다
- 서버 재시작 시 예약 데이터가 **초기화될 수 있습니다**
- 단기 사용에는 문제없습니다

### 장기 사용을 위한 개선
안정적인 데이터 저장을 원한다면:
- **MongoDB Atlas** (무료)
- **Supabase** (무료)
- **Firebase** (무료)

이 중 하나를 연결하면 영구적으로 데이터를 저장할 수 있습니다.
(나중에 필요하면 도움 요청하세요!)

---

## 🆘 문제 해결

### 배포 실패
**증상**: "Build failed" 메시지
**해결**:
1. Vercel 대시보드 → 프로젝트 → "Deployments"
2. 실패한 배포 클릭
3. 로그 확인하여 오류 메시지 찾기
4. **"Redeploy"** 버튼으로 다시 배포

### 웹사이트가 열리지 않음
**해결**:
1. URL이 정확한지 확인
2. 인터넷 연결 확인
3. 다른 브라우저에서 시도
4. 시크릿/프라이빗 모드에서 시도

### 예약이 저장되지 않음
**해결**:
1. 브라우저 개발자 도구 (F12) 열기
2. Console 탭에서 오류 메시지 확인
3. Network 탭에서 API 요청 확인
4. Vercel 대시보드에서 Functions 로그 확인

---

## 🎉 축하합니다!

이제 과학실 예약 시스템이 인터넷에 배포되었습니다!

### 완료된 작업
- ✅ GitHub에 코드 업로드
- ✅ Vercel로 자동 배포
- ✅ 실시간 웹사이트 운영
- ✅ 자동 재배포 설정

### 다음 단계
1. **URL을 저장**해두세요
2. **학교에 공유**하세요
3. **피드백을 받아** 개선하세요
4. 필요하면 **추가 기능**을 개발하세요

**정말 수고하셨습니다!** 🚀🧪⚡

