import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Interceptor', request.url);
        if(this.authService.authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.authToken}`
                }
            })
        }   
        return next.handle(request);
    }
}