// Nivel 1

/*
    Comentarios
    ========
    Empecemos con los  comentarios. Esto es un comentario. Comentarios son notas que la gente puede leer,
    pero las computadoras las van a ignorar.
    Nos van a servir como guía en la introducción a JavaScript
    Un comentario puede ser de 1 sola línea, o multi-línea.
*/

// Este es un comentario de 1 sola línea. Simplemente agregar // a la izquierda de tu comentario.

/*
    ESte es un comentario multi-linea.
    Cuando estás escribiendo código que querés que la máquina ejecute, ponelos AFUERA de los bloques de comentario.
*/

/*
    Mostrando texto
    ===============
    Empecemos mostrando el resultado de tu código en la pantalla.
    Hay algunas maneras de hacerlo, vamos a ver algunas:
    alert('Hola Mundo!');
        Esta línea de código va a mostrar un cartelito en tu navegador con el texto 'Hola Mundo!'
        una vez que se recargue index.html.
    console.log('Hola Mundo!');
        Esta línea de código va a mostrar 'Hola Mundo!' en la consola del navegador,
        una vez que  se recargue index.html.
*/

// Tarea: Ahora te toca a vos! Acá abajo escribí una alerta que diga "Hola mundo!"

// Tarea: Una vez que la alerta funcione, comentala poniendo '//' en la línea donde está el código y guardá los cambios.
// Una vez que recargás la página, ya no debería aparecer más.

// Tarea: Ahora probá hacer un console.log de un mensaje que queramos.

// Consejo: Para recargar el navegador podemos apretar 'CMD + R' en Mac y 'CTRL + R' en
//      Windows.

// Consejo: El atajo del teclado para guardar cambios a un archivo es 'CMD + S' en Mac y 'CTRL + S' en
//      Windows.

/*
    Variables
    =========
    Una variable es un lugar para guardar información. Para crear (o mejor dicho DECLARAR) una variable usamos 'let',
    así:
    let nombreDeVariable;
    Con esto creamos una variable llamada nombreDeVariable. pero no tiene información o valor, está indefinida.
    JavaScript le llama a estos valores indefinidos 'undefined'.
    Si imprimimos la variable en la consola, podemos verlo.
    console.log("nombreDeVariable es " + nombreDeVariable);
    El resultado va a ser "nombreDeVariable es undefined".
    Para darle un valor a nuestra variable (o mejor dicho ASIGNAR un valor), usamos el signo '='.
    nombreDeVariable = 'Hola Mundo!';
    También podemos crear (declarar) y darle valor (asignar) a una variable en un solo paso (la INICIALIZAMOS).
    let nuevaVariable = 1;
    Como pueden ver, le podemos dar distintos tipos de valores a nuestras variables -
    Cadenas de texto (String), Numeros (Number), Booleanos (Boolean), etc.
    Qué son cada uno?
    String - Un set de caracteres, palabras), o frases que ponemos entre comillas (dobles o simples, no importa),
    como por ejemplo 'hola mundo!'.
    Esto puede ser cualquier cosa, incluso números.
    Números - Pueden ser enteros (ej.: 5) o decimales (ej.: 5.21). No van entre comillas.
    Booleano - representa un valor VERDADERO o FALSO. TRUE o FALSE.
    Nota: Seguramente vean código que usa la palabra 'var' en vez de 'let'.
    'var' es una palabra reservada que cumple una función un poco distinta a la de 'let'.
    Si bien tienen algunas diferencias, por ahora pueden imaginarse que 'var' y 'let' son iguales, pero nosotros vamos
    a usar 'let' porque lleva a que tengamos menos errores de programación.
*/

// TAREA: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.

/*
    Podés usar el nombre de tus variables pare representar qué información tienen adentro, por ejemplo:
    let saludo = 'Hola Mundo';
    alert(saludo);
    Esto va a mostrar un cartelito con el texto 'Hola Mundo!'
*/

// Crear 2 variables nuevas, una con tu nombre, la segunda con tu edad. Dales un nombre apropriado y
// mostralas con un alert.

// Consejo: para mostrar 2 variables de texto al mismo tiempo, las podés unir usando el signo '+'. Ejemplo:

/* let nombre = "javier"
let edad = 26
alert (nombre + ' ' + edad) */

/*
 * let nombre = 'Alexis'
 * let apellido = 'Toranzo'
 *
 * alert(nombre + apellido)
 *
 * */

/*
    Constantes
    =========
    Una constante es como una variable, pero se le da un valor cuando es creado y luego no se puede cambiar mientras
    se ejecuta el programa.
    En otras palaras, una constante siempre tiene la misma información durante la ejecución de un programa.
    Para declarar (crear) una constante, usamos la palabra reservada (keyword) `const`.
    Ejemplo:
    const circunferenciaTierraKm = 6371;
    Asignar un nuevo valor a la constante nos va a dar un error, no podemos hacer:
    circunferenciaTierraKm = 6400;
    El nombre de las constantes también puede ser usado para representar la información que contienen,
    como las variables.
*/

