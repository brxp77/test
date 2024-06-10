// script.js
function registraClique(acao) {
    // Adiciona a ação ao localStorage
    let acoes = JSON.parse(localStorage.getItem('acoes')) || [];
    acoes.push(acao);
    localStorage.setItem('acoes', JSON.stringify(acoes));

    // Exibe as ações registradas na console ou em outra página
    console.log("Ações registradas:", acoes);
}