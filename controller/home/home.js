let menuAberto = false;
function controleMenu(){
    var btnHome = document.getElementById("btn_home");
    var btnFormacao = document.getElementById("btn_formacao");
    var btnProjetos = document.getElementById("btn_projetos");

    var btnsHeader = document.getElementById("btns_header");
    
    var menuIcon = document.getElementById("menu_icon");
    var menuIconAff = document.getElementById("menu_icon_affter");
    var menuIconBef = document.getElementById("menu_icon_before");

    if(menuAberto){
        btnHome.style.right = '-20vw';
        btnFormacao.style.right = '-20vw';
        btnProjetos.style.right = '-20vw';
        btnsHeader.style.backgroundColor = 'rgba(245,244,244,0.3)';

        menuIcon.style.rotate = '0deg';
        menuIconAff.style.rotate = '0deg';
        menuIconBef.style.rotate = '0deg';

        menuIconAff.style.top = '0';
        menuIconBef.style.top = '0';

    }else{
        btnHome.style.right = '0';
        btnFormacao.style.right = '0';
        btnProjetos.style.right = '0';
        btnsHeader.style.backgroundColor = 'transparent';

        menuIcon.style.rotate = '45deg';
        menuIconAff.style.rotate = '-45deg';
        menuIconBef.style.rotate = '-45deg';

        menuIconAff.style.top = '11px';
        menuIconBef.style.top = '-11px';
    }
    menuAberto = !menuAberto;
}