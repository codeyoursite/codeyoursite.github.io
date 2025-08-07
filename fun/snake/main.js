class Snake {
    constructor() {
        this.points = 0;
        this.speedx = 0;
        this.speedy = 1;
        this.head = [Math.floor((GRIDWIDTH * PIXELSIZE) / 20)*10,Math.floor((GRIDHEIGHT * PIXELSIZE) / 20)*10]
        this.body = [this.head];
    }
    grow(x, y) {
        this.body.push([x, y])
    };
}
const GRIDHEIGHT = 40;
const GRIDWIDTH = 40;
const PIXELSIZE = 19;
let gameover = false;
let score = 0;

let board = document.getElementById("canvas");
board.height = PIXELSIZE * GRIDHEIGHT;
board.width = PIXELSIZE * GRIDWIDTH;
let context = board.getContext("2d");

let snake = new Snake();
const image = document.getElementById("apple");
const img2 = document.getElementById("apple2");
let foodx;
let foody;
let speedx;
let speedy;
let color = "whitesmoke";
function placeFood() {
    foodx = Math.floor(Math.random() * GRIDWIDTH) * PIXELSIZE;
    foody = Math.floor(Math.random() * GRIDHEIGHT) * PIXELSIZE;
}

function placeSpeed() {
    color = "blue";
    speedx = Math.floor(Math.random() * GRIDWIDTH) * PIXELSIZE;
    speedy = Math.floor(Math.random() * GRIDHEIGHT) * PIXELSIZE;
}

function backToNormal() {
    clearInterval(interval);
    t = 300;
    interval = setInterval(update, t);
}

function update() {
    console.log(snake.speedx, snake.speedy);
    for (let i = 1; i < snake.body.length; i++) {
        if (snake.head[0] === snake.body[i][0] && snake.head[1] === snake.body[i][1] && snake.body.length > 3) {
            gameover = true;
        }
    }
    
    if (snake.head[0] === foodx &&
        snake.head[1] === foody) {
        score++;
        snake.grow(foodx, foody);
        placeFood()
    }

    if (snake.head[0] === speedx &&
        snake.head[1] === speedy &&
        color !== "whitesmoke") {
        score += 5;
        snake.grow(speedx, speedy);
        color = "whitesmoke";
        const time = setTimeout(placeSpeed, 30000);
        clearInterval(interval);
        t = 50;
        interval = setInterval(update, t);
        const intervalChange = setTimeout(backToNormal, 10000);
    }


    if (gameover) {
        document.getElementById("txt").innerHTML = "Game Over!<br>Score: " + score;
        clearInterval(interval);
        return;
    }

    for (let i = snake.body.length - 1; i > 0; i--) {
        snake.body[i] = snake.body[i - 1]; 
    };

    if (snake.body.length) {
        snake.body[0] = [snake.head[0],snake.head[1]];
    }
    
    snake.head[0] += PIXELSIZE * snake.speedx;
    snake.head[1] += PIXELSIZE * snake.speedy;

    context.fillStyle = "whitesmoke";
    context.fillRect(0,0, board.width, board.height);
    
    if (color === "blue") {
        context.drawImage(img2, speedx, speedy, PIXELSIZE, PIXELSIZE);
    }

    context.drawImage(image, foodx, foody, PIXELSIZE, PIXELSIZE);

    context.fillStyle = "green";
    for (let i = 0; i < snake.body.length; i++) {
        let snakex = snake.body[i][0];
        let snakey = snake.body[i][1];
        context.fillRect(snakex, snakey, PIXELSIZE, PIXELSIZE);
    }

    if (snake.head[0] < 0 || snake.head[0] > GRIDWIDTH * PIXELSIZE ||
        snake.head[1] < 0 || snake.head[1] > GRIDHEIGHT * PIXELSIZE) {
            gameover = true;
        }

    document.getElementById("score").textContent = score;
}

function movement(e) {
    if (e.code === "ArrowUp") {
        if (snake.speedy != 1) {
            snake.speedy = -1;
            snake.speedx = 0;
        }
    } else if (e.code === "ArrowDown") {
        if (snake.speedy != -1) {
            snake.speedy = 1;
            snake.speedx = 0;
        }
    } else if (e.code === "ArrowRight") {
        if (snake.speedx != -1) {
            snake.speedy = 0;
            snake.speedx = 1;
        }
    } else if (e.code === "ArrowLeft") {
        if (snake.speedx != 1) {
            snake.speedy = 0;
            snake.speedx = -1;
        }
    }
}

document.body.addEventListener("keydown", movement);

placeFood();
let startSpeed = setTimeout(placeSpeed, 20000);
let t = 300;
let interval = setInterval(update, 300);
