/** 
 case 1 agregar el numero 0 para  cortar el ciclo.
 case 2 agregar user / 1234  para cortar el ciclo.
*/

var opciones = parseInt(
  prompt(
  "1- Numero infinito # 1 \n"+
  "2- Login # 2 \n"+
  "3- Salir"));

switch(opciones){

case 1:

var num, suma=0;

do{
num = parseInt(prompt("Ingrese un número"));
suma = suma + num;
}while(num != 0);

alert("El resultado es: "+suma);

break;

case 2:

var usuario = "user";
var pass= "1234";
var username, password;
var condicion;

do{

username=prompt("Ingrese su usuario");
password=prompt("Ingrese su contraseña");

if(username!=usuario || pass!=password){
alert("su usuario o contraseña no son validos");
condicion=true;
}else{
condicion=false;
alert("inicio de sesion exitoso");
}

}while(condicion);  

break;

}
