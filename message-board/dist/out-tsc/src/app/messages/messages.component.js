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
import { WebService } from '../web.service';
import { ActivatedRoute } from '@angular/router';
let MessagesComponent = class MessagesComponent {
    constructor(webService, route) {
        this.webService = webService;
        this.route = route;
    }
    ngOnInit() {
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
    }
};
MessagesComponent = __decorate([
    Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.css']
    }),
    __metadata("design:paramtypes", [WebService, ActivatedRoute])
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map