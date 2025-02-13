//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos =[];

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    if(nome === ''){
        alert('Por favor, inserir um nome')
        return;
    }
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} ja esta na lista`);
        return;
    }
    amigos.push(nomeAmigo);

    inputAmigo.ariaValu = "";

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML= "";

    for(let i = 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Nao ha amigos disponioveis para sortear. insira pelomenos um');
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

} 
