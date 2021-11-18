import processing.core.PApplet;
import processing.core.PImage;

public class Principal extends PApplet {
	
	
	int [][] cuadricula;
	int matX , matY;
	int c, x ;
	int col, row;
	PImage imagen;
	Elipse elipse;
	Equis equis;
	boolean pintarElipse = false;
	boolean pintarEquis = false;
	boolean turnBola = true;
	
	
	
	public static void main(String[] args) {
		PApplet.main("Principal");

	}
    
	
	public void settings() {
		size(850, 850);
		
	}

	


	public void setup() {
		
		imagen = loadImage("x.png");
		imagen = loadImage("o.png");
		
		col = 3;
		row = 3;
		
		c = 1; 
		x = 2; 
		
		
		
		elipse = new Elipse(0, 0, 100, this);
		equis = new Equis(0, 0, 100, this);
		
		
		cuadricula = new int [] [] {

			{0,0,0},
			{0,0,0},
			{0,0,0},

			};
	}

	public void draw() {
		background(250);
		rectMode(CENTER);
		

		for (int i = 0; i < col; i++) {
			for (int j = 0; j < row; j++) {
				if(cuadricula[j][i] == 0) {
					fill(255);
				}else if (cuadricula[j][i] == 1) {
					fill(255,0,0);
				}else if (cuadricula[j][i] == 2){
					fill(0,255,255);
				}else if (cuadricula[j][i] == 3){
					fill(255,0,20);
				}else if (cuadricula[j][i] == 4){
					fill(255,0,255);
				}	

				rect( 200+(i*200),200+(j*200),200,200);
			}

		}
		
		
		pintarObjetos();
		
		}
	
	
	
	
	public void pintarObjetos() {
		
		if(pintarElipse==true) {
			
			rectMode(CENTER);
			elipse.pintarObjeto(200,200); 
		}
		
	}
	
	public boolean checkWinner() {
		 	
		   boolean opt1 = (cuadricula[0][0] == cuadricula[0][1]) && (cuadricula[0][1] == cuadricula[0][2]) && cuadricula[0][0] != 0;
		   boolean opt2 = (cuadricula[1][0] == cuadricula[1][1]) && (cuadricula[1][1] == cuadricula[1][2]) && cuadricula[1][0] != 0;
		   boolean opt3 = (cuadricula[2][0] == cuadricula[2][1]) && (cuadricula[2][1] == cuadricula[2][2]) && cuadricula[2][0] != 0;
		  
		   boolean opt4 = (cuadricula[0][0] == cuadricula[1][0]) && (cuadricula[1][0] == cuadricula[2][0]) && cuadricula[0][0] != 0;
		   boolean opt5 = (cuadricula[0][1] == cuadricula[1][1]) && (cuadricula[1][1] == cuadricula[2][1]) && cuadricula[0][1] != 0;
		   boolean opt6 = (cuadricula[0][2] == cuadricula[1][2]) && (cuadricula[1][2] == cuadricula[2][2]) && cuadricula[0][2] != 0;
		   
		   boolean opt7 = (cuadricula[0][0] == cuadricula[1][1]) && (cuadricula[1][1] == cuadricula[2][2]) && cuadricula[0][0] != 0;
		   boolean opt8 = (cuadricula[2][0] == cuadricula[1][1]) && (cuadricula[1][1] == cuadricula[0][2]) && cuadricula[2][0] != 0;
		    

		   if(opt1 || opt2 || opt3 || opt4 || opt5 || opt6 || opt7 || opt8) {
			   if(turnBola) {
					System.out.println("Game Over. Ganó el rojo.");
					
				}else {
					System.out.println("Game Over. Ganó el azul.");
				}
				return true;
		   }
		   else {
			   for (int i = 0; i < cuadricula.length; i++) {
				   for (int j = 0; j < cuadricula[i].length; j++) {
					if(cuadricula[i][j] == 0) {
						return false;
					}
				}
				
			}
			   System.out.println("Empate.");
			   return true;
		   }
	
		}
	
	
	
	public void mousePressed() {
		
		
		if (mouseX > 100 && mouseX < 100 + 200
				&& mouseY > 100 && mouseY < 100 + 200 ) {
			System.out.println("0 0");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[0][0] = 1;
				
			}
			else {
				cuadricula[0][0] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 300 && mouseX < 300 + 200
				&& mouseY > 100 && mouseY < 100 + 200 ) {
			System.out.println("0 1");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[0][1] = 1;
				
			}
			else {
				cuadricula[0][1] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 500 && mouseX < 500 + 200
				&& mouseY > 100 && mouseY < 100 + 200 ) {
			System.out.println("0 2");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[0][2] = 1;
				
			}
			else {
				cuadricula[0][2] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 100 && mouseX < 100 + 200
				&& mouseY > 300 && mouseY < 300 + 200 ) {
			System.out.println("1 0");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[1][0] = 1;
				
			}
			else {
				cuadricula[1][0] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 300 && mouseX < 300 + 200
				&& mouseY > 300 && mouseY < 300 + 200 ) {
			System.out.println("1 1");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[1][1] = 1;
				
			}
			else {
				cuadricula[1][1] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 500 && mouseX < 500 + 200
				&& mouseY > 300 && mouseY < 300 + 200 ) {
			System.out.println("1 2");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[1][2] = 1;
				
			}
			else {
				cuadricula[1][2] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 100 && mouseX < 100 + 200
				&& mouseY > 500 && mouseY < 500 + 200 ) {
			System.out.println("2 0");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[2][0] = 1;
				
			}
			else {
				cuadricula[2][0] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 300 && mouseX < 300 + 200
				&& mouseY > 500 && mouseY < 500 + 200 ) {
			System.out.println("2 1");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[2][1] = 1;
				
			}
			else {
				cuadricula[2][1] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
		
		if (mouseX > 500 && mouseX < 277 + 500
				&& mouseY > 500 && mouseY < 500 + 200 ) {
			System.out.println("2 2");
			pintarElipse=true;
			if(turnBola) {
				cuadricula[2][2] = 1;
				
			}
			else {
				cuadricula[2][2] = 2;
			}
			
			if(checkWinner()) {
				setup();
			}
			turnBola =	!turnBola;
		}
			
	}
}