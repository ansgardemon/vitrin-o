const git  = document.querySelector(".sobre")
const btnMissao = document.querySelector(".missao")
const btnVisao = document.querySelector(".visao")
const btnValores = document.querySelector(".valores")


const sobre = document.querySelector(".sobreDiv");
const missao = document.querySelector(".missaoDiv");
const visao = document.querySelector(".visaoDiv");
const valores = document.querySelector(".valoresDiv");



btnSobre.addEventListener("click", ()=> {
    sobre.style.display = "flex";
    missao.style.display = "none";
    visao.style.display = "none";
    valores.style.display = "none";
})

btnMissao.addEventListener("click", ()=> {
    sobre.style.display = "none";
    missao.style.display = "flex";
    visao.style.display = "none";
    valores.style.display = "none";
})

btnVisao.addEventListener("click", ()=> {
    sobre.style.display = "none";
    missao.style.display = "none";
    visao.style.display = "flex";
    valores.style.display = "none";
})

btnValores.addEventListener("click", ()=> {
    sobre.style.display = "none";
    missao.style.display = "none";
    visao.style.display = "none";
    valores.style.display = "flex";
})

/////EXPERIMENTAL


window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    
    if (window.scrollY > 100) { // Altere '100' para o valor desejado
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });