// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function () {

  //game stats

};

// load asset files for our game
gameScene.preload = function () {

  // load assets
  this.load.image('backyard', 'assets/images/backyard.png');
  this.load.image('apple', 'assets/images/apple.png');
  this.load.image('candy', 'assets/images/candy.png');
  this.load.image('rotate', 'assets/images/rotate.png');
  this.load.image('toy', 'assets/images/rubber_duck.png');

  // Load spritesheet
  this.load.spritesheet('pet', 'assets/images/pet.png', {
    frameWidth: 97,
    frameHeight: 83,
    margin: 1,
    spacing: 1
  });
};

// executed once, after assets were loaded
gameScene.create = function () {

  //game background
  let bg = this.add.sprite(0, 0, 'backyard').setInteractive();;
  bg.setOrigin(0, 0);

  this.pet = this.add.sprite(100, 200, 'pet').setInteractive();

  //make pet draggable
  this.input.setDraggable(this.pet);

  //follow pointer
  this.input.on('drag', function(pointer, gameObject, dragX, dragY){
    //make sprite located at coordinates
    gameObject.x = dragX;
    gameObject.y = dragY;

  })

  this.createUi();

};

// create ui
gameScene.createUi = function () {
  //buttons
  this.appleBtn = this.add.sprite(72, 570, 'apple').setInteractive();
  this.appleBtn.customStats = {health: 20, fun: 0};
  this.appleBtn.on('pointerdown', this.pickItem);

  this.candyBtn = this.add.sprite(144, 570, 'candy').setInteractive();
  this.candyBtn.customStats = {health: -10, fun: 10};
  this.candyBtn.on('pointerdown', this.pickItem);

  this.toyBtn = this.add.sprite(216, 570, 'toy').setInteractive();
  this.toyBtn.customStats = {health: 0, fun: 20};
  this.toyBtn.on('pointerdown', this.pickItem);

  this.rotateBtn = this.add.sprite(288, 570, 'rotate').setInteractive();
  this.rotateBtn.on('pointerdown', this.rotatePet);
}

// rotate pet
gameScene.rotatePet = function(){
  console.log('we are rotating the pet!');
}

// pick item
gameScene.pickItem = function(){
  console.log('we are picking an item!')
}

// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  scene: gameScene,
  title: 'Virtual Pet',
  pixelArt: false,
  backgroundColor: '000'
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);