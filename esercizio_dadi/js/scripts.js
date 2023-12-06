const startRoll = document.getElementById('start-roll');


startRoll.addEventListener('click' , function() {
    const player = document.getElementById('dado-player-1');
    const cpu = document.getElementById('dado-player-2');
    let numberPlayer1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let numberPlayer2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    let winner = document.getElementById('winner');

    player.innerHTML = numberPlayer1;
    cpu.innerHTML = numberPlayer2;

    if(numberPlayer1 == numberPlayer2){
        winner.innerHTML = ('Pareggio');

        
    }else if (numberPlayer1 > numberPlayer2){
        winner.innerHTML = ('Player 1 ha vinto !');


    }else {
        winner.innerHTML = ('Player 2 ha vinto !');


    }

}
);
