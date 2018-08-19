import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  model = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    constructor(private webService: WebService) {}

    ngOnInit() {
        this.webService.getUser().subscribe( res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
            this.model.email = res.email;
            this.model.password = res.password;
        })
    }

    saveUser(userData) {
        this.webService.saveUser(userData).subscribe();
    }

}
