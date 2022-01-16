function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jAe08Qect/model.json',modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }