import { Component } from '@angular/core'
import {WebService} from './web.service'


@Component({
	selector:'messages',
	// template: `
	// This is Messages Component
	// <div *ngFor="let message of massages">
	// 	{{message.text}} by: {{message.owner}}
	// </div>
	// `
	// cant work cause the missing tag
	template: `
    <div *ngFor="let message of messages">
        <mat-card style="margin:8px">
        <mat-card-title>{{message.name}}</mat-card-title>
        <mat-card-content>{{message.message}}</mat-card-content>
        </mat-card>
    </div>
    <button mat-button>Send</button>
    `
})

export class MessagesComponent {
	constructor(private webService: WebService) {}

	async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response.json();
        console.log(response.json());
    }
	messages = [];
}