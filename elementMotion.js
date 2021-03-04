const canvas = document.querySelector("#first-canvas");
const ctx = canvas.getContext("2d"); 
const canvasWidth = canvas.width; 
const canvasHeight = canvas.height;

//const colors = ["blue", "red", "pink"];

function circle(x, y, radius, fill) {
    /*ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];*/

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fill) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

class Ball {
    constructor() {
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    draw() {
        circle(this.x, this.y, 25, true);
    }

    moveRight() {
        this.ySpeed = 0;
        this.x += this.xSpeed + 5;
        clearInterval(up, down, left);
    }
    
    moveLeft() {
        this.ySpeed = 0;
        this.x -= this.xSpeed + 5; 
        clearInterval(up, down, right);
    }


    moveDown() {
        this.xSpeed = 0;
        this.y += this.ySpeed + 5;
        clearInterval(up, right, left);
        
    }

    moveUp() {
        this.xSpeed = 0;
        this.y -= this.ySpeed + 5;
        clearInterval(right, down, left);
    }

    stop() {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
}

let ball = new Ball();
ball.draw();

ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

setInterval(() => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ball.draw()

    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

    if (ball.x < 0) {
        ball.x = canvasWidth;
    } else if (ball.x > canvasWidth) {
        ball.x = 0;
    }

    if (ball.y < 0) {
        ball.y = canvasHeight;
    } else if (ball.y > canvasHeight) {
        ball.y = 0;
    }
}, 50)

document.addEventListener("keydown", (event) => {
    let right = setInterval(() => {
            if (event.key === "ArrowRight" || event.key ===  "d") {
                ball.moveRight();  
            }
        }, 50)

    let left = setInterval(() => {    
        if (event.key === "ArrowLeft" || event.key === "a") {
            ball.moveLeft();
        }
    }, 50)

    let down = setInterval(() => {   
       if (event.key === "ArrowDown" || event.key ===  "s") {
            ball.moveDown();
        }
    }, 50)
       
    let up = setInterval(() => { 
    if (event.key === "ArrowUp" || event.key ===  "w") {
            ball.moveUp();
        }
    }, 50)

    let stop = setInterval(() => { 
        if (event.key === " ") {
            ball.stop();
        }
    }, 50)
})