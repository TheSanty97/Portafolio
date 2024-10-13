// 1. Función que determine si un año es bisiesto.
function esBisiesto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return 'El año SI es bisiesto';
  } else {
      return 'El año NO es bisiesto';
  }
}

// 2. Función que convierta grados Celsius a Fahrenheit.
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32 + ' °F';
}

// 3. Función que devuelva el mayor de dos números.
function mayorDeDos(n1, n2) {
  return (n1 > n2) ? n1 + ' Es el número mayor' : n2 + ' Es el número mayor';
}

// 4. Función que convierta minutos en una cadena de horas y minutos.
function convertirMinutos(minutos) {
  let horas = Math.floor(minutos / 60);
  let minutosRestantes = minutos % 60;
  return `${horas} horas y ${minutosRestantes} minutos`;
}

// 5. Función que determine si un número está dentro de un rango dado.
function estaEnRango(numero, inicio, fin) {
  return (numero >= inicio && numero <= fin) ? 'SI esta en el rango' : 'NO esta en el rango';
}

// 6. Función que calcule el precio final después de aplicar un descuento.
function calcularPrecioFinal(precioInicial, descuento) {
  let descuentoAplicado = precioInicial * (descuento / 100);
  return 'Precio final: $' + (precioInicial - descuentoAplicado);
}

// 7. Función que determine si una persona puede votar según su edad.
function puedeVotar(edad) {
  return (edad >= 18) ? 'SI puede votar' : 'NO puede votar';
}

// 8. Función que calcule el área de un triángulo.
function calcularAreaTriangulo(base, altura) {
  return 'El área del triangulo es: ' + ((base * altura) / 2);
}

//Prueba de las funciones en consola
console.log(esBisiesto(2020))
console.log(celsiusAFahrenheit(0))
console.log(mayorDeDos(5, 10))
console.log(convertirMinutos(125))
console.log(estaEnRango(5, 1, 10))
console.log(calcularPrecioFinal(10000, 20))
console.log(puedeVotar(18))
console.log(calcularAreaTriangulo(10, 5))