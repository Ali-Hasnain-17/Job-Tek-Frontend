import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User, UserLoginResponse } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(values: { email: string; password: string }) {
    return this.http.post<UserLoginResponse>('/api/auth/login', values).pipe(
      tap((data: any) => {
        localStorage.setItem('token', JSON.stringify(data?.jwtToken));
        localStorage.setItem('user', JSON.stringify(data?.user));
      })
    );
  }

  register(values: User) {
    return this.http.post<User>('/api/auth/register', values);
  }

  logout() {
    console.log('logout');
    const jwtToken = JSON.parse(localStorage.getItem('token')!) || undefined;
    return this.http
      .post<{ message: string }>('/api/auth/logout', {
        jwtToken,
      })
      .pipe(
        tap((_) => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        })
      );
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('token')!) || undefined;
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem('user')!).role === 'Admin';
  }
}
