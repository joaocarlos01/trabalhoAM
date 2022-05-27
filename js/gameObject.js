// gameObjects.js 

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

class GameObject extends EventTarget {

    constructor(x, y, width, height) {
        super();

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update() {
       
    }

    draw() {
     

    }
}

class Sprite extends GameObject {

    static imagem;

    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    update() {
        
    }

    draw() {


        ctx.drawImage(this.constructor.imagem, this.x, this.y, this.width, this.height);
    }

    static load(urlImagem) {


        this.imagem = new Image();

        this.imagem.addEventListener("load", () => {
            window.dispatchEvent(new CustomEvent('assetLoad', { detail: this }))
        });

        this.imagem.src = urlImagem;
    }
}

class AnimatedSprite extends Sprite {

    static numberFrames;
    static numberFramesPerRow;
    static slice;

    constructor(x, y, width, height) {
        super(x, y, width, height);

        this.currentFrame = 1;

        this.sx = 0;
        this.sy = 0;
    }

    animarEsquerda(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 297;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    animarEsquerdaZombie(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 48;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    animarDireitaZombie(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 98;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    animarDireita(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 148;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    animarCima(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 444;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    animarBaixo(){

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1)% this.constructor.numberFramesPerRow;
        let deltaY = 0;

      
        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY ;

    }

    update() {

        this.currentFrame++;

        if (this.currentFrame > this.constructor.numberFrames)
            this.currentFrame = 1;

        let deltaX = (this.currentFrame - 1) % this.constructor.numberFramesPerRow;
        let deltaY = Math.floor((this.currentFrame - 1) / this.constructor.numberFramesPerRow);

        this.sx = deltaX * this.constructor.slice.width;
        this.sy = deltaY * this.constructor.slice.height;
    }




    draw() {


        ctx.drawImage(this.constructor.imagem, this.sx, this.sy, this.constructor.slice.width, this.constructor.slice.height,
            this.x, this.y, this.width, this.height);
    }

    static load(urlImagem, numberFrames, numberFramesPerRow) {

        this.imagem = new Image();

        this.imagem.src = urlImagem;

        this.imagem.addEventListener('load', () => {

            this.numberFrames = numberFrames;
            this.numberFramesPerRow = numberFramesPerRow;

            this.slice = {};
            this.slice.width = this.imagem.width / numberFramesPerRow;

            let numberRows = Math.ceil(numberFrames / numberFramesPerRow);
            this.slice.height = this.imagem.height / numberRows;

            window.dispatchEvent(new CustomEvent('assetLoad', { detail: this }));

        });

    }

}







