class Boton{
    constructor(posX, posY, radio) {
        this.posX = posX
        this.posY = posY
        this.radio = radio
    }
    pintar(){
        fill(0,0,0);
        circle(this.posX, this.posY, this.radio*2)
        fill(250);
        textSize(25);
        textAlign(CENTER);
        text ("Personaje", 250,110);
        
    }
    click(mx,my){
        if (dist(mx,my, this.posX, this.posY)<this.radio){
            return true
        }
        return false
    }
}