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

//AGUA
class Agua extends Tile {

}

class RelvaClara extends Tile {

}

class FolhasArvore extends Tile {

}

class TroncoArvore extends Tile {

}

class Arbustros extends Tile {

}

class Cogumelos extends Tile {

}

class Calhau extends Tile {

}

class TroncoOutono extends Tile {

}

class FolhasOutono extends Tile {

}

class TroncoSeco extends Tile {

}

class TopoSeco extends Tile {

}

class Raiz extends Tile {

}

class FolhasNeve extends Tile {

}

class TroncoNeve extends Tile {

}

class CalhauNeve extends Tile {

}

class Arbustro extends Tile {

}

class ArbustroNeve extends Tile {

}

class Cerca extends Tile {

}

class IlhaCimaEsquerda extends Tile {

}

class IlhaCimaDireita extends Tile {

}

class IlhaBaixoEsquerda extends Tile {

}

class IlhaBaixoDireita extends Tile {

}

class IlhaDireita extends Tile {

}

class IlhaEsquerda extends Tile {

}

class IlhaCima extends Tile {

}

class IlhaBaixo extends Tile {

}


class Player extends Sprite {
    //Construtor de um jogador
    constructor(x, y, width, height) {
        super(x, y, width, height);
        //A velocidade de um jogador é 32
        this.speed = 32;
    }

    update() {
        super.draw();
        if (teclasEmBaixo['ArrowLeft']) {
                this.x -= this.speed;
        }
        if (teclasEmBaixo['ArrowRight']) {
                this.x += this.speed;
        }
        if (teclasEmBaixo['ArrowUp']) {
                this.y -= this.speed;
        }
        if (teclasEmBaixo['ArrowDown']) {
                this.y += this.speed;
        }


    }

    colisaoComElementos(){

    }

    colisaoLimitesMapaY(){
        
    }

    colisaoLimitesMapaX(){
        
    }

    colisaoPlacas(){
        
    }


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

