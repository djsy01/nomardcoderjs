const API_KEY = "";
const geoOk = async (positon) => {
  const lat = positon.coords.latitude;
  const lon = positon.coords.longitude;
  const weatherInfo = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
  ).json();
  // const city = document.querySelector("#weather span:first-child");
  const temp = document.querySelector("#weather span:last-child");

  // city.innerText = weatherInfo.name;
  temp.innerText = `현재 계신 곳의 기온은 ${weatherInfo.main.temp}도 입니다.`;

  const airInfo = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
  ).json();
  const air = document.querySelector("#air span:first-child");
  const airCon = airInfo.list[0].components.no2;
  let msg;
  if (airCon < 50) {
    msg = "미세먼지 한 점 없는 하루 입니다. 가볍게 산책이라도 어떠세요?";
  } else if (airCon < 100) {
    msg = "오늘은 하늘이 맑습니다.";
  } else if (airCon < 200) {
    msg = "하늘이 맑지도, 흐리지도 않네요";
  } else if (airCon < 400) {
    msg = "하늘에 미세먼지가 많습니다. 외출을 삼가해주세요.";
  } else {
    msg = "최악의 미세먼지 입니다. 외출하신다면 반드시 착용해주세요!";
  }
  air.innerText = msg;
};
const geoNot = () => {
  alert("dame");
};
navigator.geolocation.getCurrentPosition(geoOk, geoNot);