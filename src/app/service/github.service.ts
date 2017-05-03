import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username : string;
    private clientId = '33bbed230f001ead56ae';
    private clientSecret = 'a1dc39377543f6f9aa447a8c3777c43d06a41153';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'zyzmoz';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id='+ this.clientId+ '&client_secret=' + this.clientSecret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id='+ this.clientId+ '&client_secret=' + this.clientSecret)
            .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }

}