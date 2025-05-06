const images = ["1.JPG", "2.JPG"]; // 대소문자 반드시 맞춰야 함

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log("선택된 배경:", chosenImage); // 확인용 로그

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
