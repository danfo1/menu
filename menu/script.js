const navegacion =document.querySelector(".menuprincipal")
const cerrar =document.querySelector(".cerrarmenu")
const abrir =document.querySelector(".abrirmenu")

abrir.addEventListener("click",()=>{
    navegacion.classList.add("visible");
})
cerrar.addEventListener("click",()=>{
    navegacion.classList.remove("visible");
})