function preload(){
    
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video= createCapture(VIDEO)
video.hide()
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/model.json",loaded)
classifier.classify(video,getresults)

}

function getresults(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("peoplename").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3)*100+" %";

}
}

function loaded(){
    console.log("loaded")
}



function draw (){
image(video,0,0,300,300)
}