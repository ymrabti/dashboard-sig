import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
    rootURL = '/geojson';
    getUsers() {
        return this.http.get(this.rootURL + '/users');
    }
    getUsersCount() {
        return this.http.get(this.rootURL + '/usersCount');
    }
    addUser(user: any) {
        return this.http.post(this.rootURL + '/user', { user });
    }
}
