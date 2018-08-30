import { Component } from '@angular/core'
import { WebService } from '../web.service'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent {
	constructor(private webService : WebService, private route: ActivatedRoute, private auth: AuthService) {}
  message = {
      name: this.auth.name,
      message: ""
  }
    ngOnInit(){
        var name = this.route.snapshot.params['name'];
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();


    }
    delete() {
        this.webService.deleteMessage(this.message);
    }
}
