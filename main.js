leftEyex=0;
rightEyex=0;
leftEyey=0;
rightEyey=0;
function preload() {
 sasuke_eyes=loadImage('https://i.postimg.cc/cHCNwgNT/3711675-removebg-preview-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  console.log("left eye = "+results[0].pose.leftEye.x);
  console.log("right eye = "+results[0].pose.rightEye.x);
    rightEyex=results[0].pose.rightEye.x - 55;
    rightEyey=results[0].pose.rightEye.y - 55;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(sasuke_eyes, rightEyex,rightEyey,200,100);
}

function t_s(){
    save("sasuke eyes.png");
}