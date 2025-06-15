import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CoreServiesService } from '../servies/core-servies.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private coreServies:CoreServiesService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
        this.coreServies.errorMessageSubject$.next(error.error.errors[0].msg)
        } else if (error.status === 400) {
          this.coreServies.errorMessageSubject$.next(error.error.errors[0].msg)
        } else if (error.status === 403) {
      this.coreServies.errorMessageSubject$.next(error.error.errors[0].msg)
        } else if (error.status === 500) {
        this.coreServies.errorMessageSubject$.next(error.error.message)
        } else {
          console.error('An error occurred:', error);
        }
        return throwError(() => error);
      })
    );
  }
}
