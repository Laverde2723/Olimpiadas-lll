class Taxi {

    constructor(x, y, diameter, speed) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speed = speed;
    }

    display() {

    //Pintar todo el Taxi
   
        //Cuadrado amarillo del Taxi
        rectMode(CORNER);
        fill(255, 242, 123);
        noStroke();
        rect(this.x, this.y, this.diameter, this.diameter + 10);

        //Llantas del taxi
        fill(80);
        noStroke();
        rectMode(CORNER);
        rect(this.x, this.y, 5, 10); //Lanta sup izq
        rect(this.x+25, this.y, 5, 10); //Llanta sup der
        rect(this.x, this.y + 30, 5, 10); //Llanta inf izq
        rect(this.x+25, this.y + 30, 5, 10); //Llanta inf der
    }

    move() {
        this.y += this.speed;

        if (this.y > 420) {
            this.y = -20;
        }
    }

    validate(x,y){
        if(this.x < x + 40 && this.x + 30 > x &&
            this.y < y + 30 && this.y + 40 > y){
                return true;
            }
            return false;
    }


    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    
}