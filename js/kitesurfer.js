class Kitesurfer{
    //The Player
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 200
        this.verticalPosition = 60;
        this.isJumping = false;
        this.jumpStrength = 175; 

        this.element = document.createElement("img");
        this.element.src = './images/kite_girl.png';
        this.element.style.position = 'absolute';
        this.element.style.left = '40px';
        this.element.style.width = this.width + "px";
        this.updateVerticalPosition();

        this.gameScreen.appendChild(this.element);
    };


    jump(){
        if (this.isJumping) return;
        this.isJumping = true;
        let jumpCounter = 0;
        let jumpInterval = setInterval(() => {
            if(jumpCounter < 15){
                this.verticalPosition += this.jumpStrength/10;
            } else if (jumpCounter < 30) {
                this.verticalPosition -= this.jumpStrength/10;
            } else {
                clearInterval(jumpInterval);
                this.isJumping = false;
            }

            this.updateVerticalPosition();
            jumpCounter++;
        }, 50);
    };

    updateVerticalPosition(){
        this.element.style.bottom = this.verticalPosition + 'px';
    }

    // Collision Sound
    playCollisionSound(){
        let collisionSound = new Audio (`https://audio.code.org/losepoint2.mp3`);
        collisionSound.play();
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            this.playCollisionSound(); // Playing collision sound
            console.log("Colliding");
            return true;
        } else {
            return false;
        }
    }
};