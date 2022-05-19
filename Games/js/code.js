//Variáveis importantes para ajuda do programa
var startTime, endTime;
var contadorHits = 0;
var wid = screen.width - 126;
var hei = screen.height - 258;

//Inicialização de variáveis atribuidas a elementos de HTML
var startBtn = document.getElementById("comecar");

var tempo = document.getElementById("tempo");

var sizeImg = document.getElementById("tamanhoImg");
var sizeImgText = document.getElementById("tamanhoImgText");

var timeSlider = document.getElementById("myRange");
var timeText = document.getElementById("demo");

var targets = document.getElementById("quantos");
var targetsText = document.getElementById("demo2");

var valor = document.getElementById("valor");
var valor2 = document.getElementById("valor2");
var valor3 = document.getElementById("valor3");

var aviso = document.getElementById("aviso");

var hits = document.getElementById("i");

//Número de hits escondido antes de começar o jogo
$("#i").hide();
hits.style.color = "white";
hits.style.opacity = "0.5";

$("#aviso").hide();
aviso.style.opacity = "0.5";

$("#tempo").hide();
tempo.style.opacity = "0.5";

sizeImg.addEventListener('input', handleChange);

function handleChange(e) {
    var { value } = e.target;
    imgTarget.style.width = `${value}px`;
    imgTarget.style.height = `${value}px`;
    sizeImgText.innerHTML = `${value}`;
}

var imgTarget = document.getElementById("target");
sizeImgText.innerHTML = "100";

//Para não poder arrastar o target
imgTarget.ondragstart = function() { return false; };

//Atribuição de CSS ao target para se esconder
imgTarget.style.display = "block";
imgTarget.style.position = "absolute";
document.body.appendChild(imgTarget);
$("#target").hide();

//Valor do slider do tempo
timeText.innerHTML = timeSlider.value + " ms";
timeSlider.oninput = function() {
    timeText.innerHTML = this.value + " ms";
}

//Valor do slider de quantas vezes queres acertar no target
targetsText.innerHTML = targets.value;
targets.oninput = function() {
    targetsText.innerHTML = this.value;
}

//Posição do target
function position() {
    //Posiciona random de 0 a resolução de ecrã
    var i = Math.floor(Math.random() * wid) + 1;
    var j = Math.floor(Math.random() * hei) + 1;
    imgTarget.style.left = i + "px";
    imgTarget.style.top = j + "px";
    console.log(i + " " + j);
}

//Temporizador para estar constantemente a mudar de posição
function change() {
    t = setTimeout(change, timeSlider.value);
    position();
}

//Quando se clica no target
imgTarget.addEventListener("click", () => {
    //Contador +1
    contadorHits++;
    hits.innerHTML = "Hits: " + contadorHits;

    //A variável t (dentro da funcão change) para o temporizador atual
    clearTimeout(t);
    //Reinicia o a função change, significando que o target muda novamente de posição, iniciando um novo temporizador para mudar de posição
    change();

    //Se os hits no target forem iguais ao valor introduzido pelo user no slider, então o jogo acaba
    if (contadorHits == targets.value) {
        endTime = new Date();
        var timeDiff = endTime - startTime;
        timeDiff /= 1000;
        var seconds = Math.round(timeDiff);

        //Mostrar duração do jogo
        console.log(seconds + " seconds");

        //Reinicia os hits
        contadorHits = 0;
        $("#tempo").show();
        tempo.innerHTML = "Last result: " + seconds + "s";
        //Para o temporizador
        clearTimeout(t);
        mostrar();
    }
});

//Quando se clica ouve-se um tiro
//window.addEventListener("click", () => {
//  audio.play();
//});

//Quando o rato entra no target fica com uma border preta
imgTarget.addEventListener("mouseover", () => {
    imgTarget.style.border = "2px solid black";
    imgTarget.style.borderRadius = "200px";

});

//Quando o rato sai do target a border sai
imgTarget.addEventListener("mouseleave", () => {
    imgTarget.style.border = "0";
});

//Quando se clica no botão "START"
startBtn.addEventListener("click", () => {
    startTime = new Date();

    //Mostrar quais funcionalidades deveriam estar hidden ou visible
    $("#target, #aviso, #i").show();
    $("#comecar, #demo, #myRange, #quantos, #tamanhoImg, #valor, #valor2, #valor3, #tempo").hide();

    //Reinicia os hits
    contadorHits = 0;
    hits.innerHTML = "Hits: " + contadorHits;

    //Inicia a função que move o target
    change();
})

//Quando se clica no ESC
document.addEventListener("keydown", () => {
    if (event.key === "Escape") {

        //Reinicia os hits
        contadorHits = 0;
        hits.innerHTML = "Hits: " + contadorHits;

        //Esconder ou mostrar elementos
        mostrar();

        //Para o temporizador
        clearTimeout(t);
    }
})

//Mostrar quais funcionalidades deveriam estar hidden ou visible
function mostrar() {
    $("#comecar, #demo, #myRange, #tamanhoImg, #quantos, #valor, #valor2, #valor3").show();
    $("#aviso, #i, #imgTarget, #target").hide();
}

if (document.body.animate) {
    document.querySelector('#target').addEventListener('click', pop);
}

function pop(e) {
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
        const bbox = document.querySelector('#target').getBoundingClientRect();
        const x = bbox.left + bbox.width / 2;
        const y = bbox.top + bbox.height / 2;
        for (let i = 0; i < 20; i++) {
            // We call the function createParticle 30 times
            // We pass the coordinates of the button for x & y values
            createParticle(x, y);
        }
    } else {
        for (let i = 0; i < 20; i++) {
            // We call the function createParticle 30 times
            // As we need the coordinates of the mouse, we pass them as arguments
            createParticle(e.clientX, e.clientY);
        }
    }
}

function createParticle(x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);

    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 15 + 10);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color in a blue/purple palette
    particle.style.background = `hsl(${Math.random() * 20 + 200}, 100%, 100%)`;

    // Generate a random x & y destination within a distance of 75px from the mouse
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = y + (Math.random() - 0.5) * 2 * 75;

    // Store the animation in a variable as we will need it later
    const animation = particle.animate([{
            // Set the origin position of the particle
            // We offset the particle with half its size to center it around the mouse
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            opacity: 1
        },
        {
            // We define the final coordinates as the second keyframe
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
        }
    ], {
        // Set a random duration from 500 to 1500ms
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value of 200ms
        delay: Math.random() * 10
    });

    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
        particle.remove();
    };
}