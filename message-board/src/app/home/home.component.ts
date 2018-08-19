import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { NewMessageComponent } from '../new-message.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
