let nomeDosAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert ('Por favor, insira um nome!')
    } else {
        nomeDosAmigos.push(nome);
    console.log(nomeDosAmigos)}

    limparCampo()
}
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}