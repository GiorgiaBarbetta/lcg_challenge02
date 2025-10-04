let xMax = 800;
let yMax = 500;

let xSun = 0;
let ySun = 0;

// Parametri della parabola
let a = 0.002;      // curva della parabola
let h = xMax / 2;   // vertice a metà schermo
let k = yMax * 0.1; // altezza del vertice

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background("#B5E5FF");

  // Sole
  push();
    noStroke();
    fill("#FFAA00");
    ellipse(xSun, ySun, 85);
    fill("#FFBF01");
    ellipse(xSun, ySun, 70);
  pop();

  // Montagne 
  push(); 
    fill("#986243");
    triangle(50,440, 160,270, 270,440);
    // Ombre montagne
    push();
      noStroke();
      fill("#503324");
      triangle(50,440, 160,270, 85,440);
    pop();

    triangle(-30,440, 70,200, 170,440);
    push();
      noStroke();
      fill("#503324");
      triangle(-30,440, 70,200, 5,440);
    pop();

    triangle(200,440, 400,240, 600,440);
    push();
      noStroke();
      fill("#503324");
      triangle(200,440, 400,240, 250,440);
    pop();

    triangle(130,440, 250,170, 370,440);
    push();
      noStroke();
      fill("#503324");
      triangle(130,440, 250,170, 167,440);
    pop();

  // Neve
  push();
    noStroke();
    fill("#FFFFFF");
    triangle(42,270, 70,201, 98,270);
    triangle(179,300, 160,271, 142,300);
    triangle(229,220, 250,171, 271,220);
    triangle(361,280, 400,241, 439,280);
  pop();

  // Ombre neve
  push();
    noStroke();
    fill("#DBDBDB");
    triangle(42,270, 70,201, 51,270); 
    triangle(147,300, 160,271, 142,300);
    triangle(229,220, 250,171, 235,220);
    triangle(361,280, 400,241, 370,280); 
  pop();

  // Casa
  push();

    fill("#5B60B5");
    rect(700,390,50,50);

    //ombra
    fill("#46498C");
    rect(750,390,10,50);

    fill("#E7A23B");
    triangle(700,390, 730,360, 750,390);

    //ombra
    fill("#C38A34");
    triangle(750,390, 730,360, 760,390);

    fill("#503324");
    rect(722,440,10,-25);
  pop();

  // Prato
  push(); 
    noStroke();
    fill("#059036");
    rectMode(CENTER);
    rect(0, 469, 1600, 60);
  pop();

  pop();

  // ---- Movimento parabolico del sole ----

  // Il sole si muove verso destra
  xSun = (xSun + 1) % (xMax);

  // Calcolo y in base alla parabola (arco verso il basso)
  ySun = a * (xSun - h) ** 2 + k;

  // Quando il sole finisce a destra, riparte da sinistra
  if (xSun > xMax) {
    xSun = 0;
  }
}