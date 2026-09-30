# NotebookLM 슬라이드 Firebase 설정 체크리스트

## 확인 완료

- Firebase 표시 이름: `0930notebooklm`
- 실제 프로젝트 ID: `notebooklm-6db7d`
- 웹 앱 닉네임: `notebooklm-slides`
- 웹 앱 등록: 완료
- 슬라이드 덱 ID: `notebooklm-0930`
- Realtime Database: `asia-southeast1` 생성 완료
- Database URL: `https://notebooklm-6db7d-default-rtdb.asia-southeast1.firebasedatabase.app`
- 이메일/비밀번호 로그인: 사용 설정 완료
- Realtime Database 보안 규칙: 게시 완료
- 연결 설정 파일: `firebase/firebase-config.js`
- 데이터베이스 규칙 파일: `firebase/database.rules.json`

## 1. Realtime Database 생성 - 완료

1. Firebase 콘솔에서 `0930notebooklm` 프로젝트 열기
2. 빌드 → Realtime Database 확인
3. 위치: 싱가포르 `asia-southeast1`
4. `firebase/firebase-config.js`에 Database URL 입력 완료

리전은 데이터베이스 생성 뒤 바꾸기 어렵기 때문에 임의 선택 금지.

## 2. Authentication 설정 - 로그인 방식 완료

1. 빌드 → Authentication → 시작하기 완료
2. Sign-in method → 이메일/비밀번호 사용 설정 완료
3. Users → 사용자 추가
4. 강사 로그인용 이메일과 본인만 아는 비밀번호 등록
5. 생성된 사용자의 UID 복사

## 3. 관리자 UID 등록

Realtime Database의 데이터 탭에서 다음 경로와 값을 추가.

```text
admins
  강사_UID: true
```

예시 형식만 참고하고 실제 UID 사용.

```json
{
  "admins": {
    "실제_강사_UID": true
  }
}
```

## 4. 보안 규칙 게시 - 완료

1. Realtime Database → 규칙
2. `firebase/database.rules.json` 전체 복사
3. 규칙 편집기에 붙여넣기
4. 게시 선택

규칙 효과:

- 청중: 슬라이드 상태 읽기 가능
- 관리자 UID: 슬라이드·잠금·PDF 상태 쓰기 가능
- 일반 로그인 사용자: 제어 불가
- `admins` 목록: 본인 UID 항목만 읽기 가능

## 5. 접속 주소

- 청중 화면: `slides.html`
- 강사 로그인: `slides.html?admin`
- 프로젝션 화면: `slides.html?screen`
- 동기화 제외 자유 열람: `slides.html?view`

## 6. 완료 점검

- `?admin`에서 강사 계정 로그인 성공
- 강사 화면의 이전·다음 이동을 청중 화면이 즉시 따라옴
- 청중 잠금 ON에서 청중의 직접 이동 차단
- 청중 잠금 OFF에서 청중의 직접 이동 허용
- PDF 허용 OFF에서 PDF 저장 버튼 숨김
- 로그아웃 또는 일반 계정에서 관리자 제어 버튼 숨김
- Firebase 미설정 상태에서 자유 열람 유지
