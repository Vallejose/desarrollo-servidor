const { bicicleta_create_get } = require("../controllers/bicicleta");

var Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function() {
    return 'd: ' + this.id + "| color: " + this.color;

}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciId) {
    var aBici = Bicicleta.allBicis.find(z => z.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`);
}

Bicicleta.removeById = function(aBiciId) {
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

/*
var a = new Bicicleta(1, 'rojo', 'urbana', [-34.8884468, -56.2602121, 17]);
var b = new Bicicleta(2, 'blanca', 'urbana', [-34.8945332, -56.1530176, 17]);

Bicicleta.add(a);
Bicicleta.add(b);

*/
module.exports = Bicicleta;