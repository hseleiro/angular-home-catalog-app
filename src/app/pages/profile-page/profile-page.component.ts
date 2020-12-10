import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../core/models/user-model/user.model";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {

  }



}
