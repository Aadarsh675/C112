Webcam.set ({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90,
    contraints: {
        facingMode: "environment"
    }
})

Webcam.attach("camera")

function capture(){
    Webcam.snap(
        function (picture) {
            document.getElementById("snapshot").innerHTML = '<img id="captured_img" src=' + picture + '>';
        }
    )
}

classifier = ml5.imageClassifier("MobileNet", modelLoader);
function modelLoader() {
    console.log("Model loaded succesfully.")
}

function identify() {
    img = document.getElementById("captured_img")
    classifier.classify(img, gotResults)
}

function gotResults(error, result) {
    if (error) {
        console.log(error);
    } 
    else {
        console.log(result);
        document.getElementById("output").innerHTML = result[0].label;
    }
}
