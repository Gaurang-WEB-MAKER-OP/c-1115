noseX = 0;
noseY = 0;

function preload() {
    clown_nose = lodImage("'https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    veido = createCapture(VEDIO);
    VEDIO.SIZE(300, 300);
    VEDIO.HIDE();

    poseNET = ml5.poseNET(video, modelLoded);
    poseNet.on('poseNet is intialized')
}