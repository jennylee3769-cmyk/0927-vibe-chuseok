# 바이브코딩으로 추석 인사말 선화 영상 만들기

## 서비스 소개

공부방·학원 원장·1인기업가·소상공인을 위한 2시간 실습 강의 사이트입니다.
강의 소개와 준비물, 복사용 프롬프트, 36장 웹슬라이드를 한곳에서 제공합니다.
강사가 슬라이드를 넘기면 Firebase로 연결된 청중 화면도 같은 장으로 이동합니다.

## 배포 주소

- 강의 안내: [https://0927-vibe-chuseok.vercel.app](https://0927-vibe-chuseok.vercel.app)
- 수업 슬라이드: [https://0927-vibe-chuseok.vercel.app/slides.html](https://0927-vibe-chuseok.vercel.app/slides.html)
- 강사 슬라이드: [https://0927-vibe-chuseok.vercel.app/slides.html?admin](https://0927-vibe-chuseok.vercel.app/slides.html?admin)

## 주요 기능

1. **강의 안내 페이지**: 대상, 일정, 커리큘럼, 강사 소개 확인
2. **36장 웹슬라이드**: 방향키 이동, 전체 보기, 타이머, PDF 저장
3. **강사·청중 동기화**: 강사 화면 이동에 맞춘 청중 화면 자동 이동
4. **수업 정책 제어**: 청중 이동 잠금과 PDF 저장 허용 여부 설정
5. **실습 자료 제공**: 설치 명령어와 영상 제작 프롬프트 복사·TXT 저장

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

