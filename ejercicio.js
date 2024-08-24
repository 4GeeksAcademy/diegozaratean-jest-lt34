///////////
//Descomposición
//Reconocimiento de patrones
console.log('descomopcición')
// Hacer una función que tome la fecha de nacimiento y calcule la edad
// PSEUDOCODIGO
// definir variable para guardar fecha de nacimeinto
// crear un funcion
function calcularEdad(fechaNacimiento){
    let fechaActual = new Date();    
    let resultado = (fechaActual - new Date(fechaNacimiento)  ) / ( 1000 * 60 * 60 * 24 * 365)
    return resultado
}
// calcularEdad()
// obtener la fecha actual
// mostrar en consola el resultado
// let fechaNacimiento = new Date("2004-02-18") 
let fechaNacimiento = "2004-02-18"
console.log(calcularEdad(fechaNacimiento))

console.log(calcularEdad("2006-07-01"))
