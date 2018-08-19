var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
let WebService = class WebService {
    constructor(http, sb) {
        this.http = http;
        this.sb = sb;
        this.BASE_URL = 'http://localhost:8080/api';
        this.messageStore = [];
        //  messageSubjet = new Subject();
        this.messageSubjet = new Subject();
        this.messages = this.messageSubjet.asObservable();
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
    postMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var response = yield this.http.post(this.BASE_URL + '/messages', message).toPromise();
                this.messageStore.push(response.json());
                this.messageSubjet.next(this.messageStore);
            }
            catch (error) {
                this.handleError("Unable to post message");
            }
        });
    }
    handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 2000 });
    }
};
WebService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, MatSnackBar])
], WebService);
export { WebService };
//# sourceMappingURL=web.service.js.map