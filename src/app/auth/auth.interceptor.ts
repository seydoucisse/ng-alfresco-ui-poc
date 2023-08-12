import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ticket = localStorage.getItem("ticket");
    const credentials = `${config.userId}:${config.password}`
    if(ticket){
      const authenticatedRequest = request.clone({
        headers: request.headers.set('Authorization', `Basic ${btoa(credentials)}`)
      })

      return next.handle(authenticatedRequest);
    }

    return next.handle(request);
  }
}
