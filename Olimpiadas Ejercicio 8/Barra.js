class Barra{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 166;
        this.h = 33;
    }

    paint() {
        fill(30, 144, 255);
        rect(this.x, this.y, this.w, this.h);
    }

    keyMove() { //Para mover la barra derecha con el teclado

        //Limites
        if (this.x > 464) {
            this.x = 464;
        }

        if (this.x < 0) {
            this.x = 0;
        }

        //Movimiento
        if (keyCode === LEFT_ARROW) {
            this.x -= 5;
        } else if (keyCode === RIGHT_ARROW) {
            this.x += 5;
        }
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


}