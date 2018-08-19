var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
// Angular import
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
/*
// Righteous import
*/
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
const routes = [
    { path: '', component: HomeComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'messages/:name', component: MessagesComponent },
    { path: 'register', component: RegisterComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MessagesComponent,
            NewMessageComponent,
            NavComponent,
            HomeComponent,
            RegisterComponent
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
            RouterModule.forRoot(routes)
            // ReactiveFormsModule,
        ],
        providers: [WebService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map