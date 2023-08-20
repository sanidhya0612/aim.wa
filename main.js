var songa = "";
var songb = "";

function preload()
{
    songa = loadSound("Harry-Potter-Theme.mp3");
    songb = loadSound("Kate_Bush_-_Running_Up_That_Hill.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500,);
}

function play()
{
    songa.play();
    songb.play();
}