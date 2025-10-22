# Git 설치 가이드 (Windows)

## 1단계: Git 다운로드

1. **웹브라우저**에서 다음 주소로 이동하세요:
   ```
   https://git-scm.com/download/win
   ```

2. 자동으로 다운로드가 시작됩니다
   - 파일 이름: `Git-x.xx.x-64-bit.exe`

## 2단계: Git 설치

1. 다운로드한 파일을 **더블클릭**하여 실행

2. 설치 과정에서 나오는 옵션들:
   - **Select Components**: 그대로 두고 **Next**
   - **Choosing the default editor**: 그대로 두고 **Next**
   - **Adjusting your PATH environment**: **"Git from the command line and also from 3rd-party software"** 선택 (기본값)
   - **나머지 옵션들**: 모두 기본값으로 두고 **Next** 클릭

3. **Install** 버튼 클릭

4. 설치 완료 후 **Finish** 클릭

## 3단계: 설치 확인

1. **PowerShell**을 **새로 열기** (이미 열려있던 창은 닫고 새로 열어야 합니다!)

2. 다음 명령어 입력:
   ```bash
   git --version
   ```

3. 버전이 표시되면 성공! 예:
   ```
   git version 2.43.0.windows.1
   ```

## 4단계: Git 초기 설정

```bash
git config --global user.name "본인이름"
git config --global user.email "본인이메일@example.com"
```

**예시:**
```bash
git config --global user.name "Hong Gildong"
git config --global user.email "hong@example.com"
```

이제 Git 사용 준비가 완료되었습니다! 🎉

