const buscarBtn = document.getElementById('bnt-ir');
const endereco = document.getElementById('bnt-pesquisar');


function abrirMapa(endereco) {
    // para converter os caracteres digitados, afim de que sejam interpretados corretamente
    const url = `https://www.google.com/maps?q=${encodeURIComponent(endereco)}`;
    window.open(url, '_blank');
}

function buscarEndereco() {
    abrirMapa(endereco.value);
 }
 
 // evento ao botão;
 // Aqui, eu poderia colocar esse evento no inicio. 
 document.addEventListener('DOMContentLoaded', function() {
     buscarBtn.addEventListener('click', function() {
         buscarEndereco();
     });
 });