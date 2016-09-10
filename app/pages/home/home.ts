import {Component} from '@angular/core';
import {NavController, Page} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public base64Image: string;

    constructor(private navCtrl: NavController) {
        this.base64Image = "https://placehold.it/150x150";
    }
    public takePicture(){

        watsonConnection();
        /*
        Camera.getPicture({}).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = imageData;



        }, (err) => {
            this.base64Image = err;
        });
        */
    }
}
declare function watsonConnection(): void;
