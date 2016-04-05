
//INTERACTIVE WATER CYCLE BY SANJANA BHATIA

//global variables go here
var bg = "black";
var raincolour = "Cadetblue";

//Set up your canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//Draw your story
function draw() {
  background(bg);

  //rain - make more droplets
  stroke(raincolour);
  strokeWeight(5);
  fill(raincolour);
  line(300,380,300,405);
  line(300,310,300,335);
  line(300,450,300,475);
  line(400,380,400,405);
  line(400,450,400,475);
  line(400,310,400,335);
  line(500,380,500,405);
  line(500,450,500,475);
  line(500,310,500,335);
  line(500,250,500,275);

  //clouds
  stroke ("white");
  fill("white");
  ellipse(400,120,90,90);
  ellipse(460,120,110,110);
  ellipse(520,120,90,90);
  ellipse(600,200,80,80);
  ellipse(660,200,110,110);
  ellipse(720,200,80,80);
  ellipse(300,250,90,90);
  ellipse(360,250,110,110);
  ellipse(420,250,90,90);

  fill("white")
  textSize(40);
  text("(p)recipitate", 80, 120);

  //earth
  stroke("peru");
  fill("peru");
  quad(0,600,windowWidth,600,windowWidth,windowHeight,0,windowHeight);

  //sun - make lines
  stroke("yellow")
  fill("yellow");
  ellipse(900,100,100,100);

  textSize(40);
  text("(c)ondensate", 590, 100);
  fill(0, 102, 153);

  //water vapour
  stroke("grey");
  fill("grey");
  ellipse(800,400,10,10);
  ellipse(700,400,10,10);
  ellipse(700,500,10,10);
  ellipse(800,500,10,10);
  ellipse(850,490,10,10);
  ellipse(750,440,10,10);
  ellipse(890,400,10,10);
  ellipse(730,300,10,10);
  ellipse(850,310,10,10);
  ellipse(790,320,10,10);

  fill("grey")
  textSize(40);
  text("(e)vaporate", 480, 570);
}

function keyPressed() {

  //night & day
  if(keyCode === SHIFT){
  	if(bg == "SkyBlue"){
  		bg = "black";
  	} else if (bg=="black"){
  		bg = "SkyBlue";
  	}
  }

//precipitation animation
  if(key == "p"){
    if(raincolour == "aqua"){
      raincolour = "Cadetblue";
    } else if (raincolour =="Cadetblue"){
      raincolour = "aqua"
    }
  }

//evaporation animation
  if(key == "e"){
    point(800, 460);
    point(780, 500);
    point(830, 490);
    point(790, 450);
    point(800, 320);
    point(780, 300);
    point(830, 390);
    point(790, 350);
    point(650, 320);
    point(690, 300);
    point(590, 390);
    point(600, 350);
    point(650, 420);
    point(690, 510);
    point(590, 490);
    point(600, 375);
  }

//condensation animation
 if (key == "c"){
   stroke ("grey");
   fill("grey");
   ellipse(350,170,70,70);
   ellipse(410,170,90,90);
   ellipse(470,170,70,70);
   ellipse(500,240,70,70);
   ellipse(560,240,90,90);
   ellipse(620,240,70,70);

 }
}
