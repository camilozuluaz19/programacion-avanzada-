//Para calcular dicha distancia se debe:
//Recibir las coordenadas X,Y del planeta en UA

//Establecer la distancia 

// funcion tradicional para calcular la distancia entre dos puntos 

let calcularDistacia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

let final = calcularDistacia(3,9, -10, -10);

console.log("La distancia es: " + final.toFixed(2));

