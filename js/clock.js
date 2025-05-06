const clock = document.querySelector("#clock");
const h5 = document.querySelector("nav h5");
const timer = () => {
  now = new Date();
  const years = String(now.getFullYear());
  const months = String(now.getMonth() + 1);
  const days = String(now.getDate());
  const hours = String(now.getHours()).padStart(2, "0");
  const minuates = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}시 ${minuates}분 ${seconds}초`;
  h5.innerText = `${years}년 ${months}월 ${days}일`;
};
timer();
setInterval(timer, 1000);
const { api_key } = require("./module1.js");
console.log(api_key.kk);
console.log(api_key.uu);