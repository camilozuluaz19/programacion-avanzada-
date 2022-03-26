//La luna de Endor pierde temperatura día a día, para ello 
//hay que hacer un monitoreo constante, Cree una función de flecha que 
//permita calcular la temperatura media de la luna a partir de la 
//temperatura máxima y mínima de cada día

let temperaturas = [20,70,60,9,19];

let luna = (...temperaturas) => {

    let temperaturaMaxima = Math.max(...temperaturas);
    let temperaturaMinima = Math.min(...temperaturas);

    let promedio = (temperaturaMaxima + temperaturaMinima)/2;
    
    return (promedio);
}

console.log(`La temperatura promedio fue de: ${luna(...temperaturas)}`);