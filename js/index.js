// Definição do tamanho do canvas.
// 1280x960
canvas.width = 40 * 32;
canvas.height = 30 * 32;

// Criação da classe Tile (Peça).
// Cada tile é composto por uma posição, de coordenadas x, y, largura e altura.
class Tile extends Sprite {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}

// Nesta secção, são criadas as classes para cada peça presente no mapa.
// Estas classes são herdeiras da classe Tile, logo terão uma posição, largura e altura.

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

class Placa extends Tile {

}

class PlacaNeve extends Tile {

}

// Criação da classe Player, herdeira da classe AnimatedSprite criada no ficheiro gameObjects.js.
// Cada player terá uma posição, altura, largura, velocidade de movimento, vida e número de placas que possui.
class Player extends AnimatedSprite {

    //Construtor de um jogador

    constructor(x, y, width, height) {
        super(x, y, width, height);

        //A velocidade de um jogador é 32
        this.speed = 32;
        this.vida = 100;
        this.placas = 0;
    }

    // método para detetar colisão com os blocos.
    // Se o jogador e determinado tipo de tile ,de uma dada camada, tiverem a mesma posição, será returnado true.
    // Cada número (Ex: 44) representa o id de cada tipo de tile.
    colisaoBlocos(x, y) {
        if (camada1[y][x] === 44 || camada2[y][x] === 21 || camada2[y][x] === 376 || camada2[y][x] === 378 || camada2[y][x] === 202 ||
            camada2[y][x] === 184 || camada2[y][x] === 203 || camada2[y][x] === 23 || camada2[y][x] === 379 || camada2[y][x] === 201) {
            return true;
        } else {
            return false
        }
    }

    //método para detetar colisão com água.
    //tem o mesmo funcionamento do metodo anterior.

    colisaoAgua(x, y) {
        if (camada1[y][x] === 42) {

            return true;
        } else {
            return false
        };
    }

    //método para detetar colisão com o limite do mapa, na posição inicial do jogador
    //tem o mesmo funcionamento do metodo anterior.

    colisaoInicioMapa(x, y) {
        if (camada1[y][x] == 504) {

            return true;
        } else {
            return false
        };
    }

    //método para detetar colisão com o limite do mapa, no final do mapa.
    //tem o mesmo funcionamento do metodo anterior.

    colisaoFimMapa(x, y) {
        if (camada1[y][x] == 505) {

            return true;
        } else {
            return false
        };
    }

    //método para detetar colisão com as placas, de modo a que o jogador as possa colecionar durante o jogo
    //tem o mesmo funcionamento do metodo anterior.

    colisaoPlaca(x, y) {
        if (camada3[y][x] == 600 || camada3[y][x] == 601 || camada3[y][x] == 602 || camada3[y][x] == 603 || camada3[y][x] == 604 ||
            camada3[y][x] == 605 || camada3[y][x] == 606 || camada3[y][x] == 607 || camada3[y][x] == 608 || camada3[y][x] == 609 ||
            camada3[y][x] == 610) {
            return true;
        } else {
            return false
        };
    }

    //método para detetar colisão com os inimigos espalhados pelo mapa.
    // Se a posição dos inimigos e do player for a mesma, será returnado true.

    colisaoEnemy(x, y) {
        if (
            enemy.x == player.x && enemy.y == player.y ||
            enemy2.x == player.x && enemy2.y == player.y ||
            enemy3.x == player.x && enemy3.y == player.y ||
            enemy4.x == player.x && enemy4.y == player.y ||
            enemy5.x == player.x && enemy5.y == player.y ||
            enemy6.x == player.x && enemy6.y == player.y ||
            enemy7.x == player.x && enemy7.y == player.y ||
            enemy8.x == player.x && enemy8.y == player.y ||
            enemy9.x == player.x && enemy9.y == player.y ||
            enemy10.x == player.x && enemy10.y == player.y ||
            enemy11.x == player.x && enemy11.y == player.y) {

            return true;
        } else {
            return false
        };
    }


