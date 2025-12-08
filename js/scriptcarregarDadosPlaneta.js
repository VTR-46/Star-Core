

function mostrarPersonagemPagina() {

    const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
    const imgSalva = localStorage.getItem('imgPersonagemClicado');
    console.log(personagemClicadoSalvo);

    document.title = personagemClicadoSalvo.name;

    //const section = document.querySelector('.personagem-total');

    const headerEsquerda = document.querySelector('.h-esquerda');
    const headerDireita = document.querySelector('.h-direita');


    const nomeTI = document.querySelector('#nome-titular');
    const climaI = document.querySelector('#clima');
    const diametroI = document.querySelector('#diametro');
    const terrenoI = document.querySelector('#terreno');
    const gravidadeI = document.querySelector('#gravidade')
    const periodoI = document.querySelector('#periodo');
    const populacaoI = document.querySelector('#populacao');



    const filmesI = document.querySelector('#filmes');


    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.name;
    nomeTI.appendChild(nomePagina);

    const imagem = document.createElement('img');
    imagem.src = `../img/planets/${imgSalva}.jpeg`
    headerDireita.appendChild(imagem);

    
    const clima = document.createElement('p');
    clima.innerHTML = personagemClicadoSalvo.climate;
    climaI.appendChild(clima);
    
    const terreno = document.createElement('p');
    terreno.innerHTML = personagemClicadoSalvo.terrain;
    terrenoI.appendChild(terreno);

    const gravidade = document.createElement('p');
    gravidade.innerHTML = personagemClicadoSalvo.gravity;
    gravidadeI.appendChild(gravidade);


    const diametro = document.createElement('p');
    diametro.innerHTML = personagemClicadoSalvo.diameter;
    diametroI.appendChild(diametro);


    const periodo = document.createElement('p');
    periodo.innerHTML = personagemClicadoSalvo.orbital_period;
    periodoI.appendChild(periodo);

    const populacao = document.createElement('p');
    populacao.innerHTML = personagemClicadoSalvo.population;
    populacaoI.appendChild(populacao);






    //dados
    const filmesTxt = document.createElement('h3');
    //filmesTxt.innerHTML = '';
    const filmes = document.createElement('img')
    filmes.innerHTML = personagemClicadoSalvo.films;
    filmesI.appendChild(filmesTxt);
    filmesI.appendChild(filmes);
    console.log(personagemClicadoSalvo.films[1]);

    

    for (let i = 0; i <= personagemClicadoSalvo.films.length; i++) {
        const filmeImg = document.createElement('img');            
        
        if (i == 1) {
            filmeImg.src = '../img/films/1.jpeg'    
        }
        if (i == 2) {
            filmeImg.src = '../img/films/2.jpeg'        
        }
        if (i == 3) {
            filmeImg.src = '../img/films/3.jpeg'        
        }
        if (i == 4) {
            filmeImg.src = '../img/films/4.jpeg'        
        }
        if (i == 5) {
            filmeImg.src = '../img/films/5.jpeg'        
        }
        if (i == 6) {
            filmeImg.src = '../img/films/6.jpeg'        
        }
        
        filmesI.appendChild(filmeImg);



    }





    
}




window.onload = mostrarPersonagemPagina;