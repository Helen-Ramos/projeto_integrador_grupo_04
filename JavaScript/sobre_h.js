const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click' , toggleMenu);

let logo = document.getElementById("logo_div");
    console.log(logo)

let secao = document.getElementsByClassName("sec2");
    console.log(secao)


let h1 = document.querySelector("h1");
h1.style.color = "rgba(0, 128, 128)"
h1.style.fontSize = "50px";


let h2 = document.querySelector("h2");
h2.style.color = "rgba(0, 128, 128)"
h2.style.fontSize = "30px";

let colunas = document.querySelector(".colunas");
colunas.style.border = "solid 5px mediumspringgreen"
colunas.style.backgroundColor = "rgba(0, 128, 128, 0.537)"

let colunas1 = document.querySelector(".colunas1");
colunas1.style.border = "solid 5px mediumspringgreen"
colunas1.style.backgroundColor = "rgba(0, 128, 128, 0.537)"

let colunas2 = document.querySelector(".colunas2");
colunas2.style.border = "solid 5px mediumspringgreen"
colunas2.style.backgroundColor = "rgba(0, 128, 128, 0.537)"

