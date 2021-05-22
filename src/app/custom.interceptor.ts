import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { environment } from '../environments/environment';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    
    jsonPlaceHolderUrl: string;

    constructor() {
        //get base url from environment profile
        this.jsonPlaceHolderUrl = environment.jsonPlaceholder;
    }

    intercept(reqest: HttpRequest<any>, next: HttpHandler) {
        //intercept and modify request before sending to the backend server
        const httpsReq = reqest.clone({ url: this.jsonPlaceHolderUrl + reqest.url });    //addding 'https://jsonplaceholder.typicode.com/' to all out-going request
        return next.handle(httpsReq);   //send request after modifying
    }
}