import {Http} from '@angular/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Injectable()
export class WebService {
	BASE_URL = 'http://localhost:8080/api'

    
    private messageStore = [];

    //  messageSubjet = new Subject();
    private messageSubjet = new Subject();
    
    messages = this.messageSubjet.asObservable();


    constructor(private http: Http, private sb: MatSnackBar,  private auth: AuthService) {
        this.getMessages(null);
    }

    getMessages(user) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubjet.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages");
        });
    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubjet.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }
    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).pipe(map(res => res.json()));
    }
    saveUser(userData) {
        return this.http.post(this.BASE_URL + '/users/me', userData, this.auth.tokenHeader).pipe(map(res => res.json()));
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
}