function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yPfvjyY56/model.json', model_load_hogaya);
}

function model_load_hogaya() {
    console.log('MODEL LOAD HOGAYA!!');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, result_milgaya);
}

function result_milgaya(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('result_object_name').innerHTML = results[0].label;
        document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(3);
    }
}