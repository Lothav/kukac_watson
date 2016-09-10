import {Component} from '@angular/core';
import {NavController, Page} from 'ionic-angular';
import {Camera} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public base64Image: string;

    constructor(private navCtrl: NavController) {

    }
    public takePicture(){
        Camera.getPicture({
            destinationType: 0,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            this.base64Image = err;
        });
    }

}
