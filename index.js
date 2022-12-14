const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
canvas.width = 1024;
canvas.height = 576;
console.log(collisons);

const collsionsmap = []
for (let i = 0; i < collisons.length; i += 70){
    collsionsmap.push(collisons.slice(i, 70 + i))
    
}
console.log(collsionsmap)
const offset = {
    x: -1175,
    y: -570
}

class Boundry {
    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const boundaries = []

// 48 is Boundry width * 4
collsionsmap.forEach((row, i) =>{
    row.forEach((Symbol, j) =>{
        if( Symbol === 1025){
        boundaries.push(new Boundry({position:{
            x: j * 48 + offset.x,
            y: i * 48 + offset.y
        }}))
}})
})

console.log(boundaries)
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
    x: offset.x,
    y: offset.y
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
    boundaries.forEach(Boundry =>{
        Boundry.draw()
    })
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