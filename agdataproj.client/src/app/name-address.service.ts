import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NameAddressService {
  private apiUrl = `${environment.apiUrl}/nameaddress`;

  constructor(private http: HttpClient) { }

  submitNameAddress(data: { name: string; address: string }): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
