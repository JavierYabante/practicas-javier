// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//let nombreUsuario = prompt('¿cual es tu nombre?');
//if (nombreUsuario === 'javier') { alert('Hola Tocayo! Yo tambien me llamo javier') }
//else if (nombreUsuario === 'simon') { alert('hola te llamas igual que mi tío muerto') }
//else { alert('hola '+ nombreUsuario)}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*let edadJavier = 26;
let edadUsuario = prompt('¿Cual es tu edad?');
if (edadUsuario == edadJavier) { 
    alert('Tienes la misma edad que Javier porque tu tienes: ' + edadUsuario + ' y Javier tiene la misma edad') }
else if (edadUsuario > edadJavier) {
    alert('Eres mas grande que Javier porque tu tienes: ' + edadUsuario + ' y Javier tiene: ' + edadJavier)
}
else if (edadUsuario < edadJavier) { alert('eres mas chico que Javier porque tu tienes: ' + edadUsuario + ' y Javier tiene: ' + edadJavier) }
*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let saludoUsuario = alert('Buen dia Sr. Usuario: ')
let poseeDocu = prompt('¿Tiene documento?')
if (poseeDocu == 'si') {
    let edadUsuario = prompt('¿cual es tu edad?')
    if (edadUsuario >= 18) {
        alert('usted puede entrar al bar')
    } else if (edadUsuario < 18) {
        alert('usted no puede entrar al bar')
    }
} else if (poseeDocu == 'no') {
    alert('no puede entrar')
}
else (alert('no entendimos la respuesta'))





