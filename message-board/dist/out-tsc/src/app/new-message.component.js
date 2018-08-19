var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { WebService } from './web.service';
let NewMessageComponent = class NewMessageComponent {
    constructor(webService) {
        this.webService = webService;
        this.message = {
            name: "",
            message: ""
        };
    }
    post() {
        this.webService.postMessage(this.message);
    }
};
NewMessageComponent = __decorate([
    Component({
        selector: 'new-message',
        template: `
        <mat-card class="card">
            <mat-card-content>
                
                  <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput [(ngModel)]="message.name" placeholder="John Doe">
                    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->
                    <mat-hint>Add any name</mat-hint>
                  </mat-form-field>
                  <mat-form-field appearance="outline">
                    <mat-label>Message</mat-label>
                    <input matInput [(ngModel)]="message.message" placeholder="Heya, how're you going?">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                    <mat-hint>Give a proper messages</mat-hint>
                  </mat-form-field>
                
                <mat-card-actions class="post_button">
                    <button (click)="post()" mat-stroked-button color="primary">POST</button>
                </mat-card-actions>
                <br>
                <br>

            </mat-card-content>
        </mat-card>
    `,
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [WebService])
], NewMessageComponent);
export { NewMessageComponent };
//# sourceMappingURL=new-message.component.js.map