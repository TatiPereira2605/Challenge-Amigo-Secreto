let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert ('Por favor, insira um nome!');
        return;
    } else {
        listaAmigos.push(nome);  
    } 
    limparCampo();
    atualizarLista();
}
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    let listaElementos = document.getElementById('listaAmigos');
    listaElementos.innerHTML = '';
    
    listaAmigos.forEach(nome => {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaElementos.appendChild(itemLista)
    })
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
        
    }