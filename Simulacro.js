function evaluar(nota){

    if (nota >= 1 && nota < 4) {
        return "Libre"

    } else if (nota < 7) {
        return "Regular"

    } else if (nota > 7 && nota < 10){
        return "Promoción"

    } else {
        return "Ingrese un número entre 1 y 10"
    }
}

let nota = 8
let notaEvaluada = evaluar (nota)

console.log(notaEvaluada)