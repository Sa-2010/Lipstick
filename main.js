lipsX = 0;
lipsY = 0;
function preload() {
    lipstick_lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function modelloaded() {
    console.log("PoseNet Is Initialized");
}
function draw() {
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(lipsX, lipsY, 20);
    image(lipstick_lips, lipsX, lipsY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.lips.X-25;
        lipsY = results[0].pose.lips.Y+15;
        console.log("lips X = " + results[0].pose.lips.X);
        console.log("lips Y = " + results[0].pose.lips.Y);
    }
}
