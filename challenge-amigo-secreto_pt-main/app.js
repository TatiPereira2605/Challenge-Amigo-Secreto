let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert ('Por favor, insira um nome!');
        return;
    }
    listaAmigos.push(nome);  
    limparCampo();
    atualizarLista();
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    let listaItens = document.getElementById('listaAmigos');
    listaItens.innerHTML = '';
    
    for (let i = 0; i < listaAmigos.length; i++){
    let item = document.createElement('li');
    item.textContent = listaAmigos[i];
    listaItens.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert('Digite pelo menos 3 nomes para sortear!');
        return null;
    } 
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é ${amigoSorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    listaAmigos = [];
    
    atualizarLista();
}