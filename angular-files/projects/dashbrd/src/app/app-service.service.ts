import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

    constructor(private http: HttpClient) { }
    rootURL = '/geojson';
    getGeoJSON(layer: string) {
        return this.http.get(/* this.rootURL */'http://ymrabti:3080/geojson' + '/dashboard/' + layer);
    }
    getGeoJSONFetch(layer: string) {
        return this.http.get(/* this.rootURL */'http://ymrabti:3080/geojson' + '/fetch/' + layer);
    }
}
