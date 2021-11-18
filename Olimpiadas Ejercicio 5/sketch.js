//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351

const ballInstance = new Ball(250,250,25);
const player1 = new LeftPlayer(15, 200, 20, 100);
const player2 = new RightPlayer(465,200,20, 100);

function setup() {
  createCanvas(500, 500);   
}

function draw() {
  let yRect1 = player1.getY();
  let yRect2 = player2.getY();
  let bx = ballInstance.getX();
  let by = ballInstance.getY();
  let score1 = ballInstance.getScore1();
  let score2 = ballInstance.getScore2();

  background(100,204,255);
  textSize(28);
  noStroke();
	text("PONG", 170, 30);
	text(score1, 100, 30);
	text(score2, 400, 30);

  ballInstance.pintar();
  player1.pintar();
  player2.pintar();
  ballInstance.mover();
  player1.mover();
  player2.mover();
  
  if (bx >= 460 && by > yRect2 && by < (yRect2 + 100)) {
    ballInstance.setMoveRight(false);
  }

  if (bx <= 40 && by > yRect1 && by < (yRect1 + 90)) {
    ballInstance.setMoveRight(true);
  }

}