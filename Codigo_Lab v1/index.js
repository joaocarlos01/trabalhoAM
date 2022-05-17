canvas.width = 40 * 32;
canvas.height = 30 * 32;

class Tile extends Sprite {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}

class Relva extends Tile {

}

class Pedra extends Tile {

}

class Neve extends Tile {

}

class Gelo extends Tile {

}

class Calcada extends Tile {

}

class Terra extends Tile {

}

class Agua extends Tile {

}

class RelvaClara extends Tile {

}

class FolhasArvore extends Tile {

}

class TroncoArvore extends Tile {

}





class Tilemap extends GameObject {

    constructor(x, y, width, height, mapa) {
        super(x, y, width, height);
        this.mapa = mapa;
        this.arrayPecas = [];
        this.gerarMapa();
    }

    gerarMapa() {

        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 0; j < this.mapa[i].length; j++) {
                this.gerarPeca(i, j, this.mapa[i][j])
            }
        }
    }

    gerarPeca(fila, coluna, posicaoPeca) {

        if (posicaoPeca == 44) {
            this.arrayPecas.push(new Pedra(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 41) {
            this.arrayPecas.push(new Relva(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 221) {
            this.arrayPecas.push(new Neve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 222) {
            this.arrayPecas.push(new Gelo(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 223) {
            this.arrayPecas.push(new Calcada(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 43) {
            this.arrayPecas.push(new Terra(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 42) {
            this.arrayPecas.push(new Agua(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 391) {
            this.arrayPecas.push(new RelvaClara(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 1) {
            this.arrayPecas.push(new FolhasArvore(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 21) {
            this.arrayPecas.push(new TroncoArvore(coluna * 32, fila * 32, 32, 32));
        }
      


    }

    draw() {

        for (var i = 0; i < this.arrayPecas.length; i++) {
            var peca = this.arrayPecas[i]
            peca.draw();
        }
    }
}




//load do player


//load dos mosaicos
Relva.load("./Imagens/Camada 1/relva.png");
Pedra.load("./Imagens/Camada 1/pedra.png");
Neve.load("./Imagens/Camada 1/neve.png");
Gelo.load("./Imagens/Camada 1/gelo.png");
Calcada.load("./Imagens/Camada 1/calcada.png");
Terra.load("./Imagens/Camada 1/terra.png");
Agua.load("./Imagens/Camada 1/agua.png");
RelvaClara.load("./Imagens/Camada 1/relva_clara.png");
FolhasArvore.load("./Imagens/Camada 2/folhas_arvore_natural.png");
TroncoArvore.load("./Imagens/Camada 2/tronco_arvore_natural.png");



const fps = 6;
const timeBetweenUpdateDraw = 1000 / fps;
let acumulatedTimeBetweenFrames = 0;
let timeLastFrame;


var camada1 = [];
var camada2 = [];
var camada3 = [];
let tilemap, tilemap2;
const numAssets = 10;
let numAssetsLoaded = 0;

window.addEventListener('assetLoad', (e) => {

    console.log("Asset Loaded", e.detail);
    numAssetsLoaded++;

    if (numAssetsLoaded == numAssets) {
        startGame();
    }
});


camada1 = [
    [44, 41, 41, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
    [44, 41, 41, 44, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 222, 222, 222, 222, 44, 221, 221, 221, 221, 221, 223, 223, 223, 223, 223, 223, 43, 43, 44, 221, 221, 221, 44],
    [44, 41, 41, 44, 41, 44, 41, 41, 42, 66, 67, 68, 42, 42, 42, 42, 42, 223, 223, 223, 223, 44, 223, 221, 221, 221, 221, 221, 221, 221, 222, 223, 223, 43, 221, 44, 221, 221, 221, 44],
    [44, 41, 41, 44, 44, 44, 44, 41, 42, 86, 87, 88, 42, 66, 67, 68, 42, 223, 223, 223, 223, 44, 44, 44, 44, 44, 44, 44, 223, 223, 222, 223, 223, 43, 43, 44, 221, 44, 221, 44],
    [44, 43, 43, 43, 43, 43, 43, 43, 42, 106, 107, 108, 42, 86, 87, 88, 42, 42, 222, 222, 222, 221, 222, 223, 223, 223, 223, 44, 223, 223, 223, 223, 223, 221, 43, 44, 221, 44, 221, 44],
    [44, 43, 43, 43, 43, 43, 43, 43, 42, 42, 42, 42, 42, 106, 107, 108, 42, 42, 222, 222, 222, 222, 221, 223, 223, 223, 223, 44, 221, 221, 221, 223, 223, 221, 43, 44, 221, 44, 221, 44],
    [44, 44, 44, 44, 44, 44, 43, 43, 44, 42, 42, 42, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 223, 222, 223, 223, 44, 221, 221, 221, 221, 221, 43, 43, 44, 221, 44, 44, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 44, 42, 42, 42, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 221, 221, 223, 223, 44, 221, 221, 221, 221, 221, 43, 43, 44, 221, 221, 221, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 44, 41, 42, 42, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 222, 221, 221, 223, 44, 221, 221, 221, 221, 221, 43, 221, 44, 221, 221, 221, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 44, 41, 42, 42, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 221, 221, 221, 223, 44, 221, 221, 221, 221, 221, 43, 43, 221, 221, 221, 44, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 44, 41, 41, 42, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 221, 222, 221, 221, 44, 221, 221, 221, 221, 221, 391, 43, 44, 221, 221, 44, 44],
    [44, 41, 41, 41, 41, 43, 43, 43, 44, 41, 41, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 222, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 43, 221, 44, 44, 44, 223, 44],
    [44, 41, 41, 41, 43, 43, 43, 41, 44, 41, 41, 41, 42, 42, 42, 42, 42, 222, 222, 222, 222, 222, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 44, 221, 221, 223, 223, 44, 223, 44],
    [44, 41, 41, 41, 43, 43, 41, 41, 44, 41, 41, 41, 42, 42, 42, 42, 42, 222, 222, 222, 222, 222, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 44, 221, 391, 223, 223, 223, 223, 44],
    [44, 41, 41, 43, 43, 43, 41, 41, 44, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 222, 222, 222, 222, 221, 221, 221, 221, 221, 221, 221, 221, 221, 44, 221, 391, 221, 44, 223, 223, 44],
    [44, 41, 41, 43, 43, 43, 43, 41, 44, 44, 41, 41, 41, 41, 42, 411, 412, 413, 42, 42, 42, 42, 391, 391, 391, 221, 221, 221, 221, 221, 221, 221, 44, 391, 221, 391, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 43, 43, 43, 41, 44, 44, 41, 41, 41, 42, 426, 427, 428, 42, 42, 42, 42, 391, 391, 391, 221, 221, 221, 221, 221, 221, 221, 44, 221, 391, 221, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 43, 43, 43, 43, 41, 44, 44, 41, 41, 42, 441, 442, 443, 42, 42, 391, 391, 391, 391, 391, 391, 221, 221, 221, 221, 221, 44, 44, 391, 221, 221, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 43, 43, 41, 44, 44, 44, 42, 42, 42, 42, 42, 42, 42, 391, 391, 391, 391, 391, 221, 221, 221, 221, 44, 391, 391, 391, 44, 44, 44, 44, 44, 44],
    [44, 41, 41, 41, 41, 41, 41, 43, 43, 43, 41, 41, 41, 44, 44, 44, 42, 411, 412, 413, 42, 391, 391, 391, 391, 391, 391, 43, 221, 221, 44, 391, 391, 391, 44, 391, 391, 391, 391, 44],
    [44, 391, 391, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 391, 44, 42, 426, 427, 428, 42, 71, 72, 73, 391, 391, 391, 43, 43, 221, 44, 44, 44, 391, 391, 391, 391, 44, 391, 44],
    [44, 391, 391, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 391, 44, 42, 441, 442, 443, 42, 91, 92, 93, 391, 391, 43, 43, 43, 43, 391, 391, 44, 391, 391, 391, 391, 44, 391, 44],
    [44, 391, 44, 44, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 44, 42, 42, 42, 42, 42, 111, 112, 113, 391, 391, 43, 43, 43, 43, 391, 391, 44, 44, 44, 391, 391, 44, 391, 44],
    [44, 391, 391, 391, 44, 44, 44, 391, 391, 43, 43, 43, 43, 43, 391, 44, 42, 42, 42, 42, 42, 42, 42, 391, 391, 43, 43, 43, 43, 44, 391, 391, 391, 391, 44, 391, 391, 44, 391, 44],
    [44, 391, 391, 391, 44, 44, 44, 44, 391, 43, 43, 391, 43, 43, 43, 43, 43, 43, 43, 43, 42, 42, 42, 42, 43, 43, 43, 43, 44, 44, 391, 391, 391, 391, 44, 44, 44, 44, 391, 44],
    [44, 391, 44, 44, 44, 391, 391, 44, 391, 43, 43, 391, 391, 43, 43, 43, 43, 43, 43, 43, 43, 42, 42, 42, 43, 43, 43, 44, 44, 391, 391, 44, 44, 391, 391, 391, 44, 391, 391, 44],
    [44, 391, 44, 391, 44, 391, 391, 44, 391, 43, 43, 44, 44, 44, 44, 44, 391, 391, 391, 391, 43, 43, 42, 42, 43, 43, 44, 43, 43, 43, 391, 391, 44, 391, 44, 391, 44, 391, 391, 44],
    [44, 391, 44, 391, 44, 391, 391, 44, 44, 43, 43, 44, 391, 391, 391, 44, 44, 391, 391, 44, 43, 43, 43, 43, 43, 43, 44, 43, 43, 43, 43, 43, 44, 43, 44, 391, 44, 391, 391, 391],
    [44, 391, 391, 391, 391, 391, 391, 391, 44, 43, 43, 44, 391, 391, 391, 391, 391, 391, 391, 44, 391, 43, 43, 43, 43, 44, 43, 43, 43, 43, 43, 43, 44, 43, 44, 43, 44, 391, 391, 391],
    [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44]
];

camada2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 181, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 181, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 181, 0, 181, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 201, 0, 0, 0, 181, 203, 0, 0, 0, 181, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 181, 0, 0, 202, 201, 181, 0, 0, 0, 0, 0],
    [0, 1, 1, 21, 21, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 201, 0, 0, 0, 0, 0],
    [0, 21, 21, 1, 1, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 181, 0, 181, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 201, 0, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 21, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 24, 21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 184, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 21, 1, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0],
    [0, 21, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 23, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 184, 0, 202, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 21, 24, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 21, 0, 0, 0, 0, 0, 203, 203, 0, 0, 0, 0, 203, 0, 0, 0, 0],
    [0, 2, 24, 0, 21, 23, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 24, 0, 0, 21, 0, 0, 0, 0, 0, 362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0],
    [0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 362, 362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 363, 379, 0, 0, 0, 0, 0, 0, 0, 362, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 378, 0, 379, 0, 0, 23, 0, 23, 0, 0, 376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 1, 0, 0, 0, 21, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 378, 0, 0, 361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 361, 0, 0, 0, 0, 0, 0, 0, 376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0],
    [0, 0, 0, 376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0],
    [0, 0, 0, 0, 0, 0, 0, 364, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

camada3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 0,
    0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 183, 0,
    0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

tilemap = new Tilemap(0, 0, canvas.width, canvas.height, camada1);
tilemap2 = new Tilemap(0, 0, canvas.width, canvas.height, camada2);

function startGame() {

    timeLastFrame = performance.now();
    animate(performance.now());
}

function animate(time) {
    requestAnimationFrame(animate);

    acumulatedTimeBetweenFrames += time - timeLastFrame;
    timeLastFrame = time;

    if (acumulatedTimeBetweenFrames > timeBetweenUpdateDraw) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tilemap.draw();
        tilemap2.draw();
        
        acumulatedTimeBetweenFrames = 0;
    }

}           