/* const circunferenciaTierraKm = 6371;
circunferenciaTierraKm = 6400; */

// TAREA: Crear una constante y mostrarla con un alert

// TAREA: Intentar asignar un valor a una constante y ver qué pasa (mirar la consola)

/* const edad = 23
alert (edad)
edad = 24 */

// Consejo: No te olvides de comentar (//) los alerts y los errores intencionales (como en la tarea anterior) para
// que los alerts no aparezcan cada vez, y para que los errores no hagan que el programa se detenga.

/*
    Matemática - Operadores aritméticos (sumas, restas, multiplicación y división)
    ============================
    Hay muchos 'operadores' diferentes en programación. Veamos los operadores aritéticos ahora.
    JavaScript incluye operadores estándares (+, -, /, *) que se pueden usar para hacer operaciones matemáticas.
    Ejemplo:
    const resultado = 1 + 3;
    console.log(resultado);
    Esto va a imprimir el número 4 en nuestra console.
    Consejo: Fijate que no pusimos 1 y 3 entre comillas porque queremos que se interpreten como números, no como texto.
*/

//
// TAREA: Crear 3 variables:
//
// * 1ra variable llamada 'diez' con valor 10
// * 2nda variable llamada 'tres' con valor 3
// * 3ra variable llamada resultadoMultiplicacion que va a ser igual a
// la 1ra variable multiplicada (con el operador *) por la 2nda variable.
// Mostrar el valor de resultadoMultiplicacion con un alert o un console.log

/* let diez = 10
let tres = 3
let resultadoMultiplicacion= diez * tres
console.log (resultadoMultiplicacion) */

/*
    Funciones
    =========
    Una función es un set de instrucciones que hace la misma tarea cada vez que la llamamos.
    Las funciones toman parámetros de entrada (ARGUMENTOS o INPUT), y calculan el resultado basado en esos valores y
    devuelven (RETURN) un resultado ó OUTPUT.
    Para crear una función vamos a usar el siguiente formato:
    function nombreFuncion(nombreArgumento) {
        return nombreArgumento * 2;
    };
    Esta función va a tomar sólo 1 argumento y va a devolver (RETURN) el argumento multiplicado por 2.
    Nuestra función acaba de ser DEFINIDA, pero no se va a ejecutar/correr si no la 'llamamos'.
    Para llamar/ejecutar la función usamos el siguiente formato:
    nombreFuncion(10); // nombreDeFuncion(argumento1);
    Esto va a a llamar nuestra funcion con el argumento 10, y nuestra función va a devolver 20 (10 * 2).
    Para poder ver lo que nuestra  función devuelve, podemos pasársela como argumento a console.log.
    Por ejemplo:
    console.log(nombreFuncion(10));
    Esto hace que el resultado de nombreFuncion(10), en este caso, 20 (10 * 2) se pase a console.log.
    Es decir que sería equivalente a hacer console.log(20)
    Consejo: La palabra reservada (keyword) 'return' es usada para definir el valor que devuelve la función,
        podemos hacer cosas ANTES de ejecutar un 'return', pero después de ejecutar 'return' la función termina.
    Ejemplo:
    function codigoDespuesDelReturn(){
        return 1;
        console.log('hola!'); //Esta línea nunca se ejecuta
    }
    Consejo: Podemos aceptar múltiples argumentos (tambien llamados parámetros) separándolos con una coma ','.
         function nombreFunction(argumento1, argumento2) {
         }
*/

// TAREA: Es tu turno de crear una función!

// Creá una función llamada 'sumar'
// Escribí código para que acepte 2 argumentos (numero1 y numero2)
// Escribí código para que devuelva (return) la suma de numero1 y numero2
// Ejecutá la función sumar y mostrá su resultado en la consola

//console.log(nombreFuncion(10));
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

function dividir (numero1, numero2) {
    return numero1 / numero2
}
let num1 = 1;
let num2 = 2;

let resultadoDeFuncion = sumar(num1, num2);

//console.log(resultadoDeFuncion);

// TAREA: Ahora creemos otra función llamada 'restar'
//       Que acepte 2 números como parámetro y los reste, y que devuelva ese valor.
// Ejecutá la función con los números 5 y 1 y mostralos con console.log

let numero1 = 5
let numero2 = 1

function restar(numero1, numero2) {
  return numero1 - numero2;
}
//console.log(restar(numero1, numero2))

// Consejo: Sabías que en vez de pasar los números directamente a tu función podés crear variables con esos números
// y pasarlos como parámetros? Probalo!

