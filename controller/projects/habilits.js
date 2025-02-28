let habilitActual = 1;
let totalHabilits = 3;
let intervaloTroca;

let frameworksHabilits= ["EM", "APRENDIZAGEM", "??!!"];
let areasHabilits= ["WEB", "BACK-END", "FRONT-END"];
let linguagensHabilits= ["HTML", "CSS", "JS"];

let frameworks = document.getElementById("frameworks_nav");
let areas = document.getElementById("areas_nav");
let linguagens = document.getElementById("linguagens_nav");

export function criarHabilits(){
    frameworks.style.height = totalHabilits * 4 + 'vw';
    areas.style.height = totalHabilits * 4 + 'vw';
    linguagens.style.height = totalHabilits * 4 + 'vw';

    for(var i =0; i < totalHabilits; i++){
        var h4Frame = document.createElement('h4');
        h4Frame.textContent = frameworksHabilits[i];
        frameworks.appendChild(h4Frame);

        var h4Areas = document.createElement('h4');
        h4Areas.textContent = areasHabilits[i];
        areas.appendChild(h4Areas);

        var h4Linguages = document.createElement('h4');
        h4Linguages.textContent = linguagensHabilits[i];
        linguagens.appendChild(h4Linguages);
    }
}

function trocaHabilits(numero) {    
   frameworks.style.top = "-" + (habilitActual - 1) * 4 + "vw";
   areas.style.top = "-" + (habilitActual - 1) * 4 + "vw";
   linguagens.style.top = "-" + (habilitActual - 1) * 4 + "vw";
}
export function startAutoSwapHabilits() {
    intervaloTroca = setInterval(autoTrocaHabilits, 2000); // Troca a cada 3 segundos
}

function autoTrocaHabilits() {
    habilitActual = (habilitActual >= totalHabilits) ? 1 : habilitActual + 1;
    trocaHabilits(habilitActual);
}

