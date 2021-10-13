import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import OLMAP from 'ol/Map';
import Feature from 'ol/Feature';
import GeoJSON, { GeoJSONMultiPolygon } from "ol/format/GeoJSON";
import { transform } from 'ol/proj';
import View from 'ol/View';


@Component({
    selector: 'app-select-list',
    templateUrl: './select-list.component.html',
    styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {
    constructor() { }
    @Input() communes: any[];
    @Output() commune_click = new EventEmitter<any>();
    @Output() setView = new EventEmitter<boolean>();
    selected: string = "";

    communeClicked(event: any, evt) {
        let correctTarget = event.target.nodeName == "DIV" ? event.target : event.target.parentElement;
        // console.log(correctTarget);
        // let hasClass = correctTarget.classList.contains('active_liste_select');
        // hasClass && correctTarget.classList.remove('active_liste_select')
        this.selected = evt.properties.commune_fr;
        this.commune_click.emit(evt.geometry.coordinates);
        document.querySelectorAll(".active_liste_select").forEach(
            i => {
                if (!i.innerHTML.includes(this.selected)) {
                    i.classList.remove('active_liste_select')
                }
            }
        );
        let contains = correctTarget.classList.contains('active_liste_select');
        
        this.setView.emit(contains);
        correctTarget.classList.toggle('active_liste_select');
    }
    ngOnInit() {
    }
}
