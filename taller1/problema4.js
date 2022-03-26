//QUI-GON JINN está encargado de revisar un arreglo 
//de 20 sables de luz y contabilizar la cantidad de sables que 
//tienen energías menores a 20 Joules

/* Forma 1
let sables = [
    {
        color : "amarillo",
        energia : 19,
        portador : "grogu"
    },
    {
        color : "azul",
        energia : 30,
        portador : "ronaldo"
    },
    {
        color : "rojo",
        energia : 91,
        portador : "vegeta"
    },
    {
        color : "negro",
        energia : 15,
        portador : "goku"
    },
    {
        color : "verde",
        energia : 25,
        portador : "seya"
    },
    {
        color : "naranja",
        energia : 53,
        portador : "mu"
    },
    {
        color : "violeta",
        energia : 89,
        portador : "he man"
    },
    {
        color : "gris",
        energia : 70,
        portador : "hades"
    },
    {
        color : "dorado",
        energia : 200,
        portador : "cristian"
    },
    {
        color : "rosado",
        energia : 80,
        portador : "bulma"
    },
    {
        color : "cafe",
        energia : 40,
        portador : "dexter"
    },
    {
        color : "magenta",
        energia : 120,
        portador : "frailejon"
    },
    {
        color : "beige",
        energia : 2,
        portador : "megatron"
    },
    {
        color : "blanco",
        energia : 110,
        portador : "darth"
    },
    {
        color : "azul",
        energia : 72,
        portador : "athenea"
    },
    {
        color : "negro",
        energia : 56,
        portador : "stark"
    },
    {
        color : "gris",
        energia : 91,
        portador : "afrodita"
    },
    {
        color : "rojo",
        energia : 39,
        portador : "superman"
    },
    {
        color : "verde",
        energia : 69,
        portador : "flash"
    },
    {
        color : "dorado",
        energia : 66,
        portador : "batman"
    }
]
let filtrar = sables.filter(sable => (sable.eneria < 20));
console.log(filtrar);*/

//Forma 2

let color = [
    "amarillo",
    "azul",
    "rojo",
    "negro",
    "verde",
    "naranja",
    "violeta",
    "gris",
    "dorado",
    "rosado"
];

let energia = [

50,
25,
15,
10,
8,
100,
7,
18,
12,
15
];

let portador = [

"Finn",
"Nodin",
"Mateo",
"Alexis",
"ObiWan",
"Bel-sun",
"cristian",
"emmanuel",
"salvador",
"maxi"
];

let sables = [];


for (let i = 0; i <= 10; i++) {

let sable = {};
sable.color = color[Math.floor(Math.random() * color.length)];
sable.energia = energia[Math.floor(Math.random() * energia.length)];
sable.portador = portador[Math.floor(Math.random() * portador.length)];

sables.push(sable);
}


function contabilizarSables(objetos){

let filtrar = objetos.filter(function(objeto){
return (objeto.energia < 20);
})

console.log(filtrar);

console.log(`El numero de sables con energia menor a 20 es de:  ${filtrar.length}`);
}

contabilizarSables(sables);