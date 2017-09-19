function Player(game) {
    this.game = game;
    this.drawing = false;
    this.startX = this.startY = 0;
    this.nowX = this.nowY = 0;
    this.update = function(timeDelta) {
        if (this.drawing) {
            if (mousePress) {
                this.nowX = mouseX;
                this.nowY = mouseY;
            } else {
                this.drawing = false;
            }
        } else {
            if (mousePress) {
                this.drawing = true;
                this.nowX = this.startX = mouseX;
                this.nowY = this.startY = mouseY;
            }
        }
    };

    this.draw = function(ctx) {
        if (this.drawing) {
            ctx.strokeStyle = "#FFF";
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.nowX, this.nowY);
            ctx.stroke();
        }
    };
}
