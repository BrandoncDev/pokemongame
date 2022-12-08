const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = 1024;
canvas.height = 576;
console.log(c);

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = './img/map.png';
const PlayerImage = new Image();
PlayerImage.src = './img/playerDown.png'

image.onload = () => {
    c.drawImage(image, -1175, -570);
    c.drawImage(PlayerImage, 0, 0, PlayerImage.width / 4, PlayerImage.height, 
    canvas.width / 2 - PlayerImage.width, canvas.height / 2,
    PlayerImage.width / 4, PlayerImage.height);
};
 