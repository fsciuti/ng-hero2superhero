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

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  public get authToken(): string {
    return localStorage.getItem('access_token') || "";
  }
  
  login(email: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/login', { email, password }).pipe(
      tap(response => localStorage.setItem('access_token', response.access_token))
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  register(email: string, password: string):  Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/register', { email, password });
  }
}
