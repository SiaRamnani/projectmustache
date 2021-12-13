mustacheX=0
mustacheY=0

function preload()
{
    mustache=loadImage("https://i.postimg.cc/0y9WkWxy/mustache.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}


function modelloaded()
{
  console.log("poseNet is Initialized") ;  
}


function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            mustacheX=results[0].pose.nose.x-40;
            mustacheY=results[0].pose.nose.y-5;
        }
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache, mustacheX,mustacheY,100, 50)
}

function take_snapshot()
{
    save('filterpj.png');
}