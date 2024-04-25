

let x = 100
let y = 25
let speed = 5
//let sprite = 0;
let floor;
let png = 0
//let player;
//let testAni;
//let kb;
let wall;


let players = []
let catCount = 0
let Cats = []
let currentCat;
let ceiling = 0;


//let fileName = "cat" + whichCat + "_fall.png"
//let fileNameBetter = `cat${whichCat}_fall.png`


function preload() {
  img = loadImage('sprites/cat_PNG.png');

}




function setup() {
  createCanvas(windowWidth, windowHeight);
   world.gravity.y = 10;
 
    wall = new Sprite(0, 165.5, 15, 500, 's')
  Cats.push(new Sprite());

  currentCat = Cats[catCount]
  currentCat.img = 'sprites/cat0_hold.PNG'
  currentCat.width = 75;
  currentCat.height = 125;
  //currentCat = 'k'

  currentCat.x = img.width * .1
  currentCat.y = img.height * .076



  floor = new Sprite();
  floor.y = height;
  floor.w = width;
  floor.h = 5;
  floor.collider = 'static';

}








function draw() {

//basic drawing stuffs
  background(171, 165, 144);
  let currentCat = Cats[catCount]
  currentCat.speed = 5
  currentCat.debug = mouse.pressing();

  //ellipse(x, y, 50, 50); //////ellipse is here dont lose it you freak

  /// testing the sliderJOINT ahahaahahaAHAHAAHAHAHAAH ///
//ceiling = new SliderJoint(wall, currentCat )
//ceiling.range = windowWidth;
//ceiling.angle = 0;
//ceiling.speed = -100


///// I MAKE THAT THANG MOVE and by that i mean these cats at the top///
  if (kb.pressing('left')) currentCat.vel.x = -5;
  else if (kb.pressing('right')) currentCat.vel.x = 5;
  else currentCat.vel.x = 0;
  if (kb.presses('space')) currentCat.vel.y = 8;
  else currentCat.sleeping = 0;

  


/////THIS DOWN HERE \/ IS MAKING THE IDEA OF 'TEMP CAT' AND ALSO COLUSION FOR THOSE////
  for (let i = 0; i < Cats.length; i++) {
    let tempCat = Cats[i]
 
    tempCat.debug = mouse.pressing();
    if(currentCat.collided(tempCat)) {
      //tempCat.gravity = 10
      //tempCat.vel.y = 5
      currentCat.collider = 'k'
     
     //loadCat();
      catSleep();
    }
  }


///// ME WHEN I DROPP MY CAT CAUSE HES BITING MY HANDS LIKE A BASTARBD////
  if (kb.presses('space')) {
    currentCat.vel.y = 6;
    currentCat.img = 'sprites/cat0_fall.pnG'
    currentCat.width = 125;
    currentCat.height = 70;
    loadCat();
    
  }

  ///BRO ME WHEN MY CAT IS BOUNCY?????/////
  currentCat.bounciness = 0.5
  currentCat.friction = 4
  currentCat.rotationLock = false


/////// CAT COOLLLISION AHAHAHAHA
  if (currentCat.collided(floor)) {
    currentCat.collider = 'static'
   
    //loadCat()
    catSleep();
  }

  //  the poor kitty keeps floating off into space ;-;
 
}
function catSleep(){
  ///////// THIS IS MAKING CAT GO EEBIES SLEEB AT THE BOTTOM ./////
  currentCat.img = 'sprites/cat0_sleep.PNG'
  currentCat.width = 125;
  currentCat.height = 70;
}

function loadCat() {
  ///////// THIS IS MAKING THE CAT REAPPEAR AT THE TOP FOOL ////
    Cats.push(new Sprite())
    catCount++
    currentCat = Cats[catCount] //this doesnt currently load a sprite where its supposed to load,, its in the center not the top corner
    currentCat.img = 'sprites/cat0_hold.PNG'
    currentCat.width = 70
    currentCat.height = 125
    //currentCat.x = img.width * .1
    currentCat.y = img.height * .076

}

