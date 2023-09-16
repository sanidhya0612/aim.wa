var songa = "";
var songb = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


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

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized!!")

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " +leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " +rightWristX + " rightWristY = " + rightWristY);
    }
}


function draw()
{
    image(video, 0, 0, 600, 500,);
    
    fill("orange");
    stroke("orangered");

    if(scoreLeftWrist >0.2)
    {
        circle(leftWristX,leftWristY,20); 
        songb.stop();
    
        if(songa == false)
        {
            document.getElementById("song_name").innerHTML = "Song is "+ songa;
            song.rate(0.5);
            songa.play();
        }
        else
        {
            songa.stop();
        }
    }
//end//
    if(scoreRightWrist >0.2)
    {
        circle(leftWristX,leftWristY,20); 
        songa.stop();
    
        if(songb == false)
        {
            document.getElementById("song_name").innerHTML = "Song is "+ songb;
            song.rate(0.5);
            songb.play();
        }
        else
        {
            songb.stop();
        }
    }
    }