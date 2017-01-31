import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { AuthApiService } from './auth-api.service';

@Injectable()
export class AuthService {

    constructor(private authApiService: AuthApiService) {}

    // public methods
    login (credentials, successCallback, errorCallback) {
        this.authApiService.login(credentials)
        .subscribe(
            data => {
                this.processSuccess(data);
                successCallback(data);
            },
            error => {
                this.processError(error);
                errorCallback(error);
            }
        );
    }

    loggedIn () {
        return tokenNotExpired();
    }

    logout () {
        localStorage.removeItem('id_token');
    }

    // private methods
    private processSuccess (data) {
        localStorage.setItem('id_token', data.token);
    }

    private processError (error) {
        let new_error = JSON.parse(error._body);
    }

}
