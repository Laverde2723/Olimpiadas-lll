class GeneralCar {

    constructor(x, y, side, speed) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.speed = speed;
    }

    display() {

        //Pintar carros varios

        //Cuadrado-cuerpo del carro
        
        fill(45, 242, 123);
        noStroke();
        rectMode(CORNER);
        rect(this.x, this.y, this.side + 10, this.side);

        //Llantas del carro general
        fill(80);
        noStroke();
        rectMode(CORNER);
        rect(this.x, this.y, 10, 5); //Lanta sup izq
        rect(this.x + 30, this.y, 10, 5); //Llanta sup der
        rect(this.x, this.y + 25, 10, 5); //Llanta inf izq
        rect(this.x + 30, this.y + 25, 10, 5); //Llanta inf der
    }

    move() {
        this.x -= this.speed;

        if (this.x < -30) {
            this.x = 1430;
        }
    }

    validate(x,y){
        if(this.x < x + 40 && this.x + 40 > x &&
            this.y < y + 30 && this.y + 30 > y){
                return true;
            }
            return false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


}