// Consejo: Dejá las funciones como están, no las comentes, las vamos a usar de nuevo.

/*
    Condicionales If-Else
    ==================
    Qué pasa si en nuestro programa queremos decidir sobre qué función debería ejecutarse? Tenemos que usar condicionales!
    "Si (if) tenés una televisión, podés mirarla. Si no (else), hacés otra cosa."
    Es lo mismo con el código. Le podés dar una condición 'if' a una máquina para que haga una decisión acerca de qué
    parte del código tiene que ejecutarse.
    Estructura:
    if (condición) {
        // hacer esto (la condición se cumplió)
    } else {
        // hacer otra cosa, porque la condición no se cumplió
    }
    Necesitamos que la condición sea un Booleano, recordemos: TRUE o FALSE. Es decir, verdadero o falso.
    Por ejemplo, si tenemos un número, lo podemos comparar con algo.
    Ejemplo
    const numero = 7;
    if (numero >= 7) {
        console.log('Nuestro número es mayor o igual que 7');
    } else {
        console.log('Nuestro número es menor que 7');
    }
*/

/*
    Operadores de comparación
    ====================
    Antes hicimos una introducción a los operadores aritméticos de JavaScript (+, -, *, /). Ahora es momento de
    presentar el siguiente set de operadores, los 'Operadores de comparación'. Son usados para comparar valores:
    >   // Mayor que
    <   // Menor que
    <=  // Menor o igual que (se escribe en este orden, =< no existe)
    >=  //Mayor o igual que (se escribe en este orden, => es usado para otra cosa)
    === //Exactamente igual que (1 y "1" no son iguales, pero 1 es exactamente igual a 1 y "1" es exactamente igual a  "1"). Este operador compara el valor y el TIPO del valor.
    !== //Distinto que (dándole importancia al TIPO)
    Atención: No mezclar '=' y '==' ó '===' porque tienen distintos significados.
         '=' significa "asignar". miVariable = 1
         '===' significa preguntar si es "exactamente igual a". miVariable === 1 es verdadero si miVariable es 1, y falso si es cualquier otra cosa distinta de 1.
    También están los operadores '==' y '!=' que son muy similares a '===' y '!==' con una pequeña variación,
    que los hacen que sean más propensos a errores, así que siempre que sea posible vamos a usar '===' y '!=='.
    El resultado de un operador de comparación es un valor Booleano (true o false, verdadero o falso)
    Por ejemplo:
    3 < 4 evalúa a VERDADERO (TRUE), porque 3 es menor que 4.
    1 + 1 === 3 evalía a FALSO (FALSE), porque 1 + 1 no es igual a 3.
*/

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

let operador = 't'
let num6 = 1
let num7 = 2

if (operador === '+') {
    console.log(sumar(num6,num7))
}else if (operador === '-'){
    console.log(restar(num6,num7))
}else if (operador === '*'){
    console.log(multiplicar(num6,num7))
}else if (operador === '/'){
    console.log(dividir(num6,num7))
}else {console.log('perdon, no conozco ese operador')}


// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

/*
    'If' - 'Else if' - 'Else'
    ===================
    Bueno, y qué pasa si tenemos 4 operaciones aritméticas en nuestra calculadora? Bueno, entonces usamos una estructura así (pseudocódigo):
    if(condicion)
        //algo
    else if(condicion)
        //algo
    else
        //algo que va a pasar si no se cumple ningún otra condición
        
    Ejemplo:
    const numero = 7;
    if (numero > 7) {
        console.log('Nuestro número es mayor a 7');
    } else if (number < 7) {
        console.log('Nuestro número es menor a 7');
    } else {
        console.log('Nuestro número es igual a 7');
    }
    Consejo: Podemos usar la cantidad de 'else if' que queramos uno después del otro, 
    el primero que es 'verdadero' es el único que pasa.
*/

// TAREA: Creemos 2 funciones más: dividir y multiplicar.

// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".

/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador ! se llama el operador "not".
    
    El resultado de una comparación es un valor Booleano, lo podemos guardar en una variable así:
    const bool = (1 < 2);
    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log
    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)
    console.log(bool); // El valor original no se ve afectado, sigue siendo veradero, TRUE
    También podemos asignar un valor booleano directamente a una variable o constante con
    las palabras reservadas (keywords) true y false:
    const elPesoEsEstable = false;
    let maradonaMejorQuePele = true;
*/

// TAREA: usando el operador !, Intentá invertir una variable (de true a false, o de false a true) e imprimí el
// resultado en la consola.

const prueba = 1===1
console.log(prueba)
console.log(!prueba)

////////////////////////////////////////////////////////////////////////////
// Felicitaciones! LO TERMINASSTEE 😎😎😎🥵😍😁😁                      //
////////////////////////////////////////////////////////////////////////////
