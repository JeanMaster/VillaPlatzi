var vp = document.getElementById("villaplatzi"); //Elemento canvas del html
var papel = vp.getContext("2d");
var vacasX;
var vacasY;

var fondo={
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);

function cargarFondo(){
  fondo.cargaOK=true
  dibujar();
}

function cargarVaca(){
  vaca.cargaOK=true;
  dibujar();
}

function cargaCerdo(){
  cerdo.cargaOK=true;
  dibujar();
}


function dibujar(){
  var cantidad;
  var x, y;

  if(fondo.cargaOK)
    papel.drawImage(fondo.imagen, 0,0);

  if(vaca.cargaOK){
    cantidad = aleatorio(1, 20);
    console.log(cantidad);
    vacasX = [cantidad];
    vacasY = [cantidad];
    for( var v=0; v<cantidad; v++){
      x = aleatorio(0, 6)*70;
      y = aleatorio(0, 6)*70;
      vacasX[v] = x;
      vacasY[v] = y;
      papel.drawImage(vaca.imagen, x,y);
    }
  }

  if(cerdo.cargaOK){
      xCerdo = aleatorio(0, 6)*70;
      yCerdo = aleatorio(0, 6)*70;
      while(ocupaPosVacas(xCerdo, yCerdo)){
        xCerdo = aleatorio(0, 6)*70;
        yCerdo = aleatorio(0, 6)*70;
      }
      papel.drawImage(cerdo.imagen, xCerdo,yCerdo);
  }
}

function ocupaPosVacas( x, y){
  var i=0;
  while(i<vacasX.length && (x != vacasX[i] || y != vacasY[i]) ){
      i++;
  }
  if(i == vacasX.length)
    return false;
  else
    return true;
}

function aleatorio(min, max){
  var resultado;
  resultado = Math.floor( Math.random() * (max - min + 1) ) + min ;
  return resultado;
}

//Funcionalidad juego:
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", mueveCerdo);

var orilla = true;

function mueveCerdo(evento){
  switch(evento.keyCode){

    case teclas.UP:
      if(yCerdo>0){
        orilla=false;
        yCerdo = yCerdo - 70;
      }
      else {
        orilla=true;
      }
    break;

    case teclas.DOWN:
      if(yCerdo <=360){
        orilla=false;
        yCerdo = yCerdo + 70;
      }
      else {
        orilla=true;
      }
    break;

    case teclas.LEFT:
      if(xCerdo>0){
        orilla=false;
        xCerdo = xCerdo - 70;
      }
      else {
        orilla=true;
      }
    break;

    case teclas.RIGHT:
      if(xCerdo<=360){
        orilla=false;
        xCerdo = xCerdo + 70;
      }
      else {
        orilla=true;
      }
    break;

    default:
      console.log("OTRA TECLA");
  }

  if(!orilla){
    if(!ocupaPosVacas(xCerdo, yCerdo)){
      reDibujar();
      var pts = parseInt( document.getElementById("puntos").innerHTML);
      document.getElementById("puntos").innerHTML= pts+10;
    }
    else {
      reDibujar();
      document.removeEventListener("keydown", mueveCerdo);
      document.getElementById("message").innerHTML = "Game over!";
      document.getElementById("sidebar").style.backgroundColor = "#e74c3c";
      /*
      var button = document.createElement("button");
      button.innerHTML = "Jugar de nuevo";
      button.addEventListener("onClick", console.log(event));
      document.getElementById("btn").appendChild(button);
      */
    }
  }
}


function reDibujar(){
    if(fondo.cargaOK)
      papel.drawImage(fondo.imagen, 0,0);

    if(vaca.cargaOK)
      for(var i = 0 ; i < vacasX.length ; i++) {
        papel.drawImage(vaca.imagen, vacasX[i] , vacasY[i]);
      }
    if(cerdo.cargaOK)
      papel.drawImage(cerdo.imagen, xCerdo,yCerdo);

}
