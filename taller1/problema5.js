//Watto paga a su personal de ventas un salario de 3500000 mensuales, 
//más una comisión de 1500000 por cada nave vendida, menos el 5%

//Codifica un programa que calcule e imprima el salario mensual de un vendedor dado


const salarioMensual = 3500000
const comisión = 1500000
let comisionConDescuanto = comisión - (5*comisión/100)


let resultadoSalario = (cantidadNavesVenddidas) => {

    let sumaDecomosion = cantidadNavesVenddidas * comisionConDescuanto
    let salarioTotal = sumaDecomosion + salarioMensual

    return salarioTotal
}

console.log(`El salario mensual del vendedor es: ${resultadoSalario(4)}`)