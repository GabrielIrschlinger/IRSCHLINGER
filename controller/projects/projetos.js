import { trocaBanner } from "../../controller/projects/banner.js";
import { startAutoSwap } from "../../controller/projects/banner.js";
import { criarBanners } from "../../controller/projects/banner.js";
import { startAutoSwapHabilits } from "../../controller/projects/habilits.js";
import { criarHabilits } from "../../controller/projects/habilits.js";
import { CriadorCards } from "../../controller/projects/cards.js";


window.trocaBanner = trocaBanner;

document.addEventListener("DOMContentLoaded", function() {
    criarBanners();
    criarHabilits();    
    
    let criadorCards = new CriadorCards();
    criadorCards.criarCards();    
    window.addCard = criadorCards.addCard;

    trocaBanner(1); // Inicializa o banner
    startAutoSwap(); // Inicia a troca automática
    startAutoSwapHabilits();
});