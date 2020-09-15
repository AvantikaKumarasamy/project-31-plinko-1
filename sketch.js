const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var divisions = [];
var particles = [];

var divisionHeight=300;

function setup() {
  createCanvas(650,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,677,800,10);

  

  for(var i = 40; i <= width; i=i+50){
    plinkos.push(new Plinko(i,50));
  }

  for(var i = 15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,150));
  }

  for(var i = 40; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,250));
  }

  for(var i = 15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,350));
  }

  for(var k = 0; k <= width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  if(frameCount%90==0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }

  background("brown"); 
  Engine.update(engine);

  

  ground.display();

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}