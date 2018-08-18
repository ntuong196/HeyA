import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <messages></messages>
    <new-message></new-message>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dash Board';
}