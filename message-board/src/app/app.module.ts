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
	MatCheckboxModule,
	MatMenuModule
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

/*
// Righteous import
*/
import { AppComponent } from './app.component';
import {WebService} from './web.service';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from './auth.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: MessagesComponent},
  {path: 'inbox', component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/:name', component: MessagesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];




@NgModule({
	declarations: [
	AppComponent, 
	MessagesComponent,
	NewMessageComponent,
	NavComponent,
	HomeComponent,
	RegisterComponent,
	LoginComponent
	],
	imports: [
	BrowserModule, 
	BrowserAnimationsModule,
	MatButtonModule,
	MatCardModule, 
	MatInputModule, 
	MatSnackBarModule, 
	MatToolbarModule,
	HttpModule,
	MatIconModule,
	FormsModule,
	MatCheckboxModule,
	MatMenuModule,
	RouterModule.forRoot(routes),
	ReactiveFormsModule
	],
	providers: [WebService, AuthService],
	bootstrap: [AppComponent]

})
export class AppModule { }