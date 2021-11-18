//Juan Carlos Laverde - A00371894
//Samuel Ortiz - A00372452
//Camila Lerma - A00368351

let Usuarios;
let botonIz;
let botonDer;
let UsuarioIndex;
let AleatorioIndex;

function setup() {
  Usuarios = [];
  UsuarioIndex = 0
  for (let i = 0; i < 8; i++) {
    let nuevo = (new Persona(250, 250, 150, "Personaje" + (i + 1)))
    nuevo.cargarImagen()
    Usuarios.push(nuevo)
  }
  createCanvas(500, 500);
  botonIz = new Boton(100, 250, 20)
  botonDer = new Boton(400, 250, 20)
}

function draw() {
  background(163, 161, 168);
  Usuarios[UsuarioIndex].pintar()
  botonIz.pintar()
  botonDer.pintar()
  triangle(393,240, 393, 260, 412,250);
  triangle(107,240, 107,260,  87,250);

}

function mousePressed() {
  if (botonIz.click(mouseX, mouseY)) {
    AleatorioIndex = Math.floor(random(0, 8))
    UsuarioIndex = AleatorioIndex
    console.log("Izquierda")
  }
  if (botonDer.click(mouseX, mouseY)) {
    AleatorioIndex = Math.floor(random(0, 8))
    UsuarioIndex = AleatorioIndex
    console.log("Derecha")
  }

}