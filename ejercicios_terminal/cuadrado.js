

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    
     areaC() {
         return this.lado * this.lado;
     }

     perimetroC() {
         return this.lado*4;
     }

}

class Rectangulo {
    constructor(base, altura){
        this.base= base;
        this.altura= altura;
    }
    areaR() {
        return this.base*this.altura;
    }
    perimetroR() {
        return ((this.base*2)+(this.altura*2));
    }
}


module.exports = {
    Cuadrado: Cuadrado,
    Rectangulo: Rectangulo
}