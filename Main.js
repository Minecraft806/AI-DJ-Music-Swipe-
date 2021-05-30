song="";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload() {
song=loadSound("coffinDance.mp3");
}

function setup() {
canvas=createCanvas(600,500);
canvas.center()
video=createCapture(VIDEO);
video.hide();

posenetVar=ml5.poseNet(video,modelLoaded)
posenetVar.on("pose",gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left_Wrist_X = "+leftWristX+"  Left_Wrist_Y = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right_Wrist_X = "+rightWristX+"  Right_Wrist_Y = "+rightWristY);
    }
}

function modelLoaded() {
    console.log("PoseNet Has Been Initialized");
}

function draw() {
image(video,0,0,600,500);
}

function play() {
    song.play()
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.stop()
}