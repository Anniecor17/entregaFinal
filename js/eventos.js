// Alternar entre modo claro y modo oscuro

document.getElementById("button").addEventListener("click", function () {
  document.body.style.backgroundColor = "#334140";
  document.body.style.color = "papayawhip";
  document.getElementById("footerBg").style.backgroundColor = "#667363";
  document.getElementById("button").innerText = "Modo claro";

  document.getElementById("button").addEventListener("click", function () {
    location.reload();//Recarga la pagina. 
  })
});


// Codigo para cambiar de nombre al titulo de la pagina cuando el usuario cambia a otra pagina.
let tituloPrevio = document.title

window.addEventListener("blur", function(){
    tituloPrevio = document.title
    document.title = "No te vayas, contratame!";
})

window.addEventListener("focus", function(){
 document.title = tituloPrevio;
})
