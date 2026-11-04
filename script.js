function abrirPainel() {
    let painel = document.getElementById('painel-admin');
    if (painel.style.display === 'block') {
        painel.style.display = 'none';
    } else {
        painel.style.display = 'block';
    }
}

function ativarPromo() {
    document.getElementById('selo-promo').style.display = 'block';
    let precoNormal = document.querySelectorAll('.preco-normal');
    let precoPromo = document.querySelectorAll('.preco-promo');
    let tagOff = document.querySelectorAll('.tag-off');
    precoNormal.forEach(el => el.style.display = 'none');
    precoPromo.forEach(el => el.style.display = 'block');
    tagOff.forEach(el => el.style.display = 'inline-block');
    localStorage.setItem('blackFridayAtiva', 'sim');
    alert("🔥 Modo Black Friday ATIVADO!");
}

function desativarPromo() {
    document.getElementById('selo-promo').style.display = 'none';
    let precoNormal = document.querySelectorAll('.preco-normal');
    let precoPromo = document.querySelectorAll('.preco-promo');
    let tagOff = document.querySelectorAll('.tag-off');
    precoNormal.forEach(el => el.style.display = 'block');
    precoPromo.forEach(el => el.style.display = 'none');
    tagOff.forEach(el => el.style.display = 'none');
    localStorage.setItem('blackFridayAtiva', 'nao');
    alert("Modo Promoção DESATIVADO.");
}

window.onload = function() {
    if (localStorage.getItem('blackFridayAtiva') === 'sim') {
        ativarPromo();
    }
}
