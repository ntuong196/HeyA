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
import {MatChipsModule} from '@angular/material/chips';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
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
import { UserComponent } from './user/user.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inbox', component: HomeComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'messages/:name', component: MessagesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'scanner', component: MapComponent}
];




@NgModule({
	declarations: [
	AppComponent, 
	MessagesComponent,
	NewMessageComponent,
	NavComponent,
	HomeComponent,
	RegisterComponent,
	LoginComponent,
	UserComponent,
	MapComponent
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
	ReactiveFormsModule,
	MatChipsModule,
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAK8MrWHM4riyD4HJ6M5pabVAs09scuLBU'
    })
	],
	providers: [WebService, AuthService],
	bootstrap: [AppComponent]

})
export class AppModule { }