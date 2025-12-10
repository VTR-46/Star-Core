

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


    for (let i = 0; i < personagemClicadoSalvo.films.length; i++) {
        const filmeImg = document.createElement('img');
        const mat = /\d+/;
        const imgID = personagemClicadoSalvo.films[i].match(mat);
        filmeImg.src = '../img/films/' + imgID + '.jpeg';
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
    if (imgSalva == 4) {

        txt.innerHTML = 'Darth Vader já foi o heroico Cavaleiro Jedi Anakin Skywalker, um indivíduo com aptidão natural para a Força e potencial ilimitado. Ele foi treinado por Obi-Wan Kenobi, mas acabou sendo seduzido pelo lado sombrio da Força, tornando-se um Lorde Sith a serviço do Imperador Palpatine.';
        const arma1 = document.createElement('img');
        const arma1T = document.createElement('p');
        const h2T = document.createElement('h2');

        h2T.innerHTML = 'ARMAS'
        arma1T.innerHTML = 'Darth Vader red lightsaber'

        textoI.appendChild(txt);

        armaI.appendChild(h2T);
        arma1.src = '../img/weapons/VaderSabre.jpeg'

        armaI.appendChild(arma1T);
        armaI.appendChild(arma1);

    } if (imgSalva == 10) {
        txt.innerHTML = 'Obi-Wan Kenobi é um lendário Mestre Jedi da saga Star Wars, conhecido por ser um sábio mentor que treinou Anakin Skywalker (que se tornou Darth Vader) e, posteriormente, Luke Skywalker, guiando-os nos caminhos da Força e sendo fundamental na luta contra o Império. ';
        const arma1 = document.createElement('img');
        const arma1T = document.createElement('p');
        const h2T = document.createElement('h2');

        h2T.innerHTML = 'ARMAS'
        arma1T.innerHTML = 'Obi-Wan blue lightsaber'

        textoI.appendChild(txt);

        armaI.appendChild(h2T);
        arma1.src = '../img/weapons/obiSabre.jpeg'

        armaI.appendChild(arma1T);
        armaI.appendChild(arma1);
    }

    if (imgSalva == 11) {
        txt.innerHTML = 'Anakin Skywalker é um dos personagens mais icônicos de Star Wars, um humano sensível à Força, nascido escravo em Tatooine, que se tornou um poderoso Cavaleiro Jedi, foi considerado o "Escolhido" para trazer equilíbrio à Força, mas sucumbiu ao Lado Sombrio para se tornar o temido Lorde Sith Darth Vader, o vilão central da trilogia original, e pai de Luke Skywalker e Leia Organa, redimindo-se no fim para salvar seu filho, resultando em sua morte e retorno à Luz como um com a Força. ';
        const arma1 = document.createElement('img');
        const arma1T = document.createElement('p');
        const h2T = document.createElement('h2');

        h2T.innerHTML = 'ARMAS'
        arma1T.innerHTML = 'Anakin Skywalker"s" blue lightsaber'

        textoI.appendChild(txt);

        armaI.appendChild(h2T);
        arma1.src = '../img/weapons/ANAKINBLUE.jpeg'

        armaI.appendChild(arma1T);
        armaI.appendChild(arma1);
    }



}




window.onload = mostrarPersonagemPagina;