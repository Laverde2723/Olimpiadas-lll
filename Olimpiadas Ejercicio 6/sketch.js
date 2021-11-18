//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351

let tank;
let aliens = [];
let bullets = [];
let looser = false;


function setup() {
  createCanvas(630, 600);
  tank = new jugador();
  for (let i = 0; i < 6; i++) {
    aliens.push(new Aliensongos(random(0, 630), random(-50, 0))); //Creates Aliens
  }
}

function draw() {
  background(255);
  tank.show();
  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show()
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    removeDeathBullets();
  }

  validateImpact();
  validateLost();

  if (looser === true) {
    fill(255);
    textSize(58);
    textAlign(CENTER);
    text('PERDISTE', 314, 340);
  }
}

function mousePressed() {

  bullets.push(new disparos(tank.getX(), tank.getY()));

}

function keyPressed() {
  switch (key) {
    case 'd':
      tank.move("RIGHT")
      break;
    case 'a':
      tank.move("LEFT")
      break;
  }
}

function removeDeathBullets() {
  for (let i = 0; i < bullets.length; i++) {
    if (!bullets[i].isAlive()) {
      bullets.splice(i, 1);
      break;

    }

  }
}

function validateImpact() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliens.length; j++) {
      if (dist(bullets[i].getX(), bullets[i].getY(), aliens[j].getX(), aliens[j].getY()) < aliens[j].getTam() / 2) {
        aliens.splice(j, 1);
        console.log("impact");
      }
    }
  }
}

function validateLost() {
  for (let i = 0; i < aliens.length; i++) {
    if (aliens[i].getY() >= 600) {
      looser = true;
    }
  }
}