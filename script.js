let mobilenet;
let video;
let label = '';

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

// setup function
function setup() {
    createCanvas(640, 550);
    // ml5 to create video capture
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    // load the MobileNet and apply it on video feed
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
    // show video 
    image(video, 0, 0);
    fill(255);
}