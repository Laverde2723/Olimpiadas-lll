import processing.core.PApplet;


public abstract class Objeto extends PApplet {
	
	protected int posX, posY, size;
	protected PApplet app; 
	
	
	public Objeto(int posX, int posY, int size, PApplet app) {
	 this.posX= posX; 
	 this.posY= posY; 
	 this.size= size; 
	 this.app=app;
	}
	
	
	public abstract void pintarObjeto(int posx, int posy);
	
	
}

