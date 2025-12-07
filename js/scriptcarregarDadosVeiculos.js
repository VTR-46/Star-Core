

function mostrarPersonagemPagina() {

    const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
    const imgSalva = localStorage.getItem('imgPersonagemClicado');
    console.log(personagemClicadoSalvo);

    document.title = personagemClicadoSalvo.name;

    //const section = document.querySelector('.personagem-total');

    const headerEsquerda = document.querySelector('.h-esquerda');
    const headerDireita = document.querySelector('.h-direita');


    const nomeTI = document.querySelector('#nome-titular');
    const comprimentoI = document.querySelector('#comprimento');
    const custoI = document.querySelector('#custo');
    const fabricanteI = document.querySelector('#fabricante');
    const modeloI = document.querySelector('#modelo')
    const tripulacaoI = document.querySelector('#tripulacao');
    const passageirosI = document.querySelector('#passageiros');
    const plantaI = document.querySelector('#planta-starship');

    const filmesI = document.querySelector('#filmes');


    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.name;
    nomeTI.appendChild(nomePagina);

    const imagem = document.createElement('img');
    imagem.src = `../img/vehicles/${imgSalva}.jpeg`
    headerDireita.appendChild(imagem);

    
    const custo = document.createElement('p');
    custo.innerHTML = personagemClicadoSalvo.cost_in_credits;
    custoI.appendChild(custo);
    
    const fabricante = document.createElement('p');
    fabricante.innerHTML = personagemClicadoSalvo.manufacturer;
    fabricanteI.appendChild(fabricante);

    const modelo = document.createElement('p');
    modelo.innerHTML = personagemClicadoSalvo.model;
    modeloI.appendChild(modelo);


    const comprimento = document.createElement('p');
    comprimento.innerHTML = personagemClicadoSalvo.length;
    comprimentoI.appendChild(comprimento);


    const tripulacao = document.createElement('p');
    tripulacao.innerHTML = personagemClicadoSalvo.crew;
    tripulacaoI.appendChild(tripulacao);

    const passageiros = document.createElement('p');
    passageiros.innerHTML = personagemClicadoSalvo.passengers;
    passageirosI.appendChild(passageiros);

    const plantImg = document.createElement('img');
    plantImg.src = `../img/vehicles/blueprint/${imgSalva}.jpeg`;
    plantaI.appendChild(plantImg);




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