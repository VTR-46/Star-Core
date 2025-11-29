

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
    const alturaI = document.querySelector('#altura');
    const pesoI = document.querySelector('#peso');
    const generoI = document.querySelector('#genero');
    const corPeleI = document.querySelector('#cor-pele');
    const nascimentoI = document.querySelector('#nascimento');
    const textoI = document.querySelector('#texto-pers');
    const armaI = document.querySelector('#img-arma');
    const filmesI = document.querySelector('#filmes');


    // section.appendChild(header);

    const nomePagina = document.createElement('h3');
    nomePagina.innerHTML = personagemClicadoSalvo.name;
    nomeTI.appendChild(nomePagina);

    const imagem = document.createElement('img');
    imagem.src = `../img/people/${imgSalva}.jpeg`
    headerDireita.appendChild(imagem);

    const nascimento = document.createElement('p');
    nascimento.innerHTML = personagemClicadoSalvo.birth_year;
    nascimentoI.appendChild(nascimento);

    const generoPE = document.createElement('p');
    generoPE.innerHTML = personagemClicadoSalvo.gender;
    generoI.appendChild(generoPE);
    //console.log("g" + personagemClicadoSalvo.gender);

    const altura = document.createElement('p');
    altura.innerHTML = personagemClicadoSalvo.height;
    alturaI.appendChild(altura);

    const peso = document.createElement('p');
    peso.innerHTML = personagemClicadoSalvo.mass;
    pesoI.appendChild(peso);

    const pele = document.createElement('p');
    pele.innerHTML = personagemClicadoSalvo.skin_color;
    corPeleI.appendChild(pele);



    //dados
    const filmesTxt = document.createElement('h3');
    filmesTxt.innerHTML = '';
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



    const txt = document.createElement('p');

    if (imgSalva == 1) {
            
        txt.innerHTML = 'Luke Skywalker é o protagonista da trilogia original de Star Wars e um dos maiores heróis da galáxia. Filho de Anakin Skywalker (Darth Vader) e Padmé Amidala, ele começa como um jovem fazendeiro em Tatooine e se torna um poderoso Jedi. Luke luta contra o Império Galáctico, enfrenta desafios pessoais e, no final, consegue salvar seu pai do Lado Sombrio da Força, ajudando a derrotar o Imperador Palpatine e restaurar a paz na galáxia.';
        const arma1 = document.createElement('img');
        const arma1T = document.createElement('p');
        const arma2 = document.createElement('img');
        const arma2T = document.createElement('p');
        const arma3 = document.createElement('img');
        const arma3T = document.createElement('p');
        const h2T = document.createElement('h2');

        h2T.innerHTML = 'ARMAS'
        arma1T.innerHTML = 'Lukes green lightsaber'
        arma2T.innerHTML = 'Anakin Skywalker"s" blue lightsaber'
        arma3T.innerHTML = 'DL-44'

        textoI.appendChild(txt);

        armaI.appendChild(h2T);
        arma1.src = '../img/weapons/LUKGREEN.jpeg'
        arma2.src = '../img/weapons/ANAKINBLUE.jpeg'
        arma3.src = '../img/weapons/DL44.jpeg';
        armaI.appendChild(arma1T);
        armaI.appendChild(arma1);

        armaI.appendChild(arma2T);
        armaI.appendChild(arma2);

        armaI.appendChild(arma3T);
        armaI.appendChild(arma3);

        


    }
    if (imgSalva == 3) {
            
        txt.innerHTML = 'Robo bala';
        }


    
}




window.onload = mostrarPersonagemPagina;