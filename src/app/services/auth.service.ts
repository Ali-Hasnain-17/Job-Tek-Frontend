import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(values: any) {
    return this.http.post('http://localhost:5000/api/auth/login', values).pipe(
      tap((data: any) => {
        localStorage.setItem('token', JSON.stringify(data?.jwtToken));
        localStorage.setItem('user', JSON.stringify(data?.user));
      })
    );
  }

  register(values: any) {
    return this.http.post('http://localhost:5000/api/auth/register', values);
  }
}
