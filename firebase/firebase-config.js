/* Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → SDK 설정 및 구성 → "구성" 값을 그대로 붙여넣기
   이 값은 비밀번호가 아님(웹 앱에 공개되는 식별 정보) · 보안은 database.rules.json 규칙이 담당
   databaseURL 은 Realtime Database 화면 상단 주소 (예: https://프로젝트-default-rtdb.asia-southeast1.firebasedatabase.app) */
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDFFUhbiuz8h-XBEIgFDNWzA0h4KUk1Fic',
  authDomain: 'notebooklm-6db7d.firebaseapp.com',
  /* Realtime Database 생성 뒤 콘솔에 표시되는 URL 입력 · 생성 전에는 자유 열람 모드 */
  databaseURL: '',
  projectId: 'notebooklm-6db7d',
  storageBucket: 'notebooklm-6db7d.firebasestorage.app',
  messagingSenderId: '438275437698',
  appId: '1:438275437698:web:50043194670ffb0728709b',
  measurementId: 'G-EWDYPWS471'
};

/* 강의마다 다른 이름 - 같은 프로젝트로 여러 강의 운영 가능 (영문·숫자·하이픈) */
window.DECK_ID = 'notebooklm-0930';
