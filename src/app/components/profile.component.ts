import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  repos:any;
  username: string;
  constructor(private _githubService : GithubService) {   
    this.user = false;    
    this.repos = false;
  }

  searchUser(){
    if (this.username.length > 0){

      this._githubService.updateUser(this.username);
      this._githubService.getUser().subscribe(user => {
        console.log(user);      
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;      
      });
    } else {
      this.user = false;
      this.repos = [];
    }

  }

  ngOnInit() {
  }

}
