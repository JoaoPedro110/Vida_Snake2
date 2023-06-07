//Criar elemento que ira rodar o jogo
let canvas = document.getElementById("gamesnake");
let context = canvas.getContext("2d");
let box = 32;

//Cobrinha
let snake = [];

//Inicio da cobrinha 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//Direção 
let direction = "right";

//Comida 
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

//Função para criar o Background 
function criarBG() {
    context.fillStyle = "lightgreen";
    //Desenhar o retangulo 
    context.fillRect (0, 0, 16 * box , 16 * box);
}

//Função para criar a Cobra d
function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Função para desenhar comida
function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//Quando um evento acontece
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}
//Função Principal
function IniciarJogo(){
    if(snake[0].x > 15*box && direction == "right"){
        snake[0].x = 0;
    }
    if(snake[0].x < 0 && direction == "left"){
        snake[0].x = 16 * box;
    }
    if(snake[0].y > 15*box && direction == "down"){
        snake[0].y = 0;
    }
    if(snake[0].y < 0 && direction == "up"){
        snake[0].y = 16 * box;
    }
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeX -= box;
    if(direction == "down") snakeX += box;

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }else {
        x: Math.floor(Math.random() * 15 + 1) * box;
        y: Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}