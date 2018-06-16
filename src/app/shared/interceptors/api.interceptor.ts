import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private notifications: NotificationsService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((response: HttpResponse<any>) => {
                console.log('hello');
                const errorMsg = `API Error: ${response.status}: ${response.statusText}`;
                this.notifications.error('An error has occurred', errorMsg);

                throw new Error('HttpException');
            }),
        );
    }
}
