function Ball(game) {
    this.game = game;
    this.prevX = this.x = 100;
    this.prevY = this.y = 100;
    this.angle = 0.5;
    this.speed = 0.3;

    this.update = function(timeDelta) {
        this.prevX = this.x;
        this.prevY = this.y;
        // X座標の移動
        this.x = this.x + timeDelta * this.speed * Math.cos(this.angle);
        if (this.x < 0) {
            this.x = 0;
            this.angle = Math.PI- this.angle;
        }
        if (this.x > game.canvas.width) {
            this.x = game.canvas.width;
            this.angle = Math.PI- this.angle;
        }

        // Y座標の移動
        this.y = this.y + timeDelta * this.speed * Math.sin(this.angle);
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
    this.intersect = function(x1, y1, x2, y2) {
        var basearc = Math.atan2(y1-y2, x1-x2);
        this.angle = basearc * 2 - this.angle;
    };
}
