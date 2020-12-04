// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
 return array[0];
}

function devolverUltimoElemento(array) {
return array[array.length -1];
}

function obtenerLargoDelArray(array) {
return array.length;
}

function incrementarPorUno(array) {
  var otroArray = [];
  for(var i = 0; i < array.length; i++) {
    otroArray[i] = array[i] + 1;
  }

  return otroArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
array.push (elemento);
return array }

function agregarItemAlComienzoDelArray(array, elemento) {
array.unshift(elemento);
return array 

}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  for(var i = 0; i < array.length; i++) {
  if(array[i] === elemento) {
  return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  var valorTotal = 0;
  for(var i = 0; i < numeros.length; i++) {
    valorTotal = valorTotal + numeros[i];
  }
  return valorTotal;
}

function promedioResultadosTest(resultadosTest) {
 return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  var mayor = 0;
  for(var i = 0; i < numeros.length; i++) {
    if(numeros[i] > mayor) { 
      mayor = numeros[i];
    }
  }
  return mayor;
}

function multiplicarArgumentos() {
  if(arguments.length < 1) {
    return 0; 
  }
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total; 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
