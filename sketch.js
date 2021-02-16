//  Alice and Bob's particles measure a differernt property
//sst-week4

var buttonShape;
var buttonColor;
var buttonReset;

var theColor = 0;
var secondColor;

var theShape=0;
var secondShape;

var value = 0;


function setup() {
  createCanvas(400, 400);
  
  buttonShape=createButton("Measure Shape");
  buttonShape.position (120,360);
  buttonShape.mouseReleased(changeShape);
  buttonShape.style('font-size', '14px');
  
  buttonReset=createButton("Reset");
  buttonReset.position (20, 360);
  buttonReset.mouseReleased(resetShape);
  buttonReset.style('font-size', '14px');
  
  
  buttonColor=createButton("Measure Color");
  buttonColor.position (280,360);
  buttonColor.style('font-size', '14px');
  buttonColor.mouseReleased(changeColor);
  
  noStroke();  

}


function draw() {
  background(2,48,86);
  
  if (value == 1) {
    fill (color([255, random(100, 250), random(0, 255)]));
    
    if(currentShape == 0) ellipse(200,200,200,200); // circle 
    if(currentShape == 1) rect(100,100,200,200); // rectangle
    
  }
   
  else if (value == 2){
    theColor = secondColor;
    fill(theColor);
    ellipse(200,200,random(150,250),random(150,250));
    rect(random(80,120),random(80,120),random(150,200),random(150,200));
  
  } 
  else if (value == 0){
    // fill (color([255, random(100, 250), random(0, 255)]));
    fill (2,48,86);
    ellipse(200,200,random(150,250),random(150,250));
    // fill (color([255, random(100, 250), random(0, 255)]));
    rect(random(80,120),random(80,120),random(150,200),random(150,200));
  }
    
  else {
    background(0);
    
  }
}



function changeShape(){
  value = 1;
  currentShape = floor(random(2));
  // print("I am the button!", currentShape);
}

function changeColor(){
  value = 2;
  if (random(10) > 5) {
    secondColor = color(46,207,223); // blue
  } else {
    secondColor = color(222, 80, 40); // redish
  }
  
}

function resetShape(){
  // print("Resetting shape!");
  value = 0;
}
