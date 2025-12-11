function exibierPeronagem(starship, i) {
    const div = document.querySelector('#personagens');

    let nome = starship.name;

    let button = document.createElement('button');
    let h3 = document.createElement('h3');
    h3.innerHTML = `${nome}`;

    let img = document.createElement('img');
    let cd = '../img/planets/' + i + '.jpeg';
    let descricaoAlt = 'Imagem do Personagem ' + nome;       //texto do alt da imagem

    img.src = cd;
    img.alt = descricaoAlt;

    console.log(nome);

    button.appendChild(h3)
    button.appendChild(img);

    div.appendChild(button);

    button.addEventListener("click", function (e) {
        //console.log('teste');
        //let n = i;
        // console.log(n);
        // console.log(personagem);
        // console.log(personagem.gender);

        // let nm = personagem.name;

        const dadosPersonagem = starship;
        localStorage.setItem('dadosPersonagemClicado', JSON.stringify(dadosPersonagem));
        localStorage.setItem('imgPersonagemClicado', i);

        const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
        console.log(personagemClicadoSalvo);

    });


}

async function carregarPersonagens() {
    let c = 1;

    for (let i = 1; i <= 6; i++) {
        let nomeChave = 'planetas_pag_' + i;


        let listaDePlanetas;

        // 1. VERIFICA: Já tenho essa página salva
        if (localStorage.getItem(nomeChave)) {
            
            listaDePlanetas = JSON.parse(localStorage.getItem(nomeChave));
        }
        else {
            // 2. SE NÃO TEM: Busca na Internet
            
            let url = 'https://swapi.dev/api/planets/?page=' + i;
            let resposta = await fetch(url);

            if (resposta.ok) {
                let json = await resposta.json();
                listaDePlanetas = json.results; // Pega só a lista de planetas

                // Salva agora para usar na próxima vez
                localStorage.setItem(nomeChave, JSON.stringify(listaDePlanetas));
            }
        }

        // 3. EXIBE (Essa parte roda independente de onde veio os dados)
        if (listaDePlanetas) {
            for (let b = 0; b < listaDePlanetas.length; b++) {
                exibierPeronagem(listaDePlanetas[b], c);
                c++;
            }
        }
    }
}

function mostrarPersonagem() {
    console.log('testee');
}



window.onload = carregarPersonagens;






