document.addEventListener('DOMContentLoaded', function () {
    const itemFoto = document.querySelector('#foto-perfil');
    const itemNome = document.querySelector('#nome');
    const itemUsusario = document.querySelector('#usuario');
    const itemRepositorios = document.querySelector('#repositorios');
    const itemSeguidores = document.querySelector('#seguidores');
    const itemSeguindo = document.querySelector('#seguindo');
    const itemLink = document.querySelector('#link');

    fetch('https://api.github.com/users/LuisDMatos')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        itemFoto.src = json.avatar_url;
        itemNome.innerText = json.name;
        itemUsusario.innerText = json.login;
        itemRepositorios.innerText = json.public_repos;
        itemSeguidores.innerText = json.following;
        itemSeguindo.innerText = json.followers;
        itemLink.href = json.html_url;
    })
})