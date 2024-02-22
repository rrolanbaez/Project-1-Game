class Obstacle {
    //The obstacles to jump over
    constructor (gameScreen){
        this.imgArr = ["sharkobstacle.png", "boyobstacle.png", "fishobstacle.png", "boyfloatobstacle_360.png", "dolphinobstacle.png", "fishobstacle2.png", "fishobstacle3.png"];
        this.gameScreen = gameScreen;
        this.speed = 5; 
        this.positionX = gameScreen.offsetWidth;
        this.top = gameScreen.offsetHeight;

        // Definding the size of each obstacle
        this.sizes = {
            "sharkobstacle.png": {width: 80, height: 90},
            "boyobstacle.png": { width: 100, height: 100},
            "fishobstacle.png": { width: 70, height: 70},
            "boyfloatobstacle_360.png": { width: 70, height: 70},
            "dolphinobstacle.png": { width: 80, height: 90},
            "fishobstacle2.png": { width: 70, height: 70},
            "fishobstacle3.png": { width: 70, height: 70},
        };

        // To select random image
        let randomImg = this.imgArr[Math.floor(Math.random() * this.imgArr.length)];
        this.width = this.sizes[randomImg].width;
        this.height = this.sizes[randomImg].height;

        this.element = document.createElement("img");
        this.element.src = `images/${randomImg}`;
        this.element.style.position = "absolute";
        this.element.style.top = (this.top - this.height - 50) + "px";  
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.updatePosition();

        this.gameScreen.appendChild(this.element);
    };

    move() {
        this.positionX -= this.speed;
        this.updatePosition();
    };

    updatePosition () {
        this.element.style.left = `${this.positionX}px`;

    };

};