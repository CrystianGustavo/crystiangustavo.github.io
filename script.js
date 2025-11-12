const typed = new Typed(".multiple-text", {
    strings: [
        "Técnico de Informática",
        "Estudante de Tecnologia em Ánalise e Desenvolvimento de Sistemas",
        "Estudante de Tecnologia em Ciência de Dados",
        "Entusiasta de Tecnologia",
        "Gamer",
        "Nerd"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    loop: true
})

var nlContainer = document.getElementById("navbarNav");

var navs = nlContainer.getElementsByClassName("nav-link");

for(var i = 0; i < navs.length; i++){
    navs[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}