let listaAmigos = [];
let listaElementos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert ('Por favor, insira um nome!');
        return
    } else {
        listaAmigos.push(nome);
        console.log(listaAmigos);  
    } 
    limparCampo();
    atualizarLista();
}
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    listaElementos.innerHTML = ''
    
    listaAmigos.forEach(nome => {
        let itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaElementos.appendChild(itemLista)
    })
}