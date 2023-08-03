// //Ejercicios EGG

// /** 1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario. */

// let clima = prompt("Cómo está el clima hoy en tu ciudad");
// let mensaje = `El día de hoy está ...  
// ${clima}`;
// alert(mensaje);

// /** 2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio */

// const pi = 3.1416;
// let radio;

// area();
// perimetro();

// function area() {
//   radio = prompt("Ingrese el radio");
//   let area = radio * radio * pi;
//   alert("El area es " + area);
// }

// function perimetro() {
//   radio = prompt("Ingrese el radio");
//   let perimetro = 2 * radio * pi;
//   alert("El perimetro es " + perimetro);
// }

// /** 3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo. */

// let edad = prompt("Ingrese su edad");
// let altura = prompt("Ingrese su altura");
// montana();

// function montana(edad, altura) {
//   if (edad > 18 && altura > 160) {
//     alert("Puedes subirte a la montaña rusa");
//   } else {
//     alert("No te puedes subir a la montaña rusa, lo siento :c");
//   }
// }

// /** 4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/

// let respuesta = prompt("Ingrese un Caracter S/N");
// respuesta = respuesta.toUpperCase();
// caracter();

// function caracter() {
//   if (respuesta == "S" || respuesta == "N") {
//     console.log("Correcto");
//   } else {
//     console.log("Incorrecto");
//   }
// }

/** Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

menu();


function menu() {

    var num1 = parseInt(prompt ("Ingrese el primer numero: "));
    var num2 = parseInt(prompt ("Ingrese el segundo numero: "));
    var operador = (prompt ("Ingrese el caracter de la operacion a realizar (S, R, M, D): "));
    var resultado = operaciones(operador, num1, num2);
    alert("El resultado es: " + resultado);
}

function operaciones(operador, num1, num2) {
  switch (operador) {
    case "S":
    case "s":
      return num1 + num2;
    case "R":
    case "r":
      return num1 - num2;
    case "M":
    case "m":
      return num1 * num2;
    case "D":
    case "d":
      return num1 / num2;
    default:
        return "El operador es invalido";
  }
}


