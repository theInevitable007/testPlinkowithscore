const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gnd;
var turn = 0;
var division,disvision2,division3,division4,division5;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   
 gnd = new BaseClass(240,780,480,15);
 
 division5 = new Division(325,630,5,300)
 division4 = new Division(245,630,5,300)
 division3 = new Division(165,630,5,300)
 division2 = new Division(85,630,5,300);
 division = new Division(5,630,5,300);
  
  
}

function draw() {
  background("black"); 
  
  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j = j + 50){
      plinkos.push(new Plinko(j,75));
  }
 
  gnd.display();


  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display()

  drawSprites();
}