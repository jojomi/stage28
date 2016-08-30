$(function() {

    // http://stackoverflow.com/a/21597544
    var canvas = document.getElementById("drawCanvas");
    var relative = $('.container .image');
    canvas.width = relative.width();
    canvas.height = relative.height();

    $(document).on('keydown', null, 'up', highlightUp);
    $(document).on('keydown', null, 'down', highlightDown);
    $(document).on('keydown', null, 'left', highlightUp);
    $(document).on('keydown', null, 'right', highlightDown);
    $(document).on('keydown', null, 'pageup', highlightUp);
    $(document).on('keydown', null, 'pagedown', highlightDown);

    $('#drawCanvas').dblclick(function(e) {
        clear();
        next(1);
    });


    $('#drawCanvas').click(function(e) {
        if (!e.ctrlKey) {
            return;
        }
        var xPos = e.pageX - $('#drawCanvas').offset().left;
        var yPos = e.pageY - $('#drawCanvas').offset().top;
        circle(xPos, yPos);
    });
});


var imageIndex = 1;
var imageCount = 7;


function next(inc) {
    var newIndex = (imageIndex - 1 + imageCount + inc) % imageCount + 1;
    show(newIndex);
}

function highlightUp() {
    next(-1);
}

function highlightDown() {
    next(1);
}

function show(index) {
    $('.container .image').finish().fadeOut(50).css('background-image', 'url(img/' + index + '.png').fadeIn(50);
    imageIndex = index;
}



function clear() {
    var canvas = document.getElementById('drawCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(x, y) {
    var canvas = document.getElementById('drawCanvas');
    var context = canvas.getContext('2d');
    var centerX = x;
    var centerY = y;
    var radius = 25;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'transparent';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.stroke();
    console.debug(centerX);
    console.debug(centerY);
}