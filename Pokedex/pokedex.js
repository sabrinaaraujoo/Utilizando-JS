var quantidade = document.getElementById('quantidade');
var botao = document.getElementById('botao');
botao.addEventListener('click',()=>{
    pegaPokemons(quantidade.value)
})

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                // console.log(pokemonSingle)
                pokemons.push({
                    nome:val.name,
                    imagem:pokemonSingle.sprites.front_default
                });

                if(pokemons.length == quantidade){
                    //Finalizamos nossas requisições.

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";

                    //console.log(pokemons);
                    pokemons.map((val)=>{
                        pokemonBoxes.innerHTML+= `
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`">
                                <p>`+val.nome+`</p>
                            </div>
                        `;

                    })
                }

            })
        })

    })
}
