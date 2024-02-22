window.onload = function (){

    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game; 

    startButton.addEventListener("click", function () {
      startGame();
    });

     // For jump sound
    function playJumpSound () {
        let jumpSound  = new Audio (`https://audio.code.org/goal1.mp3`);
        jumpSound.play();

    };

    document.addEventListener("keydown", (e) => {
        console.log("hi there");
        if(e.key === " " || e.key=== "ArrowUp") 
            if(game) game.kitesurfer.jump(playJumpSound()); 
    });

    function startGame() {
        game = new Game ();
        game.start();
    };

    restartButton.addEventListener("click", function(){
        startGame();
    });
};
    
    