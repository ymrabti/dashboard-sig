import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsComponent } from './charts/charts.component';

import { IndicateursComponent } from './indicateurs/indicateurs.component';
import { SelectListComponent } from './select-list/select-list.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        NavbarComponent,
        ChartsComponent,
        IndicateursComponent,
        SelectListComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatTabsModule, MatTableModule,
        BrowserAnimationsModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
