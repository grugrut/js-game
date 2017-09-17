function Game(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.prevTime = Date.now();
    this.play = true;

    this.update = function(time) {
        if (!this.play) {
            return;
        }

        this.timeDelta = time - this.prevTime;
        this.prevTime = time;
        if (isNan(this.timeDelta)) {
            requestAnimationFrame(this.update.bind(this));
            return;
        }
    };
}
