import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser:any = this.authenticationService.currentUserValue;
    
    if (currentUser && currentUser.token) {
        
        request = request.clone({
            setHeaders: {
                 Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    return next.handle(request);
}
}
