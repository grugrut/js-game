var canvas = document.getElementById("canvas");

function init() {
    canvas.width = 800;
    canvas.height = 600;
    game = new Game(canvas);
    var fps = new FPS(game);
    game.addObject("fps", fps);
    var ball = new Ball(game);
    game.addObject("ball", ball);
    game.update();
}

window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

init();
