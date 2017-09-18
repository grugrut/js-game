function Game(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.prevTime = Date.now();
    this.play = true;
    this.objects = [];

    this.update = function(time) {
        if (!this.play) {
            return;
        }

        this.timeDelta = time - this.prevTime;
        this.prevTime = time;
        if (isNaN(this.timeDelta)) {
            requestAnimationFrame(this.update.bind(this));
            return;
        }
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].update(this.timeDelta);
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        requestAnimationFrame(this.update.bind(this));
    };

    this.draw = function() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].draw(this.ctx);
        }
    };

    this.addObject = function(name, o) {
        this.objects[name] = o;
        this.objects.push(o);
    };
}
