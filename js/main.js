var canvas = document.getElementById("canvas");
mouseX = 0;
mouseY = 0;
mousePress = false;

function init() {
    canvas.width = 800;
    canvas.height = 600;
    game = new Game(canvas);
    var fps = new FPS(game);
    game.addObject("fps", fps);
    var ball = new Ball(game);
    game.addObject("ball", ball);
    var player = new Player(game);
    game.addObject("player", player);
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


function mousedown(e) {
    mousePress = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
};

function mousemove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
};

function mouseup(e) {
    mousePress = false;
};

document.addEventListener('mousedown', mousedown);
document.addEventListener('mousemove', mousemove);
document.addEventListener('mouseup', mouseup);

init();
