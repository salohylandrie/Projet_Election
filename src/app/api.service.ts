import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
baseUrl:string = "http://localhost/ProjetElection/php/registre";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
constructor(private httpClient : HttpClient) { }
public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
        this.setToken(Users[0].username);
        this.getLoggedInName.emit(true);
        return Users;
    }));
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}