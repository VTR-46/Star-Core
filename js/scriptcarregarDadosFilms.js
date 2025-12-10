

function mostrarPersonagemPagina() {

    const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
    const imgSalva = localStorage.getItem('imgPersonagemClicado');
    console.log(personagemClicadoSalvo);

    document.title = personagemClicadoSalvo.title;

    //const section = document.querySelector('.personagem-total');

    const headerEsquerda = document.querySelector('.h-esquerda');
    const headerDireita = document.querySelector('.h-direita');


    const nomeTI = document.querySelector('#nome-titular');
    const epI = document.querySelector('#ep');
    const sinopseI = document.querySelector('#sinopse');
    const diretorI = document.querySelector('#diretor')
    const produtorI = document.querySelector('#produtor');
    const dataLI = document.querySelector('#data');
    const plantaI = document.querySelector('#planta-starship');

    const filmesI = document.querySelector('#filmes');


    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.title;
    nomeTI.appendChild(nomePagina);

    const imagem = document.createElement('img');
    imagem.src = `../img/films/${imgSalva}.jpeg`
    headerDireita.appendChild(imagem);


    const epID = document.createElement('p');
    epID.innerHTML = personagemClicadoSalvo.episode_id;
    epI.appendChild(epID);

    const sinopse = document.createElement('p');
    sinopse.innerHTML = personagemClicadoSalvo.opening_crawl;
    sinopseI.appendChild(sinopse);

    const diretor = document.createElement('p');
    diretor.innerHTML = personagemClicadoSalvo.director;
    diretorI.appendChild(diretor);


    const produtor = document.createElement('p');
    produtor.innerHTML = personagemClicadoSalvo.producer;
    produtorI.appendChild(produtor);


    const dataL = document.createElement('p');
    dataL.innerHTML = personagemClicadoSalvo.release_date;
    dataLI.appendChild(dataL);

    const plantImg = document.createElement('img');
    plantImg.src = `../img/films/blueprint/${imgSalva}.jpeg`;
    plantaI.appendChild(plantImg);



    for (let i = 0; i < personagemClicadoSalvo.films.length; i++) {
        const filmeImg = document.createElement('img');
        const mat = /\d+/;
        const imgID = personagemClicadoSalvo.films[i].match(mat);
        filmeImg.src = '../img/films/' + imgID + '.jpeg';
        filmesI.appendChild(filmeImg);
    }






}




window.onload = mostrarPersonagemPagina;