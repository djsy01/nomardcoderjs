const images = ["1.JPG", "2.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);