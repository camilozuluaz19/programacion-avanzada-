//Yoda el maestro jedí, necesita asignar a sus aprendices 
//Padawans 2 actividades dependiendo de la edad de ellos:

//Manejo de la fuerza: Si el aprendiz es menor de 15 años
//Manejo del sable de luz: Si el aprendiz es mayor de 15 años


//Funcion principal 
function aprendices(nombre,planeta,edad,estatura, callback) {
    setTimeout(function () {

        let aprendiz = {
            nombre,
            edad,
            planeta,
            estatura
        }

        callback(aprendiz);
    }, 10000)
}

aprendices("Skywalker","vegeta",12,1.97,function(aprendiz) {
    if(aprendiz.edad < 15){
        console.log("El aprendiz "+aprendiz.nombre+" manejo de la fuerza");
    }
    else{
        console.log("El aprendiz "+aprendiz.nombre+" manejo del sable de luz");
    }
})