class jugador {
    constructor() {
        this.x = 315;
        this.y = 540;
        

    }
    show() {
        fill(255, 0, 0);
        rectMode(CENTER); 
        rect(this.x, this.y,  50, 50);
        
    }

    shoot() {
        return true;
    }
    
    move(dir) {
        switch (dir) {
            case "RIGHT":
                this.x += 15
                break;
            case "LEFT":
                this.x -= 15
                break;

        }

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

}