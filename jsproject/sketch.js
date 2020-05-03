var img;
var chosen_color;
function preload(){ //loads image into variable
  img = loadImage("coloring_page.png");
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);    
  image(img, 0, 0); //puts image onto canvas
  chosen_color = color(255, 0, 0); //sets initial color to red. To be changed by key presses later.
  
}


function draw() { //
  stroke(chosen_color);
  if(mouseIsPressed) { //if mouse is pressed down, it will make a line of the desired color
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed(){
  /*
  Determines if a key dedicated to a color is pressed, and if so, switches to that color
  */
  if(key === 'r'){ //red
    chosen_color = color(255, 0, 0);
  } else if(key === 'y'){ //yellow
    chosen_color = color(255, 255, 0);
  } else if(key === 'b'){ //blue
    chosen_color = color(0, 0, 255);
  } else if(key === 'g'){ //green
    chosen_color = color(0, 255, 0);
  } else if(key === 'p'){ //purple
    chosen_color = color(153, 0, 153);
  } else if(key === 'w'){ //brown
    chosen_color = color(102, 51, 0);
  } else if(key === 'o'){ //orange
    chosen_color = color(255, 153, 51);
  }
  return false;
}