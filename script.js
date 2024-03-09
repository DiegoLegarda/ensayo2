
document.getElementById("boton").addEventListener("click",escribirTexto); 
//document.getElementById("myText").addEventListener("input",escribirTexto); 

function escribirTexto() {
  let x = document.getElementById("myText").value;
  console.log(x);
   document.getElementById("demo").innerHTML = x;
   alert("Se ha realizado un push con el siguiente comentario: "+x)
}