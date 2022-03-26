//Programar una funcion que permita recibir la palabra clave
//de cada nave y separar imprimiendo solo el nombre del piloto
//asignado acda nave 

let pilotos = (codigo) => {
    let nombre = codigo.split(":");
    return ("El nombre es: "+ nombre[1]);
}

console.log(pilotos("ARQ2555: Sara Bel-sun"));
console.log(pilotos("ARQ2556: Nodin Chavdri"));
console.log(pilotos("ARQ2557: Finn"));
