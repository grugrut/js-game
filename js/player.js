function Player(game) {
    this.game = game;
    this.drawing = false;
    this.startX = this.startY = 0;
    this.x = this.y = 0;
    this.update = function(timeDelta) {
        if (this.drawing) {
            if (mousePress) {
                this.x = mouseX;
                this.y = mouseY;

                // 当たり判定
                var ball = this.game.objects['ball'];
                var ta = (this.x - this.startX) * (ball.y - this.y) + (this.y - this.startY) * (this.x - ball.x);
                var tb = (this.x - this.startX) * (ball.prevY - this.y) + (this.y - this.startY) * (this.x - ball.prevX);
                var tc = (ball.x - ball.prevX) * (this.y - ball.y) + (ball.y - ball.prevY) * (ball.x - this.x);
                var td = (ball.x - ball.prevX) * (this.startY - ball.y) + (ball.y - ball.prevY) * (ball.x - this.startX);
                if (tc * td < 0 && ta * tb < 0) {
                    // 衝突
                    this.drawing = false;
                    ball.intersect(this.x, this.y, this.startX, this.startY);
                }
            } else {
                this.drawing = false;
            }
        } else {
            if (mousePress) {
                this.drawing = true;
                this.x = this.startX = mouseX;
                this.y = this.startY = mouseY;
            }
        }
    };

    this.draw = function(ctx) {
        if (this.drawing) {
            ctx.strokeStyle = "#FFF";
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();
        }
    };
}
