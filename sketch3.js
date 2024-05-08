let x = 100
let y = 25
let speed = 5
//let sprite = 0;
let floor;
let png = 0
//let player;
//let testAni;
//let kb;
//let wall;

let players = []
let catCount = 0
let Cats = []
let currentCat;
let fallingCat;
let gameStarted = false;
//let ceiling = 0;

let catGray = ["cat0_hold.PNG", "cat0_fall.PNG", "cat0_sleep.PNG"]
let catHallie = ["cat1_hold.png", "cat1_fall.png", "cat1_sleep.png"]
let catThomas = ["cat2_hold.png", "cat2_fall.png", "cat2_sleep.png"]
let catOreo = ["cat3_hold.png", "cat3_fall.png", "cat3_sleep.png"]

let catMore = [catGray, catHallie, catThomas, catOreo]

//let fileName = "cat" + whichCat + "_fall.png"
//let fileNameBetter = `cat${whichCat}_fall.png`

function preload() {
  img = loadImage('sprites/cat_PNG.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 10;
  //testAni = loadAni(
  // wall = new Sprite(0, 165.5, 10, 500, 's')
  Cats.push(new Sprite());

  currentCat = Cats[catCount]
  
  for(let i = 0; i < catMore.length; i++){
    let randomIndex = floor(random(catMore.length))
    console.log(randomIndex);
    
    }
currentCat.img = 

  //currentCat.width = 10;
  //currentCat.height = 10;
  currentCat.collider = 'none'
  //currentCat = 'k'
  //png = new Sprite();


  //player = new Sprite();
  currentCat.x = img.width * .1
  currentCat.y = img.height * .076
  //player.img = 'sprites/cat_PNG.png'
  //player.diameter = 7;d
  // player.scale = .1;


  floor = new Sprite();
  floor.y = height;
  floor.w = width;
  floor.h = 5;
  floor.collider = 'static';

}


function draw() {
  background(171, 165, 144);
  // let currentCat = Cats[catCount]
  //player.speed = 3
  currentCat.speed = 5
  currentCat.debug = mouse.pressing();

  // drop!!!!!!

  ///testAni.nextFrame()


  //move with arrow keys
  //ellipse(x, y, 50, 50); //////ellipse is here dont lose it you freak
  //ceiling = new SliderJoint(wall, currentCat)
  //ceiling.range = windowWidth;
  //ceiling.angle = 0;

  if (kb.pressing('left')) currentCat.vel.x = -5;
  else if (kb.pressing('right')) currentCat.vel.x = 5;
  else currentCat.vel.x = 0;
  if (kb.presses('space')) currentCat.vel.y = 8;
  else currentCat.sleeping = 0;

  //if (player.vel.y = 'static'){
  //}


  if (kb.presses('space')) {
    gameStarted = true;
    fallingCat = currentCat;
    fallingCat.collider = 'dynamic'
    fallingCat.vel.y = 2;
    fallingCat.img = 'sprites/cat0_fall.pnG'
    fallingCat.width = 125;
    fallingCat.height = 70;

    loadCat();

  }

  currentCat.bounciness = 0.5
  currentCat.friction = 4
  currentCat.rotationLock = false



  if (gameStarted) {



    if (fallingCat.collided(floor)) {
      fallingCat.collider = 'd '

      //loadCat();
      catSleep();

    }

    // how make it affected by cats and not just floor collision,,, the poor kitty keeps floating off into space ;-;


    currentCat.debug = mouse.pressing();

    for (let i = 0; i < Cats.length-1; i++) {
      let tempCat = Cats[i]
      // tempCat.sleeping = false
      tempCat.debug = mouse.pressing();
      if (fallingCat.collided(tempCat)) {
        //tempCat.gravity = 10
        //tempCat.vel.y = 5
        fallingCat.collider = 'd'
        //loadCat();
        catSleep();

      }

    }
  }

}

function catSleep() {
  ///////// THIS IS MAKING CAT GO EEBIES SLEEB AT THE BOTTOM ./////
  fallingCat.img = 'sprites/cat0_sleep.PNG'
  fallingCat.width = 125;
  fallingCat.height = 70;
}


function loadCat() {
  ///////// THIS IS MAKING THE CAT REAPPEAR AT THE TOP FOOL ////
  Cats.push(new Sprite())
  catCount++
  currentCat = Cats[catCount] //this doesnt currently load a sprite where its supposed to load,, its in the center not the top corner
  currentCat.img = 'sprites/cat0_hold.PNG'
  //currentCat.width = 1
  //currentCat.height = 10
  //currentCat.x = img.width * .1
  currentCat.collider = 'none'
  currentCat.y = img.height * .076
}
