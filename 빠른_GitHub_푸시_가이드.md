# 🚀 가장 빠른 GitHub 푸시 방법

## ⭐ 방법 1: GitHub Desktop (가장 쉬움! 추천!)

### 1단계: GitHub Desktop 다운로드 및 설치

1. **다운로드**: https://desktop.github.com
2. **설치 파일 실행** (자동 설치됨)
3. **GitHub 계정으로 로그인**

### 2단계: 프로젝트 추가

1. GitHub Desktop 열기
2. **"File" → "Add Local Repository"** 클릭
3. **"Choose..."** 버튼 클릭
4. 폴더 선택: `C:\Users\정성희\Desktop\cursor\science-lab-reservation`
5. **오류 메시지**가 나타나면:
   - **"create a repository"** 링크 클릭
   - **"Create Repository"** 버튼 클릭

### 3단계: 커밋

1. 왼쪽에 변경된 파일 목록이 표시됩니다
2. 왼쪽 하단 **"Summary"** 입력:
   ```
   과학실 예약 시스템 초기 버전
   ```
3. **"Commit to main"** 버튼 클릭 (파란색)

### 4단계: GitHub에 푸시

1. 상단 **"Publish repository"** 버튼 클릭
2. 팝업에서:
   - **Name**: `gwanjeo-science-lab` 입력
   - **"Keep this code private"** 체크 해제 (공개)
   - **Organization**: `sense80` 선택 (또는 본인 계정)
3. **"Publish Repository"** 버튼 클릭

### ✅ 완료!

이제 GitHub에서 확인하세요:
```
https://github.com/sense80/gwanjeo-science-lab
```

---

## 🔧 방법 2: Git 설치 후 명령어 사용

### 1단계: Git 다운로드 및 설치

1. **다운로드**: https://git-scm.com/download/win
2. 설치 파일 실행
3. 모든 옵션 **기본값**으로 두고 계속 **Next** 클릭
4. **Install** 클릭
5. **Finish** 클릭

### 2단계: PowerShell 재시작

**중요**: Git을 설치한 후 **PowerShell을 완전히 닫고 다시 열어야** 합니다!

### 3단계: Git 명령어 실행

PowerShell에서 다음 명령어를 **하나씩** 입력:

```bash
# 프로젝트 폴더로 이동
cd "C:\Users\정성희\Desktop\cursor\science-lab-reservation"

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "과학실 예약 시스템 초기 버전"

# GitHub 저장소 연결
git remote add origin https://github.com/sense80/gwanjeo-science-lab.git

# 브랜치 이름 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### GitHub 로그인 창이 나타나면:
- GitHub 계정으로 로그인
- **"Authorize"** 클릭

### ✅ 완료!

---

## 🎯 어떤 방법을 선택하시나요?

### 👍 **방법 1 (GitHub Desktop)** 추천 이유:
- Git 설치 필요 없음
- 클릭만으로 완료
- 시각적으로 쉬움
- **5분이면 완료!**

### 👨‍💻 **방법 2 (Git 설치)** 선택 이유:
- 명령어에 익숙해지고 싶을 때
- 나중에 더 많은 기능 사용 가능
- **10분 정도 소요**

---

## 💡 제 추천

**GitHub Desktop을 사용하세요!** 

초보자에게 가장 쉽고 빠른 방법입니다. 지금 바로:

1. https://desktop.github.com 접속
2. 다운로드 후 설치
3. 위의 단계 따라하기

5분이면 GitHub에 코드가 올라갑니다! 🚀

