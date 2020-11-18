var Bicicleta = require('../../../models/bicicleta');

beforeEach(() => { Bicicleta.allBicis = []; });
describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('Agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-34.8884468, -56.2602121, 17]);
        Bicicleta.add(a);


        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicileta.findByid', () => {
    it('Debe devolver la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "azul", "montaña");
        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);

        var targetBicic = Bicicleta.findById(1);
        expect(targetBicic.id).toBe(1);
        expect(targetBicic.color).toBe("verde");
        expect(targetBicic.modelo).toBe("urbana");

    });
});

describe('Bicileta.removeByid', () => {
    it('Debe eliminar la bici con id 1', () => {

        var aBici = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "azul", "montaña");
        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);
        expect(Bicicleta.allBicis.length).toBe(2);

        Bicicleta.removeById(1);
        expect(Bicicleta.allBicis.length).toBe(1);


    });
});