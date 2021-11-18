//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351

let generalCarFile1 = [];
let generalCarFile2 = [];
let generalCarFile3 = [];
let generalCarFile4 = [];
let generalCarFile5 = [];

let superCar = new SuperCar(50, 220, 30, 4);

let gameOver;

function setup() {
  createCanvas(1400, 400);

  gameOver = false;
  let x = 50;

  for (let i = 0; i < 5; i++) {
    generalCarFile1.push(new GeneralCar(x, 25, 30, 2)); //Fila 1
    generalCarFile2.push(new GeneralCar(x, 105, 30, 2.5)); //Fila 2
    generalCarFile3.push(new GeneralCar(x, 185, 30, 1.5)); //Fila 3
    generalCarFile4.push(new GeneralCar(x, 265, 30, 2)); //Fila 4
    generalCarFile5.push(new GeneralCar(x, 345, 30, 3)); //Fila 5
    x += 300;
  }
}

function draw() {
  background(165);
  let y = 0;

  //Se pinta la carretera
  for (let i = 0; i < 5; i++) {
    fill(123);
    stroke(255);
    rect(0, y, 1400, 90);
    y += 80;
  }

  for (let i = 0; i < 5; i++) {
    
    //Choque de la fila 1
    if(generalCarFile1[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //Se pinta la fila 1
    generalCarFile1[i].display();
    generalCarFile1[i].move();

    //Choque de la fila 2
    if(generalCarFile2[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //Se pinta la fila 2
    generalCarFile2[i].display();
    generalCarFile2[i].move();

    //Choque de la fila 3
    if(generalCarFile3[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //Se pinta la fila 3
    generalCarFile3[i].display();
    generalCarFile3[i].move();

    //Choque de la fila 4
    if(generalCarFile4[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }

    //Se pinta la fila 4
    generalCarFile4[i].display();
    generalCarFile4[i].move();

    //Choque de la fila 5
    if(generalCarFile5[i].validate(superCar.getX(),superCar.getY()) == true){
      gameOver = true;
      superCar.gameOver();
      superCar.restart();
      location.reload();
    }
    //Se pinta la fila 5
    generalCarFile5[i].display();
    generalCarFile5[i].move();
  }

  //Para mostrar que ganaste y la forma de volver a comenzar
  if (superCar.getX() >= 1250) {
    superCar.win();
    superCar.restart();
  }

  //Pinta el super carro
  superCar.display();
  superCar.move();

  //Indicaciones
  fill(0);
  textSize(15);
  text('Use keys: a, w, d, s', 20,395);


}