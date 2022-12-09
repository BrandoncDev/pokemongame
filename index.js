const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = 1024;
canvas.height = 576;
console.log(c);

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

// sprite and map 
const image = new Image();
image.src = './img/map.png';

const PlayerImage = new Image();
PlayerImage.src = './img/playerDown.png'

class Sprite {
    constructor({position, velocity, image}){
        this.position = position
        this.image = image
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite({position: {
    x: -1175,
    y: -570
},
    image: image
})
// loading sprite and map
image.onload = () => {
};

const keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    }
}

// animateing player and other tings 
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(PlayerImage, 0, 0, PlayerImage.width / 4, PlayerImage.height, 
    canvas.width / 2 - PlayerImage.width, canvas.height / 2,
    PlayerImage.width / 4, PlayerImage.height);

    if(keys.w.pressed && lastkey === 'w') background.position.y = background.position.y += 3
    else if(keys.a.pressed && lastkey === 'a') background.position.x = background.position.x += 3
    else if(keys.s.pressed && lastkey === 's') background.position.y = background.position.y -= 3
    else if(keys.d.pressed && lastkey === 'd') background.position.x = background.position.x -= 3

    
}
animate()
// input
let lastkey= ''
window.addEventListener('keydown', (e) =>{
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastkey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastkey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastkey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastkey = 'd'
            break

    }
    
})

window.addEventListener('keyup', (e) =>{
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break

    }
    
})