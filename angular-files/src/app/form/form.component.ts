import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnDestroy {
    init$: Subject<boolean> = new Subject<boolean>();
    
    constructor(private appService: AppService) { }
    ngOnDestroy(): void {
        this.init$.next(true);
        this.init$.unsubscribe();
    }
    userForm = new FormGroup({
        firstName: new FormControl('', Validators.nullValidator && Validators.required),
        lastName: new FormControl('', Validators.nullValidator && Validators.required),
        email: new FormControl('', Validators.nullValidator && Validators.required)
    });
    onSubmit() {

        this.appService.addUser(this.userForm.value).pipe(takeUntil(this.init$)).subscribe(data => {
            if(confirm("reset form ?")){this.userForm.reset();}
            var x= prompt("votre nom","No name");
            console.log(x);
        });
    }
    
}
