import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onNewUser(user: IUser) {
    this.users = [...this.users, user];
  }

}
