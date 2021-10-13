import { Component, Input, OnInit } from '@angular/core';

import Map from 'ol/Map';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    constructor() { }
    

    @Input() map: Map;
    ngOnInit(): void {

        // this.map.addControl(this.layerSwitcher);
        // console.log(this.communes_berkane);
    }

}
