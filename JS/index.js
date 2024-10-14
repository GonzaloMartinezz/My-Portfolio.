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
        habilidades[0].classList.add("HTML-CSS ");
        habilidades[1].classList.add("Javascript");
        habilidades[2].classList.add("React-JS");
        habilidades[3].classList.add("Node-JS");
        habilidades[4].classList.add("MongoDB");
        habilidades[5].classList.add("GitHub");
        habilidades[6].classList.add("Diseño/canva/figma");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("Dedicacion");
        habilidades[9].classList.add("Trabajo en equipo ");
        habilidades[10].classList.add("Creatividad");
        habilidades[11].classList.add("Liderazgo");



    }

window.onscroll = function(){
    efectoHabilidades();
}

}