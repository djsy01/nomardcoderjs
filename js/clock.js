// 시간과 날짜를 표시할 요소들 선택
const clock = document.querySelector("#clock");
const h5 = document.querySelector("nav h5");

const timer = () => {
  const now = new Date();
  
  // 날짜와 시간 값을 각각 설정
  const years = String(now.getFullYear());
  const months = String(now.getMonth() + 1); // 월은 0부터 시작하므로 +1
  const days = String(now.getDate());
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // 시간을 #clock에 표시
  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
  
  // 날짜를 nav h5에 표시
  h5.innerText = `${years}년 ${months}월 ${days}일`;
};

// 처음에 한 번 실행하고, 1초마다 갱신
timer();
setInterval(timer, 1000);

// API 예시 코드 (필요하지 않다면 제거할 수 있음)
const { api_key } = require("./module1.js");
console.log(api_key.kk);
console.log(api_key.uu);
