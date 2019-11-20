import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

export type AuthToken = { access_token: string };

export type User = {
  id: number;
  email: string;
  password: string
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  helper = new JwtHelperService();

  private activeUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(this.decodedAuthToken);
  public activeUser$: Observable<User> = this.activeUserSubject.asObservable();
  
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loggedIn());
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  private loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  public get authToken(): string {
    return localStorage.getItem('access_token') || "";
  }

  public get decodedAuthToken() {
    return this.helper.decodeToken(localStorage.getItem('access_token')) || {};
  }
  
  login(email: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/login', { email, password }).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.access_token);
        this.activeUserSubject.next(this.decodedAuthToken);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.activeUserSubject.next(this.decodedAuthToken);
    this.isLoggedInSubject.next(false);
  }

  register(email: string, password: string, role: string):  Observable<AuthToken> {
    return this.http.post<AuthToken>('http://localhost:8000/auth/register', { email, password, role });
  }
}
