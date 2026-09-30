# 노트북LM 마스터하기

## 서비스 소개

노트북LM을 처음 사용하는 성인 학습자를 위한 60분 실습 강의 사이트.
자료 추가, 질문, 출처 확인, 요약, 핵심 질문, 퀴즈 제작을 21장 웹슬라이드로 안내.
Firebase 프로젝트, Realtime Database, 로그인 방식, 보안 규칙 연결 완료.
강사 계정 UID를 `admins`에 등록하면 강사 화면과 청중 화면의 실시간 슬라이드 동기화 사용 가능.

## 배포 주소

- 강의 안내: [https://0927-vibe-chuseok.vercel.app](https://0927-vibe-chuseok.vercel.app)
- 수업 슬라이드: [https://0927-vibe-chuseok.vercel.app/slides.html](https://0927-vibe-chuseok.vercel.app/slides.html)
- 강사 슬라이드: [https://0927-vibe-chuseok.vercel.app/slides.html?admin](https://0927-vibe-chuseok.vercel.app/slides.html?admin)
- 관리자 목업: [https://0927-vibe-chuseok.vercel.app/admin.html](https://0927-vibe-chuseok.vercel.app/admin.html)

## 주요 기능

1. **강의 안내 페이지**: 대상, 일정, 커리큘럼, 강사 소개 확인
2. **21장 웹슬라이드**: 방향키 이동, 전체 보기, 타이머, PDF 저장
3. **강사·청중 동기화**: Firebase 설정 완료 뒤 강사 화면 이동에 맞춘 청중 화면 자동 이동
4. **수업 정책 제어**: 청중 이동 잠금과 PDF 저장 허용 여부 설정
5. **실습 자료 제공**: 유튜브 소스, PDF, 음성, 동영상, BananaNL 설치 안내

## 사용 기술

- **화면 구성**: HTML, CSS, JavaScript
- **화면 움직임**: GSAP, ScrollTrigger
- **실시간 동기화**: Firebase Realtime Database
- **강사 로그인**: Firebase Authentication
- **공개 배포**: GitHub, Vercel

## 실행 방법

### 가장 쉬운 방법

별도 설치 없이 위의 **배포 주소**를 누르면 바로 사용할 수 있습니다.

### 내 컴퓨터에서 실행하기

1. 이 프로젝트 폴더를 엽니다.
2. 폴더의 터미널에서 아래 명령어를 실행합니다.

```powershell
python -m http.server 8765
```

3. 인터넷 브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:8765/index.html
```

4. 수업 슬라이드는 아래 주소에서 확인합니다.

```text
http://127.0.0.1:8765/slides.html
```

> `admin.html`은 서버 없이 작동하는 관리자 화면 목업입니다. 실제 강사 제어는 `slides.html?admin`과 Firebase 로그인을 사용합니다.