    //metodo update() do jogador
    // Irá atualizar as propriedades do jogador.
    update() {

        // Referência ao metodo draw() da super class
        super.draw();

        //posição atual do jogador
        let posicaoX = this.x / this.width;
        let posicaoY = this.y / this.height;

        // Acontecimento, caso haja colisão com a água
        // Neste caso será retirado 10 pontos de vida, durante o tempo em que o jogador estiver dentro de água
        if (this.colisaoAgua(posicaoX, posicaoY)) {
            this.vida -= 10;
            idVida.innerHTML = this.vida; // Atualização da scoreboard
            if (this.vida <= 0) {
                alert("morreu");
                this.x = 32;
                this.y = 64;
                location.reload();
            }
        }

        // Condição, caso seja coletada uma placa
        // Cada placa tem um id próprio, sendo que será removida do array pecas da camada 3(Camada exclusiva das placas) quando o player colidir com a mesma.
        // No lugar da placa no array, será introduzido o valor 0.

        if (this.colisaoPlaca(posicaoX, posicaoY)) {
            this.placas++;
            if (camada3[posicaoY][posicaoX] == 600) {
                tilemap3.arrayPecas.splice(0, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 601) {
                tilemap3.arrayPecas.splice(1, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 602) {
                tilemap3.arrayPecas.splice(2, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 603) {
                tilemap3.arrayPecas.splice(3, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 604) {
                tilemap3.arrayPecas.splice(4, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 605) {
                tilemap3.arrayPecas.splice(5, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 606) {
                tilemap3.arrayPecas.splice(6, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 607) {
                tilemap3.arrayPecas.splice(7, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 608) {
                tilemap3.arrayPecas.splice(8, 1, 0);

            }
            if (camada3[posicaoY][posicaoX] == 609) {
                tilemap3.arrayPecas.splice(9, 1, 0);

            }

            if (camada3[posicaoY][posicaoX] == 610) {
                tilemap3.arrayPecas.splice(10, 1, 0);

            }
            console.log(tilemap3.arrayPecas)
            camada3[posicaoY][posicaoX] = 999; // Alteração do id da posição da placa na camada 3.
            idScore.innerHTML = player.placas + " / 11"; // Atualização do score do jogador.
        }

        // Consequências da colisão com um inimigo 
        // Neste caso, por cada colisão com inimigos, o jogador perde 25 pontos de vida

        if (this.colisaoEnemy(posicaoX, posicaoY)) {
            this.vida -= 25;
            idVida.innerHTML = this.vida;

            if (this.vida <= 0) {
                alert("morreu");
                location.reload();
            }

        }

        // Se o jogador tentar sair do mapa, será movido para a posição inical
        if (this.colisaoInicioMapa(posicaoX, posicaoY)) {
            this.x = 64;
            this.y = 64;
        }

        // Se o jogador tentar sair do mapa, será movido para a posição inical
        // Se já não existirem placas para coletar, será terminado o jogo.
        if (this.colisaoFimMapa(posicaoX, posicaoY)) {
            if (this.placas == 11) {
                alert("WIN");
                location.reload();
            } else {
                this.x = 32;
                this.y = 32;
            }
        }

        //Controlar o player com as setas

        if (teclasEmBaixo['ArrowLeft']) {
            super.animarEsquerda(); // Animação do sprite do player
            posicaoX--; // detetar a colisão para a posição seguinte, para que não seja possivel pisar os dterminados blocos

            //Evento caso haja colisão
            if (this.colisaoBlocos(posicaoX, posicaoY)) {

                return;
            }

            //Atualização da coordenada X do jogador
            this.x -= this.speed;
        }

        if (teclasEmBaixo['ArrowRight']) {
            super.animarDireita(); // Animação do sprite do player
            posicaoX++; // detetar a colisão para a posição seguinte, para que não seja possivel pisar os dterminados blocos

            //Evento caso haja colisão
            if (this.colisaoBlocos(posicaoX, posicaoY)) {

                return;
            }
            //Atualização da coordenada X do jogador
            this.x += this.speed;

        }

        if (teclasEmBaixo['ArrowUp']) {
            super.animarCima(); // Animação do sprite do player
            posicaoY--; // detetar a colisão para a posição seguinte, para que não seja possivel pisar os dterminados blocos

            //Evento caso haja colisão
            if (this.colisaoBlocos(posicaoX, posicaoY)) {
                return;
            }
            //Atualização da coordenada Y do jogador
            this.y -= this.speed;
            return;
        }

        if (teclasEmBaixo['ArrowDown']) {
            super.animarBaixo(); // Animação do sprite do player
            posicaoY++; // detetar a colisão para a posição seguinte, para que não seja possivel pisar os dterminados blocos

            //Evento caso haja colisão
            if (this.colisaoBlocos(posicaoX, posicaoY)) {
                return;
            }

            //Atualização da coordenada Y do jogador
            this.y += this.speed;
            return;
        }

    }


}

// Criação da classe Enemy, herdeira da classe AnimatedSprite criada no ficheiro gameObjects.js.
// Cada enemy terá uma posição, altura, largura, velocidade de movimento e vida 

class Enemy extends AnimatedSprite {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speed = 8;
        this.vida = 100;

    }

    // método para detetar colisão com os blocos.
    // Se o jogador e determinado tipo de tile ,de uma dada camada, tiverem a mesma posição, será returnado true.
    // Cada número (Ex: 44) representa o id de cada tipo de tile.
    colisaoBlocos(x, y) {
        if (camada1[y][x] == 44 || camada1[y][x] == 42 || camada2[y][x] == 201 || camada2[y][x] == 379) {
            return true;
        } else {
            return false
        }
    }

    //metodo draw() do inimigo

    draw() {
        // Referência ao metodo draw() da super class
        super.draw();
    }

    //metodo update() do inimigo
    // Irá atualizar as propriedades do inimigo.

    update() {
        //posição atual do jogador
        let posicaoX = this.x / this.width;
        let posicaoY = this.y / this.height;

        // Animação com recurso ao sprite, dependendo da direção do inimigo
        if (this.speed > 0) {
            super.animarDireitaZombie();
            posicaoX++;
        } else {
            super.animarEsquerdaZombie();
            posicaoX--
        }

        // Condição para alterar a direção do inimigo
        // Quando existe uma colisão, o valor da velocidade é alterado para negativo ou positivo
        // se this.speed === -8, quando existir colisão this.speed = -(-8), ou seja 8.

        if (this.colisaoBlocos(posicaoX, posicaoY) == true) {
            this.speed = -(this.speed);
        }

        //Atualização da coordenada X do jogador
        this.x += this.speed;

    }

}

// Criação da classe Tilemap, herdeira da clase GameObject, criada no ficheiro gameObjects.js.
// Cada tilemap é constituido por uma posição, altura, largura e respoetivo mapa.
// Existe ainda um array, onde serão gurdadas todas as peças gerada para o tilemap

class Tilemap extends GameObject {

    constructor(x, y, width, height, mapa) {
        super(x, y, width, height);
        this.mapa = mapa;
        this.arrayPecas = [];
        this.gerarMapa();
    }

    // Metodo para gerar mapa
    // Como o array das camadas é do tipo [][], serão utilizados dois ciclos for para percorrer todo o array.
    // Quando o id da peça for igual ao id presente no mapa, a respetiva peça é gerada

    gerarMapa() {

        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 0; j < this.mapa[i].length; j++) {
                this.gerarPeca(i, j, this.mapa[i][j])
            }
        }
    }

    // Condições para gerar as peças, mediante o id.

    gerarPeca(fila, coluna, posicaoPeca) {

        if (posicaoPeca == 44) {
            this.arrayPecas.push(new Pedra(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 41) {
            this.arrayPecas.push(new Relva(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 504) {
            this.arrayPecas.push(new Relva(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 505) {
            this.arrayPecas.push(new RelvaClara(coluna * 32, fila * 32, 32, 32));
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

        if (posicaoPeca == 600) {
            this.arrayPecas.push(new PlacaNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 601) {
            this.arrayPecas.push(new PlacaNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 602) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 603) {
            this.arrayPecas.push(new PlacaNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 604) {
            this.arrayPecas.push(new PlacaNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 605) {
            this.arrayPecas.push(new PlacaNeve(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 606) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 607) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }
        if (posicaoPeca == 608) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 609) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }

        if (posicaoPeca == 610) {
            this.arrayPecas.push(new Placa(coluna * 32, fila * 32, 32, 32));
        }

    }

    // metodo draw()
    // desenha a peça caso o elemento do array seja diferente de 0.
    draw() {

            for (var i = 0; i < this.arrayPecas.length; i++) {
                if (this.arrayPecas[i] === 0) {

                } else {
                    var peca = this.arrayPecas[i]
                    peca.draw();
                }
            }
        }
        // metodo draw()
    update() {
        this.draw();
    }

}




//load das imagens de cada classe
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
Placa.load("Imagens/Camada 3/placa.png");
PlacaNeve.load("Imagens/Camada 3/placa_neve.png");
Player.load("Imagens/player_sprite.png", 16, 4);
Enemy.load("Imagens/zombie_sprite.png", 16, 4);


const fps = 10;
const timeBetweenUpdateDraw = 1000 / fps;
let acumulatedTimeBetweenFrames = 0;
let timeLastFrame;

// Criação dos vários atributos do jogo
var camada1 = [];
var camada2 = [];
var camada3 = [];
let tilemap, tilemap2, tilemap3;
const numAssets = 10;
let numAssetsLoaded = 0;
var player, enemy, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9, enemy10, enemy11;
var idScore, idVida;

// Implementação do modo fullscreen
var fullscreen = document.getElementById("idFullscreen");

fullscreen.addEventListener("click", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});


window.addEventListener('assetLoad', (e) => {

    console.log("Asset Loaded", e.detail);
    numAssetsLoaded++;

    if (numAssetsLoaded == numAssets) {
        startGame();
    }
});

// Arrays que representam cada camada do tilemap.
// 1º camada representa o chão e os limites do mapa.
// 2º camada representa as árvores, pedras e arbustros do mapa.
// 3º camada é exclusiva para as placas coletáveis.

camada1 = [
    [44, 504, 504, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
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
    [44, 391, 44, 391, 44, 391, 391, 44, 44, 43, 43, 44, 391, 391, 391, 44, 44, 391, 391, 44, 43, 43, 43, 43, 43, 43, 44, 43, 43, 43, 43, 43, 44, 43, 44, 391, 44, 391, 391, 505],
    [44, 391, 391, 391, 391, 391, 391, 391, 44, 43, 43, 44, 391, 391, 391, 391, 391, 391, 391, 44, 391, 43, 43, 43, 43, 44, 43, 43, 43, 43, 43, 43, 44, 43, 44, 43, 44, 391, 391, 505],
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

camada3 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 601, ],
    [0, 0, 0, 0, 602, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 603, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 604, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 605, 0],
    [0, 0, 606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 607, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 609, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 610, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Instanciar os objetos

tilemap = new Tilemap(0, 0, canvas.width, canvas.height, camada1);
tilemap2 = new Tilemap(0, 0, canvas.width, canvas.height, camada2);
tilemap3 = new Tilemap(0, 0, canvas.width, canvas.height, camada3);
player = new Player(32, 32, 32, 32);
enemy = new Enemy(96, 384, 32, 32);
enemy2 = new Enemy(128, 32, 32, 32);
enemy3 = new Enemy(32, 768, 32, 32);
enemy4 = new Enemy(416, 896, 32, 32);
enemy5 = new Enemy(640, 352, 32, 32);
enemy6 = new Enemy(640, 64, 32, 32);
enemy7 = new Enemy(960, 96, 32, 32);
enemy8 = new Enemy(1248, 224, 32, 32);
enemy9 = new Enemy(1088, 640, 32, 32);
enemy10 = new Enemy(1248, 416, 32, 32);
enemy11 = new Enemy(792, 736, 32, 32);

// Elementos da score board
idScore = document.getElementById("idScore");
idVida = document.getElementById("idVida");
idVida.innerHTML = 100;

// função para começar o jogo
function startGame() {

    timeLastFrame = performance.now();
    animate(performance.now());

}

//funçao para animar todos os elementos do jogo
function animate(time) {
    requestAnimationFrame(animate);

    acumulatedTimeBetweenFrames += time - timeLastFrame;
    timeLastFrame = time;

    if (acumulatedTimeBetweenFrames > timeBetweenUpdateDraw) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tilemap.draw();
        player.update();
        enemy.draw();
        enemy.update();
        enemy2.draw();
        enemy2.update();
        enemy3.draw();
        enemy3.update();
        enemy4.draw();
        enemy4.update();
        enemy5.draw();
        enemy5.update();
        enemy6.draw();
        enemy6.update();
        enemy7.draw();
        enemy7.update();
        enemy8.draw();
        enemy8.update();
        enemy9.draw();
        enemy9.update();
        enemy10.draw();
        enemy10.update();
        enemy11.draw();
        enemy11.update();
        tilemap2.draw();
        tilemap3.draw();

        acumulatedTimeBetweenFrames = 0;
    }


}