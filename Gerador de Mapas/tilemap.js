"use strict";

const mainTiles = document.querySelectorAll("div > div");
const map = document.querySelector("#map");
const btnSave = document.querySelector("#export");
const uploader = document.querySelector("#uploader");
const filas = document.getElementById("idFilas");
const colunas = document.getElementById("idColunas");
const medidas = document.getElementById("idMedidas");
const relva = document.getElementById("relva");
const terra = document.getElementById("terra");
const neve = document.getElementById("neve");
const pedra = document.getElementById("pedra");
const agua = document.getElementById("agua");



var numRows = filas.value;
var numCols = colunas.value;

filas.addEventListener("change", () => {
    console.log(filas.value)
});



map.style.width = 32* numCols +"px";
map.style.heigth = 32* numRows + "px";



btnSave.addEventListener("click", (event) => {
    event.preventDefault();
    const mapJSON = generateMapJSON();
    downloadFile(mapJSON);
});

medidas.addEventListener("click", (event) => {
   location.reload(); 
});



(() => {
    createGrid(numRows, numCols);
    setUpDragEvents();
})();

function createGrid(numRows, numCols) {
    const numCells = numRows * numCols;

    for (let i = 1; i <= numCells; i++) {
        let newCell = document.createElement("div");
        newCell.className = "cell";
        map.appendChild(newCell);
    }
}

// DRAG AND DROP

function setUpDragEvents() {
    const tiles = document.querySelectorAll(".cell");

    mainTiles.forEach((tile) => {
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragend", dragEnd);
    });

    tiles.forEach((tile) => {
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", drop);
    });
}

function dragStart(event) {
    event.dataTransfer.setData("uuid", event.target.id);
}

function dragEnd() {}

function dragEnter(event) {
    event.preventDefault();

    const slot = event.target;
    slot.classList.add("hover");
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    const slot = event.target;
    slot.classList.remove("hover");
}

function drop(event) {
    const slot = event.target.className.includes("cell")
        ? event.target
        : event.target.parentElement;
    slot.classList.remove("hover");

    const id = event.dataTransfer.getData("uuid");
    const draggable = document.getElementById(id);

    // Ignora se for um elemento repetido
    if (slot.querySelector(`[data-index="${draggable.dataset.index}"]`)) return;

    if (draggable.parentNode.className.includes("cell")) {
        slot.appendChild(draggable);
        return;
    }

    const element = cloneNodeElement(draggable);

    slot.appendChild(element);
}

function cloneNodeElement(node) {
    const element = node.cloneNode();
    const uniqueId = Date.now() * Math.random();
    element.className = element.id;     
    element.id = uniqueId;
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        event.target.remove();
    });
    return element;
}

// DRAG AND DROP

function generateMapJSON() {
    const cells = map.querySelectorAll(".cell");

    let tiles = {};

    let index = 0;
    for (let i = 0; i < numRows; i++) {
        let row = {};
        for (let j = 0; j < numCols; j++) {
            const cell = cells[index];
            const images = cell.querySelectorAll("div");
            const imagesDataIndex = getImageDataIndex(images);
            row[j] = imagesDataIndex;
            index++;
        }
        tiles[i] = row;
    }

    return JSON.stringify(tiles, null, "\t");
}

function getImageDataIndex(images) {
    let dataIndex = [];

    images.forEach((image) => {
        dataIndex.push(parseInt(image.dataset.index));
    });

    return dataIndex;
}

function downloadFile(content) {
    const uuid = Date.now();
    const anchor = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    anchor.href = URL.createObjectURL(file);
    anchor.download = `map_${uuid}.json`;
    anchor.click();
}
