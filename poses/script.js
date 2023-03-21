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

      if (200 < pose.rightShoulder.x && pose.rightShoulder.x < 400 && 100 < pose.leftShoulder.y && pose.leftShoulder.y < 300){
         body.style.backgroundImage = "url('img/rose.jpg')";
      } else if  (pose.nose.x > 500 && pose.nose.y > 400){
         body.style.backgroundImage = "url('img/jaune.jpg')";
      } else if (pose.leftWrist.x > 300 && pose.leftWrist.y < 300 &&
         pose.rightWrist.x < 300 && pose.rightWrist.y < 300 &&
         pose.rightAnkle.x < 320 && pose.rightAnkle.x > 240 
         ){
            body.style.backgroundImage = "url('img/vert.jpg')";
      } else {
         body.style.backgroundImage = "url('img/noir.jpg')";
      }   
   }
}

function modelLoaded() {
   console.log("worked");
}
function draw() {
   image(video, 0, 0);
}