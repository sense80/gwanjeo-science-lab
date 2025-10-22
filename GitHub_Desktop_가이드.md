# 🖱️ GitHub Desktop으로 배포하기 (초보자 친화 버전)

## 장점
- 클릭만으로 쉽게 사용 가능
- 명령어를 몰라도 됨
- 시각적으로 변경사항 확인 가능

---

## 1단계: GitHub Desktop 설치

### 다운로드
1. **웹브라우저**에서 다음 주소로 이동:
   ```
   https://desktop.github.com
   ```

2. **"Download for Windows"** 버튼 클릭

3. 다운로드한 파일 실행 (자동 설치됨)

### GitHub 계정 연결
1. GitHub Desktop 실행

2. **"Sign in to GitHub.com"** 클릭

3. 웹브라우저가 열리면 GitHub 계정으로 로그인
   - 계정이 없다면 **"Create an account"** 클릭하여 회원가입

4. **"Authorize desktop"** 클릭

5. GitHub Desktop으로 돌아오면 설정 완료!

---

## 2단계: 로컬 프로젝트를 GitHub에 추가

### 프로젝트 열기
1. GitHub Desktop에서 **"File" → "Add Local Repository"** 클릭

2. **"Choose..."** 버튼 클릭

3. 프로젝트 폴더 선택:
   ```
   C:\Users\정성희\Desktop\cursor\science-lab-reservation
   ```

4. **"Select Folder"** 클릭

### ⚠️ 오류가 나타나면?
만약 "This directory does not appear to be a Git repository" 메시지가 나오면:

1. **"Create a repository"** 링크 클릭

2. 다음 정보 입력:
   - **Name**: `science-lab-reservation`
   - **Description**: `대전관저고등학교 과학실 예약 시스템`
   - **Local path**: (이미 선택됨)
   - ✅ **"Initialize this repository with a README"** 체크 해제
   - **Git Ignore**: `Node`
   - **License**: `MIT License`

3. **"Create Repository"** 버튼 클릭

---

## 3단계: 첫 커밋 만들기

### 변경사항 확인
1. 왼쪽 사이드바에 모든 파일이 표시됩니다
   - ✅ 체크된 파일들이 커밋될 파일입니다

### 커밋 생성
1. 왼쪽 하단 **"Summary"** 칸에 입력:
   ```
   과학실 예약 시스템 초기 버전
   ```

2. **"Commit to main"** 버튼 클릭 (파란색 버튼)

---

## 4단계: GitHub에 업로드

### 저장소 게시
1. 상단에 **"Publish repository"** 버튼 클릭

2. 팝업 창에서 설정:
   - **Name**: `science-lab-reservation`
   - **Description**: `대전관저고등학교 과학실 예약 시스템`
   - **Keep this code private** 체크 해제 (공개 저장소로 만들기)

3. **"Publish Repository"** 버튼 클릭

4. 완료! 🎉

### GitHub에서 확인
1. 웹브라우저에서 GitHub 접속: [https://github.com](https://github.com)

2. 본인 프로필 클릭 → **"Your repositories"**

3. `science-lab-reservation` 저장소가 생성되었습니다!

---

## 5단계: Vercel로 배포하기

### Vercel 계정 생성
1. **웹브라우저**에서 다음 주소로 이동:
   ```
   https://vercel.com
   ```

2. **"Sign Up"** 클릭

3. **"Continue with GitHub"** 선택

4. GitHub 계정으로 로그인

5. **"Authorize Vercel"** 클릭

### 프로젝트 배포
1. Vercel 대시보드에서 **"Add New..." → "Project"** 클릭

2. **"Import Git Repository"** 섹션에서:
   - `science-lab-reservation` 저장소 찾기
   - **"Import"** 버튼 클릭

3. **프로젝트 설정:**
   - **Project Name**: `science-lab-reservation` (그대로 둠)
   - **Framework Preset**: `Other` (기본값)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: (비워두기)
   - **Output Directory**: (비워두기)
   - **Install Command**: `npm install` (기본값)

4. **"Deploy"** 버튼 클릭! 🚀

### 배포 진행
- 1-2분 정도 소요됩니다
- 화면에 로그가 표시됩니다
- **"Congratulations!"** 메시지가 나타나면 성공!

### 배포 URL 확인
- Vercel이 자동으로 생성한 URL:
  ```
  https://science-lab-reservation-xxx.vercel.app
  ```
- 이 URL을 클릭하여 사이트 확인!

---

## 6단계: 코드 수정 후 재배포 (나중에 필요할 때)

### 코드 수정 후
1. Cursor에서 파일 수정

2. GitHub Desktop을 열면 자동으로 변경사항 감지

3. **왼쪽 하단 "Summary"**에 변경 내용 입력:
   ```
   버그 수정: 예약 시간 표시 오류 해결
   ```

4. **"Commit to main"** 버튼 클릭

5. 상단 **"Push origin"** 버튼 클릭

6. **Vercel이 자동으로 다시 배포합니다!** 🚀

---

## 🎉 완료!

이제 GitHub Desktop으로 쉽게 코드를 관리하고 Vercel로 배포할 수 있습니다!

### 요약
1. ✅ GitHub Desktop 설치
2. ✅ 프로젝트를 GitHub에 업로드
3. ✅ Vercel로 자동 배포
4. ✅ 코드 수정 시 자동 재배포

---

## 💡 팁

### GitHub Desktop에서 히스토리 보기
- **"History"** 탭을 클릭하면 모든 변경 이력을 볼 수 있습니다

### 변경사항 되돌리기
- 파일을 우클릭 → **"Discard Changes"**

### 브랜치 만들기
- 상단 **"Current Branch"** → **"New Branch"**
- 실험적인 기능을 개발할 때 유용합니다

---

## 🆘 문제 해결

### GitHub Desktop이 응답하지 않음
- 프로그램을 종료하고 다시 실행하세요

### Push가 실패함
- 인터넷 연결 확인
- GitHub에 다시 로그인해보세요: **"File" → "Options" → "Accounts"**

### Vercel 배포 실패
- Vercel 대시보드에서 프로젝트 선택
- **"Deployments"** 탭에서 오류 로그 확인
- **"Redeploy"** 버튼으로 다시 배포 시도

