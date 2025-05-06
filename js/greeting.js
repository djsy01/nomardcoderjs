const loginForm = document.querySelector("#loginForm");
const username = loginForm.querySelector("#username");
const welcome = document.querySelector("#welcome");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME = "username";
const name1 = localStorage.getItem(USERNAME);

const submitFuntion = (e) => {
  e.preventDefault();
  const name = username.value;
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  localStorage.setItem(USERNAME, name);
  displayName(name);
};

const displayName = (name) => {
  welcome.classList.remove(HIDDEN_CLASS_NAME);
  welcome.innerText = `안녕하세요 ${name}님 !`;
};

if (name1) {
  displayName(name1);
} else {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  loginForm.addEventListener("submit", submitFuntion);
}