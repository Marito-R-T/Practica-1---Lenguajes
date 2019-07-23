const palabra = document.getElementById("palabra");
const listado_id = document.getElementById("listado_id");
const listado_numeros = document.getElementById("listado_numeros");
const listado_simbolos = document.getElementById("listado_simbolos");
const listado_errores = document.getElementById("listado_errores");
const numeros = "0123456789";
const letras = "abcdefghijklmnñopqrstuvwxyz";
const simbolos = "#$%";
var no;

function verificar() {
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

  function validarNumero() {
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
  function validarID() {
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
  function validarSimbolos() {
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
  function lanzar_Error() {
    listado_errores.innerHTML =
      listado_errores.innerHTML + '<li class="e">' + palabra.value + "</li>";
    console.log("ERROR");
  }
}
