import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: 
    `
        <mat-card class="card">
            <mat-card-content>
                <p>
                  <mat-form-field appearance="outline">
                    <mat-label>Name</mat-label>
                    <input matInput placeholder="John Doe">
                    <!-- <mat-icon matSuffix>sentiment_very_satisfied</mat-icon> -->
                    <mat-hint>Add any name</mat-hint>
                  </mat-form-field>
                </p>
                <p>
                  <mat-form-field appearance="outline">
                    <mat-label>Message</mat-label>
                    <input matInput placeholder="Heya, how're you going?">
                    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
                    <mat-hint>Give a proper messages</mat-hint>
                  </mat-form-field>
                </p>
                <mat-card-actions class="post_button">
                    <button mat-stroked-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./app.component.css']
})
export class NewMessageComponent {
    constructor(private webService : WebService) {}
}