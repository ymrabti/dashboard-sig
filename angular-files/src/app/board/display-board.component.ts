import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-display-board',
    templateUrl: './display-board.component.html',
    styleUrls: ['./display-board.component.css']
})
export class DisplayBoardComponent implements OnInit {

    constructor() { }

    @Input() userCount = 0;
    @Output() getUsersEvent = new EventEmitter();

    ngOnInit(): void {
    }
    getAllUsers1() {
        console.log("getAllUsers1");
        this.getUsersEvent.emit('get _all users');
    }

}
