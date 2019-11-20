import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export type AuthToken = { access_token: string };

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/login', { email, password });
  }

  register(email: string, password: string):  Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/register', { email, password });
  }
}
