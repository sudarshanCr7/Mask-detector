nose_x=0;
nose_y=0;
function preload(){
   mask = loadImage('Mask.png');

}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet started");
}
function gotPoses(results){
    if(results.length>0){
        nose_x = results[0].pose.nose.x-150;
        nose_y = results[0].pose.nose.y-100;
    }
}

function draw(){
    image(video,0,0,500,500);
image(mask,nose_x,nose_y,200,200)
    
    
}