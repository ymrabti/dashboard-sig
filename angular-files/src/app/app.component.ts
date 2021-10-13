import { Component, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    constructor(private appService: AppService) { }
    title = 'app-root';
    users: any[] = [];
    userCount = this.users.length;
    message = "Hello Everybody";
    destroy$: Subject<boolean> = new Subject<boolean>();
    getAllUsers() {
        this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
            this.users = users;
            this.userCount = users.length;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
