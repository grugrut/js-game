function Ball(game) {
    this.game = game;
    this.x = 100;
    this.y = 100;
    this.angle = 0.5;
    this.speed = 5;

    this.update = function(timeDelta) {
        // X座標の移動
        this.x = this.x + this.speed * Math.cos(this.angle);
        if (this.x < 0) {
            this.x = 0;
            this.angle = Math.PI- this.angle;
        }
        if (this.x > game.canvas.width) {
            this.x = game.canvas.width;
            this.angle = Math.PI- this.angle;
        }

        // Y座標の移動
        this.y = this.y + this.speed * Math.sin(this.angle);
        if (this.y < 0) {
            this.y = 0;
            this.angle = -this.angle;
        }
        if (this.y > game.canvas.height) {
            this.y = game.canvas.height;
            this.angle = -this.angle;
        }
    };
    this.draw = function(ctx) {
        ctx.fillStyle = "FFF";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        ctx.fill();
    };
}
