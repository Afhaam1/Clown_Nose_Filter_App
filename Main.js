var noseX = ""
var noseY = ""
function preload() {
    Clown = loadImage("https://i.postimg.cc/jS7293rS/clown-nose-removebg-preview-1.png")
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300 ,300)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet Is Initialize')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(Clown, noseX-22, noseY-22, 40, 40);
}
function take_snapshot(){
    save('Filter_Image.png');
}
