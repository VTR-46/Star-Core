function exibierPeronagem(personagem) {
    const div = document.querySelector('#personagens');

    let nome = personagem.name;

    let h3 = document.createElement('h3')
    h3.innerHTML = `${nome}`;

    div.appendChild(h3);
    
}

async function carregarPersonagens() {


        for (let i = 1; i <= 9; i++) {
            
            let url = 'https://swapi.dev/api/people/?page='+ i;
            resposta = await fetch(url);

            if (resposta.ok) {
                let json = await resposta.json();
                console.log(json);
                for (let b = 0; b < 10; b++) {
                    exibierPeronagem(json.results[b]);
                
                }
            }

            
        }

        
    
}

window.onload = carregarPersonagens;



