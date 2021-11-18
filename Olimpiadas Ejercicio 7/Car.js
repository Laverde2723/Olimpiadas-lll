class Car{

    constructor(x,y,diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = 4;
    }

    display(){
        
        //Cuerpo del carro rojo
        rectMode(CORNER);
        fill(234, 66, 66);
        rect(this.x, this.y, this.diameter + 10, this.diameter);

        //Llantas del carro rojo
        fill(80);
        rect(this.x, this.y, 10, 5); //Llanta sup izq
        rect(this.x + 30, this.y, 10, 5); //Llanta sup der
        rect(this.x, this.y + 25, 10, 5);  //Llanta inf izq
        rect(this.x + 30, this.y + 25, 10, 5); //Llanta inf der
    }

    restart() { //Volver a empezar donde comenzó el carro
        switch (key) {
            case 'Q':
            case 'q':
                this.x = 50;
                this.y = 200;
                break;
        }
    }

    move(){
        switch (key) {
            
            case 'D':
            case 'd':
                if(keyIsPressed==true){
                this.x += this.speed;
                }
                break;

            case 'A':
            case 'a':
                if(keyIsPressed==true){
                this.x -= this.speed;
                }
                break;  
            }
    }

    win() {

        if(this.x >= 500){
        //Texto del ganador
        fill(0, 255, 0);
        textSize(150);
        textAlign(CENTER);
        text('WIN!', 300, 225);
        fill(0);
        textSize(25);
        text('Press "Q" to restart', 300, 250);
        }
    }

    gameOver() {

        //Texto del ganador
        fill(255, 0, 0);
        textSize(90);
        textAlign(CENTER);
        text('GAME OVER', 300, 225);
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    } 
}