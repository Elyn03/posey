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
      
      if (pose.leftWrist.x < 450){
         body.style.backgroundColor = "red";
      } else {
         body.style.backgroundColor = "#F1AA9D";
      }   
   }
}

function modelLoaded() {
   console.log("worked");
}
function draw() {
   image(video, 0, 0);

   if (pose) {
      fill(255, 0, 0);
      ellipse(pose.nose.x, pose.nose.y, 64);

      fill(23, 30, 20);
      ellipse(pose.leftWrist.x, pose.leftWrist.y, 64);
      ellipse(pose.rightWrist.x, pose.rightWrist.y, 64);
   }
   
   
}