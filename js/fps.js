function FPS(game) {
    this.game = game;
    this.timeDelta = 0;
    this.update = function(timeDelta) {
        this.timeDelta = timeDelta;
    };
    this.draw = function(ctx){
        ctx.fillStyle="#FFF";
        ctx.font = "20px sans-serif";
        ctx.fillText("fps: " + this.timeDelta, 10, 24);
    };
}
