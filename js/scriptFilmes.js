function exibierPeronagem(film, i) {
    const div = document.querySelector('#personagens');

    let nome = film.title;

    let button = document.createElement('button');
    let h3 = document.createElement('h3');
    h3.innerHTML = `${nome}`;

    let img = document.createElement('img');
    let cd = '../img/films/'+i+'.jpeg';
    let descricaoAlt = 'Imagem do Personagem '+ nome;       //texto do alt da imagem

    img.src = cd;
    img.alt = descricaoAlt;
    
    //console.log(nome);
    
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

        const dadosPersonagem = film;
        localStorage.setItem('dadosPersonagemClicado', JSON.stringify(dadosPersonagem));
        localStorage.setItem('imgPersonagemClicado', i);

        const personagemClicadoSalvo = JSON.parse(localStorage.getItem('dadosPersonagemClicado'));
        console.log(personagemClicadoSalvo);

    });

    
}

async function carregarPersonagens() {

        let c = 1;          //Contador para a imagem do personagem
        for (let i = 1; i <= 6; i++) {
            
            let url = 'https://swapi.dev/api/films/?page=' + i;         //i vai mudar a pagina
            resposta = await fetch(url);

            if (resposta.ok) {
                let json = await resposta.json();
                console.log(json);
                for (let b = 0; b < 10; b++) {
                    
                    exibierPeronagem(json.results[b], c);       
                    c++;
                    
                }
            }

            
        }

        
    
}

function mostrarPersonagem() {
    console.log('testee');
}



window.onload = carregarPersonagens;