        if (posicaoPeca == 2) {
            this.arrayPecas.push(new Arbustros(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 24) {
            this.arrayPecas.push(new Cogumelos(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 23) {
            this.arrayPecas.push(new Calhau(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 376) {
            this.arrayPecas.push(new TroncoOutono(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 361) {
            this.arrayPecas.push(new FolhasOutono(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 379) {
            this.arrayPecas.push(new Raiz(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 378) {
            this.arrayPecas.push(new TroncoSeco(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 363) {
            this.arrayPecas.push(new TopoSeco(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 201) {
            this.arrayPecas.push(new TroncoNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 181) {
            this.arrayPecas.push(new FolhasNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 203) {
            this.arrayPecas.push(new CalhauNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 22) {
            this.arrayPecas.push(new Arbustro(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 202) {
            this.arrayPecas.push(new ArbustroNeve(coluna * 32, fila * 32, 32, 32));
        }
  
        if (posicaoPeca == 184) {
            this.arrayPecas.push(new Cerca(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 66) {
            this.arrayPecas.push(new IlhaCimaEsquerda(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 67) {
            this.arrayPecas.push(new IlhaCima(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 68) {
            this.arrayPecas.push(new IlhaCimaDireita(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 86) {
            this.arrayPecas.push(new IlhaEsquerda(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 88) {
            this.arrayPecas.push(new IlhaDireita(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 106) {
            this.arrayPecas.push(new IlhaBaixoEsquerda(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 107) {
            this.arrayPecas.push(new IlhaBaixo(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 108) {
            this.arrayPecas.push(new IlhaBaixoDireita(coluna * 32, fila * 32, 32, 32));
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
Relva.load("Imagens/Camada 1/relva.png");
Pedra.load("Imagens/Camada 1/pedra.png");
Neve.load("Imagens/Camada 1/neve.png");
Gelo.load("Imagens/Camada 1/gelo.png");
Calcada.load("Imagens/Camada 1/calcada.png");
Terra.load("Imagens/Camada 1/terra.png");
Agua.load("Imagens/Camada 1/agua.png");
RelvaClara.load("Imagens/Camada 1/relva_clara.png");
FolhasArvore.load("Imagens/Camada 2/folhas_arvore_natural.png");
TroncoArvore.load("Imagens/Camada 2/tronco_arvore_natural.png");
Arbustros.load("Imagens/Camada 2/arbustro_conjunto.png");
Cogumelos.load("Imagens/Camada 2/cogumelos.png");
Calhau.load("Imagens/Camada 2/calhau.png");
TroncoOutono.load("Imagens/Camada 2/tronco_outono.png");
FolhasOutono.load("Imagens/Camada 2/folhas_outono.png");
TroncoSeco.load("Imagens/Camada 2/tronco_seco.png");
TopoSeco.load("Imagens/Camada 2/topo_seco.png");
Raiz.load("Imagens/Camada 2/raiz.png");
FolhasNeve.load("Imagens/Camada 2/folhas_neve.png");
TroncoNeve.load("Imagens/Camada 2/tronco_neve.png");
CalhauNeve.load("Imagens/Camada 2/calhau_neve.png");
Arbustro.load("Imagens/Camada 2/arbustro_natural.png");
ArbustroNeve.load("Imagens/Camada 2/arbustro_neve.png");
Cerca.load("Imagens/Camada 2/cerca_neve.png");
IlhaCima.load("Imagens/Camada 2/ilha_cima.png");
IlhaCimaDireita.load("Imagens/Camada 2/ilha_direita_cima.png");
IlhaCimaEsquerda.load("Imagens/Camada 2/ilha_esquerda_cima.png");
IlhaBaixoEsquerda.load("Imagens/Camada 2/ilha_esquerda_baixo.png");
IlhaBaixoDireita.load("Imagens/Camada 2/ilha_direita_baixo.png");
IlhaBaixo.load("Imagens/Camada 2/ilha_baixo.png");
IlhaDireita.load("Imagens/Camada 2/ilha_direita.png");
IlhaEsquerda.load("Imagens/Camada 2/ilha_esquerda.png");
Player.load("imagens/player.png");



const fps = 12;
const timeBetweenUpdateDraw = 1000 / fps;
let acumulatedTimeBetweenFrames = 0;
let timeLastFrame;


var camada1 = [];
var camada2 = [];
var camada3 = [];
let tilemap, tilemap2;
const numAssets = 10;
let numAssetsLoaded = 0;
var player;

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
    [44, 41, 41, 44, 44, 44, 44, 41, 42, 86, 41, 88, 42, 66, 67, 68, 42, 223, 223, 223, 223, 44, 44, 44, 44, 44, 44, 44, 223, 223, 222, 223, 223, 43, 43, 44, 221, 44, 221, 44],
    [44, 43, 43, 43, 43, 43, 43, 43, 42, 106, 107, 108, 42, 86, 41, 88, 42, 42, 222, 222, 222, 221, 222, 223, 223, 223, 223, 44, 223, 223, 223, 223, 223, 221, 43, 44, 221, 44, 221, 44],
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
    [44, 41, 41, 43, 43, 43, 43, 41, 44, 44, 41, 41, 41, 41, 42, 66, 67, 68, 42, 42, 42, 42, 391, 391, 391, 221, 221, 221, 221, 221, 221, 221, 44, 391, 221, 391, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 43, 43, 43, 41, 44, 44, 41, 41, 41, 42, 86, 41, 88, 42, 42, 42, 42, 391, 391, 391, 221, 221, 221, 221, 221, 221, 221, 44, 221, 391, 221, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 43, 43, 43, 43, 41, 44, 44, 41, 41, 42, 106, 107, 108, 42, 42, 391, 391, 391, 391, 391, 391, 221, 221, 221, 221, 221, 44, 44, 391, 221, 221, 44, 223, 223, 44],
    [44, 41, 41, 41, 41, 41, 43, 43, 43, 43, 41, 44, 44, 44, 42, 42, 42, 42, 42, 42, 42, 391, 391, 391, 391, 391, 221, 221, 221, 221, 44, 391, 391, 391, 44, 44, 44, 44, 44, 44],
    [44, 41, 41, 41, 41, 41, 41, 43, 43, 43, 41, 41, 41, 44, 44, 44, 42, 66, 67, 68, 42, 391, 391, 391, 391, 391, 391, 43, 221, 221, 44, 391, 391, 391, 44, 391, 391, 391, 391, 44],
    [44, 391, 391, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 391, 44, 42, 86, 41, 88, 42, 66, 67, 68, 391, 391, 391, 43, 43, 221, 44, 44, 44, 391, 391, 391, 391, 44, 391, 44],
    [44, 391, 391, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 391, 44, 42, 106, 107, 108, 42, 86, 41, 88, 391, 391, 43, 43, 43, 43, 391, 391, 44, 391, 391, 391, 391, 44, 391, 44],
    [44, 391, 44, 44, 391, 391, 391, 391, 391, 43, 43, 43, 43, 391, 391, 44, 42, 42, 42, 42, 42, 106, 107, 108, 391, 391, 43, 43, 43, 43, 391, 391, 44, 44, 44, 391, 391, 44, 391, 44],
    [44, 391, 391, 391, 44, 44, 44, 391, 391, 43, 43, 43, 43, 43, 391, 44, 42, 42, 42, 42, 42, 42, 42, 42, 391, 43, 43, 43, 43, 44, 391, 391, 391, 391, 44, 391, 391, 44, 391, 44],
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
    [0, 0, 0, 0, 0, 0, 0, 378, 0, 0, 0, 0, 379, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];

tilemap = new Tilemap(0, 0, canvas.width, canvas.height, camada1);
tilemap2 = new Tilemap(0, 0, canvas.width, canvas.height, camada2);
player = new Player(32, 0, 32, 32);


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
        player.update();
        acumulatedTimeBetweenFrames = 0;
    }

}