
function exibierPeronagem(personagem, id) {
    const div = document.querySelector('#busca-resultados');
    //console.log('foi');

    let nome;                       //DIFERENCIAR FILMES DO RESTANTE 
    if (id == 'films') {
        nome = personagem.title;
    }else{
        nome = personagem.name;
    }
    

    let button = document.createElement('button');
    let h3 = document.createElement('h3');
    h3.innerHTML = `${nome}`;

    const url = personagem.url;
    console.log(url);

    const mat = /\d+/;
    const imgID = url.match(mat);
    console.log("img id" + imgID);
    let img = document.createElement('img');
    let cd = '../img/busca/'+id+'/'+imgID+'.jpeg';
    img.src = cd;

    button.appendChild(h3)
    button.appendChild(img);


    div.appendChild(button);

    button.addEventListener("click", function (e) {
        console.log('teste');
        console.log(personagem);

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

async function getPlaneta() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/planets/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/planets/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'planets');
            }

            ca++;
            console.log(ca);
        }
    }
}

async function getVehicles() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/vehicles/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/vehicles/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'vehicles');
            }

            ca++;
            console.log(ca);
        }
    }
}

async function getFilmes() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/films/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/films/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'films');
            }

            ca++;
            console.log(ca);
        }
    }
}

async function getSpecies() {
    const inputtxt = document.querySelector('.input-pesquisa');
    let a = inputtxt.value;
    let url = 'https://swapi.dev/api/species/?search=' + a;
    resposta = await fetch(url);

    if (resposta.ok) {
        let json = await resposta.json();

        console.log(json);

        ca = 1;
        for (let b = 0; b < json.count; b++) {

            let urlpg = 'https://swapi.dev/api/species/?search='+a+'&page='+ ca;
            respostapg = await fetch(urlpg);
            let jsonpg = await respostapg.json();

            for (let i = 0; i < json.results.length; i++) {
                console.log(jsonpg.results[i]);
                exibierPeronagem(jsonpg.results[i], 'species');
            }

            ca++;
            console.log(ca);
        }
    }
}


const btpesquisa = document.querySelector('.bt-buscar');
let btP = document.querySelector('#option1');
let btV = document.querySelector('#option2');
let btN = document.querySelector('#option3');
let btPL = document.querySelector('#option4');
let btE = document.querySelector('#option5');
let btF = document.querySelector('#option6');

btP.addEventListener("click", getPersonagem);
btV.addEventListener("click", getVehicles);
btN.addEventListener("click", getStarShip);
btPL.addEventListener("click", getPlaneta);
btE.addEventListener("click", getSpecies);
btF.addEventListener("click", getFilmes);





