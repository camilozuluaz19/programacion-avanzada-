//Cree un programa que permita recibir 50 alimentos diferentes y 
//mediante una función primaria después de 5 segundos se 
//pueda obtener solo los alimentos de tipo vegeta

// Que entreguen mas de 200 unidades de energía

// permitir entregar la sumatoria de niveles de energía entregados por los alimentos vegetales consumidos en 
//la dieta de Grogu


let nombres = ["cerdo","langostas","alamendras","kiwi","mango","grillo","mariposa","mora","lagartija","higos","calamar","algas", "semillas","aguacate"];
let tipos = ["animal","vegetal","insectos"];
let energias = [200,460,120,50,530,100,265,780,945,665,800,300,199,400,30,390];

let alimentos = [];

for(let i = 0; i < 50; i++){
    let alimento = {};

    alimento.nombre = nombres [Math.floor(Math.random() * nombres.length)];
    alimento.tipo = tipos [Math.floor(Math.random() * tipos.length)];
    alimento.energia = energias [Math.floor(Math.random() * energias.length)];

    alimentos.push(alimento);
}


function entrenamiento(dietas,callback){
    setTimeout(function(){ 

        let tipos = dietas.filter(function(dieta){

            return (dieta.tipo == "vegetal" && dieta.energia > 200);

        })

        callback(tipos);

    }, 5000)
}

entrenamiento(alimentos,function (tipos){

    let resultado = 0;

    tipos.forEach(function(tipo) {
        resultado += tipo.energia; 
    });

    console.log(tipos);
    console.log("La cantidad total de energias de la dieta de grogu es : " +resultado);
});