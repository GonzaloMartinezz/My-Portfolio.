let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML-CSS");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("React-JS");
        habilidades[3].classList.add("Node-JS");
        habilidades[4].classList.add("MongoDB");
        habilidades[5].classList.add("Git/Github");
        habilidades[6].classList.add("Diseño-Canva-Figma");
        habilidades[7].classList.add("Comunicacion");
        habilidades[8].classList.add("Trabajo-En-Equipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[10].classList.add("Liderazgo");
    }

window.onscroll = function(){
    efectoHabilidades();
}

}