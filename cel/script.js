let video;
let poseNet;
let pose;

let body = document.body;


function setup() {
   createCanvas(640, 480);
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
   console.log(poses);
   if (poses.length > 0) {
      pose = poses[0].pose;
      console.log("right")
      console.log("leftWrist : ", pose.leftWrist.x, ",", pose.leftWrist.y, "| rightWrist : ", pose.rightWrist.x, ",", pose.rightWrist.y);
      
      if (pose.leftWrist.x > 300 && pose.leftWrist.y < 300 && pose.rightWrist.x < 300 && pose.rightWrist.y > 300){
         body.style.backgroundColor = "#97c78a";
      } else {
         body.style.backgroundColor = "#c78a8a";
      }   
   }
}

function modelLoaded() {
   console.log("worked");
}
function draw() {
   image(video, 0, 0);

   if (pose) {
      fill(23, 30, 20);
      ellipse(pose.leftWrist.x, pose.leftWrist.y, 32);
   }
   
   
}