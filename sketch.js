class Paddle {
  //an constuctor is used to initalize an object
  constructor () {
    this.height = 70;
    this.width = 10;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("orange");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  playerPaddle.height = 40;
  playerPaddle.display();
  //created the automated(computer) paddle
  var computerPaddle = new Paddle();
  computerPaddle.xPosition = 0;
  computerPaddle.yPosition = 150;
  computerPaddle.display();
  //draw the ball
  var ball = new Paddle();
  ball.xPosition = 200;
  ball.yPosition = 200;
  ball.height = 10;
  ball.width = 10;
  ball.display();
}