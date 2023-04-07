function verificar(){
    nomePessoa = document.getElementById('name').value;
    convidados = ['Alexia', 'Fabiano', 'Simone', 'Pamela', 'Gessica']
    if(convidados.includes(nomePessoa)){
        document.getElementById('Permission').innerText = 'You are wished!'
    } else {
        document.getElementById('Permission').innerText = 'You are not wished'
    }
}