import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-indicateurs',
    templateUrl: './indicateurs.component.html',
    styleUrls: ['./indicateurs.component.css']
})
export class IndicateursComponent implements OnInit {
    transportationService: any;

    constructor() { }
    bacClicked() {
        console.log("bacClicked");
    }


    @Input() distanceBalMeca: string;
    @Input() distanceBalElec: string;
    @Input() distanceNettoi: string;
    @Input() distanceDEB: string;

    @Input() NBR_BACS: string;
    @Input() distanceBOM: string;
    @Input() distanceBSAT: string;

    showConfig() {
        console.log("Config");
    }
    ngOnInit(): void {
    }

}
