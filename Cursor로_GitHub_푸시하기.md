# 🚀 Cursor에서 GitHub로 푸시하기 (가장 쉬운 방법!)

Git 설치 없이 **Cursor의 내장 Git 기능**을 사용하여 바로 GitHub에 푸시할 수 있습니다!

---

## 📋 단계별 가이드

### 1단계: Cursor에서 Source Control 열기

1. Cursor 왼쪽 사이드바에서 **"Source Control"** 아이콘 클릭
   - 아이콘 모양: 세 개의 원이 선으로 연결된 모양 (분기 아이콘)
   - 또는 단축키: `Ctrl + Shift + G`

2. **"Initialize Repository"** 버튼 클릭
   - Git 저장소가 초기화됩니다

---

### 2단계: 파일 추가 및 커밋

1. **변경된 파일 목록**이 표시됩니다
   - 모든 파일 옆에 **"+"** 버튼이 있습니다

2. 상단의 **"Stage All Changes"** 버튼 클릭 (또는 파일마다 개별 **+** 클릭)
   - 모든 파일이 "Staged Changes"로 이동합니다

3. 상단 **"Message"** 입력창에 커밋 메시지 입력:
   ```
   과학실 예약 시스템 초기 버전
   ```

4. **✓ 체크 버튼** (또는 `Ctrl + Enter`) 클릭하여 커밋

---

### 3단계: GitHub 저장소 연결

1. 커밋 후 상단에 **"Publish Branch"** 버튼이 나타납니다

2. **"Publish Branch"** 클릭

3. 팝업이 나타나면:
   - **GitHub 계정 로그인** (처음 사용 시)
   - 브라우저가 열리면 GitHub 로그인 후 **"Authorize"** 클릭

4. 저장소 이름 선택:
   - **"Publish to GitHub public repository"** 선택
   - 또는 **"Publish to GitHub private repository"** (비공개)

---

### ⚠️ 이미 만든 저장소에 연결하기

이미 `https://github.com/sense80/gwanjeo-science-lab.git` 저장소를 만드셨으니:

#### 방법 A: Cursor 터미널 사용 (추천!)

1. Cursor 상단 메뉴: **"Terminal" → "New Terminal"**

2. 터미널에 다음 명령어 입력:

```bash
# 원격 저장소 연결
git remote add origin https://github.com/sense80/gwanjeo-science-lab.git

# 브랜치 이름 확인 및 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

#### 방법 B: Source Control에서 직접 설정

1. Source Control에서 **"..."** (더보기) 메뉴 클릭

2. **"Remote" → "Add Remote..."** 선택

3. 저장소 URL 입력:
   ```
   https://github.com/sense80/gwanjeo-science-lab.git
   ```

4. Remote 이름: `origin` 입력

5. 상단 **"Publish Branch"** 클릭

---

### 4단계: GitHub에서 확인

1. 웹브라우저에서 접속:
   ```
   https://github.com/sense80/gwanjeo-science-lab
   ```

2. 모든 파일이 업로드되었는지 확인! 🎉

---

## 🆘 문제 해결

### Git이 설치되지 않았다는 오류

Cursor에서 Git을 찾지 못한다면:

1. **Git 다운로드**: https://git-scm.com/download/win
2. 설치 후 **Cursor 재시작**

### GitHub 인증 오류

1. Cursor에서 **"File" → "Preferences" → "Settings"**
2. 검색창에 `git` 입력
3. **"GitHub: Gitbase"** 섹션에서 다시 로그인

### Remote 연결 오류

터미널에서 다음 명령어로 확인:
```bash
git remote -v
```

출력이 없다면 다시 연결:
```bash
git remote add origin https://github.com/sense80/gwanjeo-science-lab.git
```

---

## 🎉 완료!

이제 Cursor에서 바로 GitHub에 푸시할 수 있습니다!

### 다음에 수정할 때는:

1. **파일 수정**
2. **Source Control**에서 변경사항 확인
3. **Stage → Commit → Push**

이 3단계만 거치면 됩니다! 🚀

