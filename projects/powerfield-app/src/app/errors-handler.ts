import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorsHandler implements ErrorHandler {
  handleError(error: Error): void {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        // Handle no network error
      } else {
        // Handle Http Error
        // WARN: NOT PRODUCTION READY
        // TODO: enhance error management
        window.location.href = '/';
      }
    } else {
      // Handle Client Error
      // WARN: NOT PRODUCTION READY
      // TODO: enhance error management
      window.location.href = '/';
    }
  }
}
