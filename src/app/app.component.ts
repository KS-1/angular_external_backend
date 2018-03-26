import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



import { UserResponse } from './user-response';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUserResponse()
      .subscribe(data => console.log());
  }

  ngOnInit() {
    this.getUsers();
  }
}

