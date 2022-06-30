Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture_image(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML='<img id="img_1" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:',ml5.version);
model=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O7oO9Zq49/model.json',moldelloaded);

function moldelloaded(){
    console.log("Model Loaded!!!")
}

function speak(){
    var  synth=window.speechSynthesis;
    speak_data1="Predection 1 is "+predection1;
    speak_data2=" And predection 2 is"+predection2;
    speach_data=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    console.log(speach_data);
    synth.speak(speach_data);
}