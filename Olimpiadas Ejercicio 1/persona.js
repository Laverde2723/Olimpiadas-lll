class Persona {
    constructor(posX, posY, tam, url) {
        this.posX = posX
        this.posY = posY
        this.tam = tam
        this.url = url
        this.img
    }
    cargarImagen() {
        this.img = loadImage("/1x/" + this.url + ".png")
    }
    pintar() {
        imageMode(CENTER)
        image(this.img, this.posX, this.posY, this.tam, this.tam)
    }
}