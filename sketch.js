var canvas;
var database;
var form, player;
var playerCount;
var fundo,fundoNoite;
var imgCar1,imgCar2;
var car1,car2;
var carro = [];
var imgPista;
var gameState;
var allPlayers;
var imgGasolina;
var imgMoeda;
var imgObstaculo1,imgObstaculo2;
var gasolina;
var moedas;
var obstaculos;
var imgVida;

//colocar um fundo para cada horario que nem no angry birds

function preload() {
  fundo = loadImage("./assets/planodefundo.png");
  imgCar1 = loadImage("carro1.png");
  imgCar2 = loadImage("car2.png");
  imgPista = loadImage("./assets/pista da corrida principal.jpg");
  imgGasolina = loadImage("./assets/imagem da gasolina.png");
  imgMoeda = loadImage("./assets/imagem da moeda.png");
  imgObstaculo1 = loadImage("./assets/imagem de obstaculo1.png");
  imgObstaculo2 = loadImage("./assets/imagem de obstaculo2.png");
  imgVida = loadImage("./assets/vida.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.estadoBancoDados();
}

function draw() {
  background(fundo);
  if(playerCount == 2){
game.updateGame(1);

  }
  if(gameState == 1){
game.play();
game.display();
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}