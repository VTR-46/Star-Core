

function mostrarPersonagemPagina() {

    const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
    const imgSalva = localStorage.getItem('imgPersonagemClicado');
    console.log(personagemClicadoSalvo);

    document.title = personagemClicadoSalvo.name;

    //const section = document.querySelector('.personagem-total');

    const headerEsquerda = document.querySelector('.h-esquerda');
    const headerDireita = document.querySelector('.h-direita');

    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.name;

    const imagem = document.createElement('img');
    imagem.src = `../img/people/${imgSalva}.jpeg`

    const genero = document.createElement('p');
    genero.innerHTML = personagemClicadoSalvo.gender;



    headerEsquerda.appendChild(nomePagina);
    headerEsquerda.appendChild(genero);
    headerDireita.appendChild(imagem);
    
}




window.onload = mostrarPersonagemPagina;