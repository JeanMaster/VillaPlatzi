var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vacasX;
var vacasY;
var polloX;
var polloY;
var xCerdo = 420;
var yCerdo = 30;

var fondo = {
    url:"tile.png",
    cargaOK: false
};
var vaca = {
    url:"vaca.png",
    cargaOK: false,
};

var pollo = {
    url:"pollo.png",
    cargaOK: false
};

var cerdo = {
    url:"cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}



function dibujar()
{
  var x;
  var y;
  if(fondo.cargaOK == true)
    {
      papel.drawImage(fondo.imagen,0,0);
    }
  if(vaca.cargaOK == true)
  {
    var cantidad = aleatorio(2,7);
    vacasX = [cantidad];
    vacasY = [cantidad];
    console.log(cantidad);
    for(var v=0; v < cantidad ; v++)
      {
       x = aleatorio(0,6)*70;
       y = aleatorio(0,6)*70;
       vacasX[v] = x;
       vacasY[v] = y;
        papel.drawImage(vaca.imagen, x, y);
      }
  if(pollo.cargaOK == true)
    {
      var x , y;
      var cantidad = aleatorio(1,9);
      polloX =[cantidad];
      polloY =[cantidad];
      for(var p=0; p < cantidad ; p++)
      {
        x = aleatorio(0,420);
        y = aleatorio(0,420);
        polloX[p] = x;
        polloY[p] = y;
        papel.drawImage(pollo.imagen,x,y);
      }
    }
    if(cerdo.cargaOK == true)
    {
    var cantidad = 1;
    papel.drawImage(cerdo.imagen,xCerdo,yCerdo);
    }
  }
}

document.addEventListener("keydown", moverTeclas);

function moverTeclas(evento)
{
  var movimiento = 2;
  switch(evento.keyCode)
  {
    case teclas.RIGHT:
      xCerdo = xCerdo + movimiento;
      reDibujar()
    break;
    case teclas.LEFT:
    xCerdo = xCerdo - movimiento;
    reDibujar()
    break;
    case teclas.UP:
    yCerdo = yCerdo - movimiento;
    reDibujar()
    break;
    case teclas.DOWN:
    yCerdo = yCerdo + movimiento;
    reDibujar()
      break;
  }
}

function reDibujar()
{
    if(fondo.cargaOK)
      papel.drawImage(fondo.imagen, 0,0);

    if(vaca.cargaOK)
      for(var i = 0 ; i < vacasX.length ; i++)
      {
        papel.drawImage(vaca.imagen, vacasX[i] , vacasY[i]);
      }
    if(pollo.cargaOK)
    {
        for (var i = 0 ; i < polloX.length ; i++)
        papel.drawImage(pollo.imagen, polloX[i] , polloY[i]);
    }
    if(cerdo.cargaOK)
      papel.drawImage(cerdo.imagen, xCerdo,yCerdo);
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado =  Math.floor(Math.random() *(maxi - min + 1)) + min;
  return resultado;
}
