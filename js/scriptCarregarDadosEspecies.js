

function mostrarPersonagemPagina() {

    const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
    const imgSalva = localStorage.getItem('imgPersonagemClicado');
    console.log(personagemClicadoSalvo);

    document.title = personagemClicadoSalvo.name;

    //const section = document.querySelector('.personagem-total');

    const headerEsquerda = document.querySelector('.h-esquerda');
    const headerDireita = document.querySelector('.h-direita');

    const planetaNa = document.querySelector('#planetaNatal');
    const nomeTI = document.querySelector('#nome-titular');
    const classificacaoI = document.querySelector('#classificacao');
    const pesoI = document.querySelector('#peso');
    const vidaI = document.querySelector('#vida');

    const alturamediaI = document.querySelector('#alturamedia');
    const linguaI = document.querySelector('#lingua');

    const filmesI = document.querySelector('#filmes');


    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.name;
    nomeTI.appendChild(nomePagina);

    const imagem = document.createElement('img');
    imagem.src = `../img/species/${imgSalva}.jpeg`
    headerDireita.appendChild(imagem);

    const altm = document.createElement('p');
    altm.innerHTML = personagemClicadoSalvo.average_height;
    alturamediaI.appendChild(altm);

    const classificacao = document.createElement('p');
    classificacao.innerHTML = personagemClicadoSalvo.classification;
    classificacaoI.appendChild(classificacao);
    //console.log("g" + personagemClicadoSalvo.gender);

    const vida = document.createElement('p');
    vida.innerHTML = personagemClicadoSalvo.average_lifespan;
    vidaI.appendChild(vida);


    const lingua = document.createElement('p');
    lingua.innerHTML = personagemClicadoSalvo.language;
    linguaI.appendChild(lingua);


    for (let i = 0; i < personagemClicadoSalvo.films.length; i++) {
        const filmeImg = document.createElement('img');
        const mat = /\d+/;
        const imgID = personagemClicadoSalvo.films[i].match(mat);
        filmeImg.src = '../img/films/' + imgID + '.jpeg';
        filmesI.appendChild(filmeImg);
    }


}




window.onload = mostrarPersonagemPagina;