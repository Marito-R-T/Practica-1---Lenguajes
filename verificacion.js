const palabra = document.getElementById("palabra"); //ingresa la palabra que el usuario ingreso en el input
const listado_id = document.getElementById("listado_id"); // son todas las listas que van a formar parte del trabajo
const listado_numeros = document.getElementById("listado_numeros");
const listado_simbolos = document.getElementById("listado_simbolos");
const listado_errores = document.getElementById("listado_errores");
const numeros = "0123456789";
const letras = "abcdefghijklmnñopqrstuvwxyz";
const simbolos = "#$%";
var no;

function verificar() {    //verifica la primer letra de la palabra
  console.log(palabra.value);
  no = palabra.value.length;
  console.log(no);          
  if (numeros.indexOf(palabra.value[0]) != -1) {
    validarNumero();
  } else if (letras.indexOf(palabra.value[0].toLowerCase()) != -1) {
    validarID();
  } else if (simbolos.indexOf(palabra.value[0] != -1)) {
    validarSimbolos();
  } else {
    lanzar_Error();
  }

  function validarNumero() {  //validamos si empieza en numero, y si cumple con todos los requisitos de numero
    var valido = true;
    for (var i = 0; i < palabra.value.length; i++) {
      if (numeros.indexOf(palabra.value[i]) == -1) {
        lanzar_Error();
        valido = false;
        break;
      }
    }
    if (valido) {
      listado_numeros.innerHTML =
        listado_numeros.innerHTML + '<li class="n">' + palabra.value + "</li>";
      console.log("es un numero");
    }
  }
  function validarID() {    //validamos si empieza en letra, asi verifiquemos que cumpla los requisitos pertinentes
    var valido = true;
    for (var i = 0; i < palabra.value.length; i++) {
      if (
        numeros.indexOf(palabra.value[i]) == -1 &&
        letras.indexOf(palabra.value[0].toLowerCase()) == -1
      ) {
        lanzar_Error();
        valido = false;
        break;
      }
    }
    if (valido) {
      listado_id.innerHTML =
        listado_id.innerHTML + '<li class="id">' + palabra.value + "</li>";
      console.log("es un ID");
    }
  }
  function validarSimbolos() {  //validamos si empieza en simbolo, que siga siendo simbolo
    var valido = true;
    for (var i = 0; i < palabra.value.length; i++) {
      if (simbolos.indexOf(palabra.value[i]) == -1) {
        lanzar_Error();
        valido = false;
        break;
      }
    }
    if (valido) {
      listado_simbolos.innerHTML =
        listado_simbolos.innerHTML + '<li class="s">' + palabra.value + "</li>";
      console.log("son simbolos");
    }
  }
  function lanzar_Error() {       //mandamos todos los errores
    listado_errores.innerHTML =
      listado_errores.innerHTML + '<li class="e">' + palabra.value + "</li>";
    console.log("ERROR");
  }
}
