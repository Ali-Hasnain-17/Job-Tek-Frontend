export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export interface UserLoginResponse {
  user: User;
  jwtToken: string;
}
