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

function touchstart(e) {
    console.log(e);
    mousePress = true;
    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY;
};

function touchmove(e) {
    console.log(e);
    e.preventDefault();
    mouseX = e.changedTouches[0].pageX;
    mouseY = e.changedTouches[0].pageY;
};

function touchend(e) {
    console.log(e);
    mousePress = false;
}

document.addEventListener('mousedown', mousedown);
document.addEventListener('mousemove', mousemove);
document.addEventListener('mouseup', mouseup);
document.addEventListener('touchstart', touchstart);
document.addEventListener('touchmove', touchmove);
document.addEventListener('touchend', touchend);

init();
