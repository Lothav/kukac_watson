function watsonConnection(){
    var watson = require('watson-developer-cloud');
    var visual_recognition = watson.visual_recognition({
        api_key: '7fba96b46c8d7c821792cee82093da7197ff199c',
        version_date: '2016-05-20'
    });
    console.log(visual_recognition);
    var params = {
        images_file: fs.createReadStream('./resources/car.png')
    };

    visual_recognition.classify(params, function(err, res) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(res, null, 2));
    });
}

