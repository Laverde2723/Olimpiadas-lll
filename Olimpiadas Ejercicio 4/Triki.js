//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351

let cuadrados =[[0,0,0],
              [0,0,0],
              [0,0,0]];
let Turnos = true; 

function setup() {
  createCanvas(800, 1000);
}

function draw() {
  background(255);
  noStroke();
  fill(255, 50, 110);
  textSize(80);
  text('Triki Triki', 200, 120);
  
  noFill();
  
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let x = 100 + i*200;
      let y = 197 + j*200;
      
      switch (cuadrados[j][i]) {

        case 0:
        fill(255);

        break;
        

        case 1:
        textSize(140);
        noStroke();
        fill(255, 0, 0);
        text("X",150 + i*200,355 + j*200);  
        noFill();

        break;
        

        case 2:
        stroke(0,0,255);
        strokeWeight(14);
        circle(200 + i*200, 297 + j*200, 100);
        noFill();

        break;      

        default:

          break;
      }
      
      stroke(0);
      strokeWeight(6);
      rect(x,y,200,200);
    }
  }
  checkWinner();
}

function checkWinner() {
  
  opt7 = (cuadrados[0][0] == cuadrados[1][1]) && (cuadrados[1][1] == cuadrados[2][2]) && cuadrados[0][0] != 0;
  opt8 = (cuadrados[2][0] == cuadrados[1][1]) && (cuadrados[1][1] == cuadrados[0][2]) && cuadrados[2][0] != 0;

   
  opt4 = (cuadrados[0][0] == cuadrados[1][0]) && (cuadrados[1][0] == cuadrados[2][0]) && cuadrados[0][0] != 0;
  opt5 = (cuadrados[0][1] == cuadrados[1][1]) && (cuadrados[1][1] == cuadrados[2][1]) && cuadrados[0][1] != 0;
  opt6 = (cuadrados[0][2] == cuadrados[1][2]) && (cuadrados[1][2] == cuadrados[2][2]) && cuadrados[0][2] != 0;

  
  opt1 = (cuadrados[0][0] == cuadrados[0][1]) && (cuadrados[0][1] == cuadrados[0][2]) && cuadrados[0][0] != 0;
  opt2 = (cuadrados[1][0] == cuadrados[1][1]) && (cuadrados[1][1] == cuadrados[1][2]) && cuadrados[1][0] != 0;
  opt3 = (cuadrados[2][0] == cuadrados[2][1]) && (cuadrados[2][1] == cuadrados[2][2]) && cuadrados[2][0] != 0;

   

  if(opt1 || opt2 || opt3 || opt4 || opt5 || opt6 || opt7 || opt8) {
    if(Turnos) {
     noStroke();
     fill(255, 50, 110);
     textSize(80);
     text('¡Has Ganado!',250, 920);
     
   }else {
    noStroke();
    fill(255, 50, 110);
    textSize(80);
    text('¡Has Ganado!', 250, 920);
   }
  }
  else {
    for (i = 0; i < cuadrados.length; i++) {
      for (j = 0; j < cuadrados[i].length; j++) {
     if(cuadrados[i][j] == 0) {
     }
   }
   
 }
  noStroke();
  fill(255, 50, 110);
  textSize(80);
  text('Empataste', 250, 920);
  }
  
}

function mousePressed() {
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let x = 100 + i*200;
      let y = 197 + j*200;
      let valorActual = cuadrados[j][i];
      if(mouseX > x && mouseX < x + 200 && mouseY > y && mouseY < y + 200 && valorActual === 0 ){
        if(Turnos){
          cuadrados[j][i] = 1;
        }else{
          cuadrados[j][i] = 2;
        }
        Turnos=!Turnos;
      }     
    }
  }
}
