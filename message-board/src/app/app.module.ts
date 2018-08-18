/*
// Angular import
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
	MatCardModule, 
	MatInputModule, 
	MatSnackBarModule, 
	MatToolbarModule,
	MatIconModule,
	MatButtonToggleModule
} from '@angular/material';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/*
// Righteous import
*/
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import {WebService} from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessageComponent } from './new-message.component';

@NgModule({
	declarations: [
	AppComponent, 
	MessagesComponent,
	NewMessageComponent
	],
	imports: [
	BrowserModule, 
	BrowserAnimationsModule,
	MatButtonModule,
  	MatButtonToggleModule,
	MatCardModule, 
	MatInputModule, 
	MatSnackBarModule, 
	MatToolbarModule,
	HttpModule,
	MatIconModule
	// FormsModule,
	// ReactiveFormsModule,
	],
	entryComponents: [NewMessageComponent],
	providers: [WebService],
	bootstrap: [AppComponent, NewMessageComponent]

})
export class AppModule { }