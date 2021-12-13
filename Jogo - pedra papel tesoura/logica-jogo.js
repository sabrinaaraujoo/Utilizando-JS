var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = ""

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papel"){
        if(enemyOpt == "papel"){
            //Empate
            vencedor.innerHTML = "Jogo Empatado!"
        }else if(enemyOpt == "tesoura"){
            // Inimigo ganhou
            vencedor.innerHTML = "Você perdeu!"
        }else if(enemyOpt == "pedra"){
            // player ganhou
            vencedor.innerHTML = "Você Ganhou!"
        }
    }

    if(playerOpt == "pedra"){
        if(enemyOpt == "pedra"){
            //Empate
            vencedor.innerHTML = "Jogo Empatado!"
        }else if(enemyOpt == "papel"){
            // Inimigo ganhou
            vencedor.innerHTML = "Você perdeu!"
        }else if(enemyOpt == "tesoura"){
            // player ganhou
            vencedor.innerHTML = "Você Ganhou!"
        }
    }

    if(playerOpt == "tesoura"){
        if(enemyOpt == "papel"){
            vencedor.innerHTML = "Você Ganhou!"
        }else if(enemyOpt == "tesoura"){
            vencedor.innerHTML = "Jogo Empatado!"
        }else if(enemyOpt == "pedra"){
            vencedor.innerHTML = "Você perdeu!"
        }
    }

}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].style.opacity = 0.3;
    }
}

function enemyPlayer(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    resetEnemy();

    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].style.opacity = 1;
            enemyOpt = enemyOptions[i].getAttribute('opt');
        }
    }
    validarVitoria();
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        enemyPlayer()

        // alert(playerOpt)
    })
}