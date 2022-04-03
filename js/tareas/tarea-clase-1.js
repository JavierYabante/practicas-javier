//let numero1 = Number(prompt('Ingresá un número'));

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

//let añoActual = Number(prompt('¿cual es el año actual?'));
//let añoNacimiento = Number(prompt('¿en que año nació ?'));

function calcularEdadDelUsuario(numero1, numero2){
    return numero1-numero2
} 

//console.log(calcularEdadDelUsuario(añoActual,añoNacimiento))

// Preguntar el salario anual y calcular el salario mensual
// Pregunrar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

//let salarioAnual = Number(prompt('¿cuanto ganas en el año?'));

function calcularSalarioMensual (salarioAnual) {
    return salarioAnual / 12;
}
//console.log ('En el mes ganas','$', calcularSalarioMensual(salarioAnual))
//console.log(`En el mes ganas ${calcularSalarioMensual(salarioAnual)} y anualmente ${salarioAnual}`)



let salarioMensual = Number(prompt('¿cuanto ganas en el mes?'));
function calcularSalarioAnual (salarioMensual){
    return salarioMensual * 12;
}

function calcularSalarioDiario (salarioMensual){
    return salarioMensual / 30;
}

function calcularSalarioHora (salarioMensual){
    return salarioMensual / 672;
}

function calcularSalarioSemanal (salarioMensual){
    return salarioMensual /4;
}

console.log (`por hora ganas: ${calcularSalarioHora (salarioMensual)}. hola`)
console.log ('en el dia ganas: ', calcularSalarioDiario (salarioMensual), 'mas o menos' )
console.log ('en el año ganas: ', calcularSalarioAnual(salarioMensual))
console.log ('por semana ganas: ', calcularSalarioSemanal (salarioMensual))
