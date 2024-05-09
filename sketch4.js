let x = 100
let y = 25
let speed = 5
//let sprite = 0;
let floor;
let png = 0

let sprYarsh = 0
let players = []
let catCount = 0
let Cats = []
let currentCat;
let fallingCat;
let gameStarted = false;
let holdimage
let fallimage
let sleepimage
let loadingimage, Greypath, Halliepath, Thomaspath, Oreopath
let sleepholder

let catGray = ['sprites/cat0_hold.PNG', 'sprites/cat0_fall.PNG', 'sprites/cat0_sleep.PNG']
let catGrayLoadedImages = []
let catHallie = ['sprites/cat1_hold.png', 'sprites/cat1_fall.png', 'sprites/cat1_sleep.png']
let catHallieLoadedImages = []
let catThomas = ['sprites/cat2_hold.png', 'sprites/cat2_fall.png', 'sprites/cat2_sleep.png']
let catThomasLoadedImages = []
let catOreo = ['sprites/cat3_hold.png', 'sprites/cat3_fall.png', 'sprites/cat3_sleep.png']
let catOreoLoadedImages = []


let catMore = [catGray, catHallie, catThomas, catOreo]
let catMoreLoadedImages = [catGrayLoadedImages, catHallieLoadedImages, catThomasLoadedImages, catOreoLoadedImages]

//let fileName = "cat" + whichCat + "_fall.png"
//let fileNameBetter = `cat${whichCat}_fall.png`

function preload() {
  img = loadImage('sprites/cat_PNG.png');
  for (let i = 1; i < 3; i++) {
    Greypath = catGray[i]
    Halliepath = catHallie[i]
    Thomaspath = catThomas[i]
    Oreopath = catOreo[i]
    //loadingimage=loadImage(path)
    catGrayLoadedImages.push(loadImage(Greypath))
    catHallieLoadedImages.push(loadImage(Halliepath))
    catThomasLoadedImages.push(loadImage(Thomaspath))
    catOreoLoadedImages.push(loadImage(Oreopath))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 10;
  currentName = catGrayLoadedImages
  holdimage = currentName[0]
  fallimage = currentName[1]
  sleepimage = currentName[2]

  currentName = random(catMore)
  
  Cats.push(new Sprite());
  holdimage = currentName[0]
  fallimage = currentName[1]
  sleepimage = currentName[2]

  currentCat = Cats[catCount]

  currentCat.img = holdimage

  //currentCat.width = 10;
  //currentCat.height = 10;
  currentCat.collider = 'none'
  currentCat.x = img.width * .1
  currentCat.y = img.height * .076

  floor = new Sprite();
  floor.y = height;
  floor.w = width;
  floor.h = 5;
  floor.collider = 'static';

}

function draw() {
  background(171, 165, 144);
  // let currentCat = Cats[catCount]
 
  currentCat.speed = 5
  currentCat.debug = mouse.pressing();

  holdimage = currentName[0]
  fallimage = currentName[1]
  sleepimage = currentName[2]

  //////move with arrow keys////////
  //ellipse(x, y, 50, 50); //////ellipse is here dont lose it you freak

  if (kb.pressing('left')) currentCat.vel.x = -5;
  else if (kb.pressing('right')) currentCat.vel.x = 5;
  else currentCat.vel.x = 0;
  if (kb.presses('space')) currentCat.vel.y = 8;
  else currentCat.sleeping = 0;


  if (kb.presses('space')) {
    gameStarted = true;

    currentName = random(catMore)

    fallingCat = currentCat;
    fallingCat.collider = 'dynamic'
    fallingCat.vel.y = 2;
    fallingCat.img = fallimage
    fallingCat.width = 125;
    fallingCat.height = 70;

    loadCat();
  }

  currentCat.bounciness = 0.5
  currentCat.friction = 4
  currentCat.rotationLock = false
  currentCat.debug = mouse.pressing();

  if (gameStarted) {
    if (fallingCat.collided(floor)) {
      fallingCat.collider = 'd '
      catSleep();

    }
    // how make it affected by cats and not just floor collision,,, the poor kitty keeps floating off into space ;-;

    






    for (let i = 0; i < Cats.length - 1; i++) {
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
sleepholder=sleepimage
  fallingCat.img = sleepholder
  fallingCat.width = 125;
  fallingCat.height = 70;
}
 
function loadCat() {
  ///////// THIS IS MAKING THE CAT REAPPEAR AT THE TOP FOOL ////
  Cats.push(new Sprite())
  catCount++
  currentCat = Cats[catCount] //this doesnt currently load a sprite where its supposed to load,, its in the center not the top corner
  currentCat.img = holdimage
  //currentCat.width = 1
  //currentCat.height = 10
  //currentCat.x = img.width * .1
  currentCat.collider = 'none'
  currentCat.y = img.height * .076


}