
function exibierPeronagem(personagem, id) {
    const div = document.querySelector('#busca-resultados');
    //console.log('foi');
    let nome = personagem.name;

    let button = document.createElement('button');
    let h3 = document.createElement('h3');
    h3.innerHTML = `${nome}`;



    button.appendChild(h3)


    div.appendChild(button);

    button.addEventListener("click", function (e) {
        console.log('teste');

        const dadosPersonagem = personagem;
        localStorage.setItem('dadosPersonagemClicado', JSON.stringify(dadosPersonagem));
        localStorage.setItem('imgPersonagemClicado', i);

        const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
        console.log(personagemClicadoSalvo);

    });


}

async function getPersonagem() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/people/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/people/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'people');
            }

            ca++;
            console.log(ca);
        }


    }
}

async function getStarShip() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/starships/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/starships/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'starship');
            }

            ca++;
            console.log(ca);
        }


    }
}


const btpesquisa = document.querySelector('.bt-buscar');

btpesquisa.addEventListener("click", getPersonagem);
btpesquisa.addEventListener("click", getStarShip);