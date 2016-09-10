import {Component} from '@angular/core';
import {NavController, Page} from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {Camera} from 'ionic-native';
declare function require(name:string);


@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public base64Image: string;

    constructor(private navCtrl: NavController, private http: Http) {
        this.base64Image = "https://placehold.it/150x150";
    }


    public takePicture(){


        ///  CAMERA IONIC => WORKS FINE

        Camera.getPicture({}).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = imageData;
        }, (err) => {
            this.base64Image = err;
        });

    }

    private getWatson(){


        //  TRYING TO USE SDK =>  PROBLEMS ON 'request.js' and 'form-data' node_modules called from Typescript
        /*
         var watson = require('watson-developer-cloud');
         var JSONStream = require('JSONStream');

         var visual_recognition = watson.visual_recognition({
            api_key: '7fba96b46c8d7c821792cee82093da7197ff199c',
            version_date: '2016-05-20'
         });

         visual_recognition.classify(params, function(err, res) {
         if (err){
            console.log(err);
         }
         else{
            console.log(JSON.stringify(res, null, 2));
         }
         });*/



        ///   WITH AJAX  =>  ERROR ON INSTANCE FORMDATA() TO SEND IMAGE

        /*
         let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
         let options = new RequestOptions({ headers: headers });

         // FormData Not Coming
         // need to fix typings.js
         var formdata = new FormData( JSON.stringify(
            { "images_file" : "https://3.bp.blogspot.com/-W__wiaHUjwI/Vt3Grd8df0I/AAAAAAAAA78/7xqUNj8ujtY/s1600/image02.png"}
         ));

         this.http.post("https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?" +
            "api_key=7fba96b46c8d7c821792cee82093da7197ff199c&version=2016-05-19", formdata, options)
            .map(res => res.json())
            .subscribe(
            url => console.log(url),
            err => console.log(err)
         );
        */
    }

}