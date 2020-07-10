var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



var fondo = {
    url:"tile.png",
    cargaOK: false
};
var vaca = {
    url:"vaca.png",
    cargaOK: false
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
  if(fondo.cargaOK == true)
    {
      papel.drawImage(fondo.imagen,0,0);
    }
  if(vaca.cargaOK == true)
  {
    var cantidad = aleatorio(3,6);
    for(var v=0; v < cantidad ; v++)
      {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(vaca.imagen,x,y);
      }
  if(pollo.cargaOK == true)
    {
      var cantidad = aleatorio(1,9);
      for(var p=0; p < cantidad ; p++)
      {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(pollo.imagen,x,y);

      }
    }
  }
}

function dibujarCerdo(x,y)
{
  if(cerdo.cargaOK == true)
    {
      var cantidad = 1;
      papel.drawImage(cerdo.imagen,x,y);
    }
}
var x = 420;
var y = 25;

document.addEventListener("keydown", moverTeclas);

function moverTeclas(evento)
{

  var movimiento = 2;
  switch(evento.keyCode)
  {
    case teclas.RIGHT:
      dibujarCerdo(x + movimiento,y);
      x = x + movimiento;
    break;
    case teclas.LEFT:
    dibujarCerdo(x - movimiento,y);
    x = x - movimiento;
    break;
    case teclas.UP:
    dibujarCerdo(x ,y - movimiento);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarCerdo(x ,y + movimiento);
    y = y + movimiento;
      break;
  }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado =  Math.floor(Math.random() *(maxi - min + 1)) + min;
  return resultado;
}
