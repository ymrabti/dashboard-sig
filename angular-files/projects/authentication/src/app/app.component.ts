import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        let map_leaf = L.map("l-map").setView([51.505, -0.09],10.75,{});
        console.log(L.transformation([36,-4,37,-2]));
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: null
        }).addTo(map_leaf);
    }
    title = 'authentication';
}
