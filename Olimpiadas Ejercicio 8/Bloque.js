class Bloque {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 126;
        this.h = 33; 
        this.r = 249;
        this.g = 59;
        this.b = 183;
        this.active = true;
    }

    paint() {

        if(this.active){
            fill(this.r,this.g,this.b);
            noStroke();
            rect(this.x, this.y, this.w, this.h);
        }
       
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getActive(){
        return this.active;
    }

    setActive(active){
        this.active = active;
    }

    setColor(r,g,b){
        this.r =r;
        this.g=g;
        this.b=b;
    }

}