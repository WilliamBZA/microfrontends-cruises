import { Component } from '@angular/core';
import { IBox, IMapOptions, ILatLong } from 'angular-maps';

@Component({
  selector: 'app-main',
  templateUrl: '/src/app/app.template.html'
})
export class AppComponent {
    _options: IMapOptions = {
        disableBirdseye: false,
        disableStreetside: false,
        navigationBarMode: 1, 
        zoom: 6
    };

    private _path: Array<ILatLong> = new Array<ILatLong>();

    constructor() {
        PathData.forEach(element => {
            this._path.push({ latitude: element.latitude, longitude: element.longitude});
        });
    }
    
}

const PathData = [
    { 'latitude': 54.415767, 'longitude': 18.664087 },
    { 'latitude': 58.403351, 'longitude': 21.095825 },
    { 'latitude': 59.610423, 'longitude': 22.861209 },
    { 'latitude': 60.137442, 'longitude': 24.941648 },
    { 'latitude': 59.920115, 'longitude': 27.292766 },
    { 'latitude': 60.069910, 'longitude': 28.835464 },
    { 'latitude': 59.945509, 'longitude': 30.074524 },
];