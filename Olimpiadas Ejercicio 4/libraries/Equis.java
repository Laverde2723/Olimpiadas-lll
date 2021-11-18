import processing.core.PApplet;


public class Equis extends Objeto {

	public Equis(int posX, int posY, int size, PApplet app) {
		super(posX, posY, size, app);
		// TODO Auto-generated constructor stub
	}

	
	public void pintarObjeto(int posx, int posy) {
		app.fill(0);
		app.rect(posx, posy, size, size);
		}

}
