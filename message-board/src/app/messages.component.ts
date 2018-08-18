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
    <div *ngFor="let message of webService.messages">
        <mat-card class="card">
        <mat-card-title>{{message.name}}<mat-icon style="float: right;" matSuffix>favorite_border</mat-icon></mat-card-title>
        <mat-card-content>{{message.message}}</mat-card-content>
        </mat-card>
    </div>
    `
})

export class MessagesComponent {
	constructor(private webService: WebService) {}
}