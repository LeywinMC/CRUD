let cowsay = require("cowsay");

console.log(cowsay.say({
    text : "fuck",
    e : "oO",
    T : "U "
}));

const { Rectangulo,Cuadrado} = require('./cuadrado.js');
console.log('////////////');
console.log('Datos del cuadrado\n');
let cuadrado = new Cuadrado(5);
console.log(`El area del cuadrado es; ${cuadrado.areaC}`);
console.log(`El perimetro del cuadrado es; ${cuadrado.perimetroC}`);

console.log('////////////');
console.log('Datos del cuadrado\n');
let rectangulo = new Rectangulo(5,7);
console.log(`El area del Rectangulo es; ${rectangulo.areaR}`);
console.log(`El perimetro del Rectangulo es; ${rectangulo.perimetroR}`);