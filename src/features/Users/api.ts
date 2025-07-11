import { AuthResponse, LoginCredentials } from "./type";


export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // Fake delay
  await new Promise((res) => setTimeout(res, 1000));
debugger
  if (credentials.email === 'tarun.singh@gmail.com' && credentials.password === 'password!@12') {
    return {
      token: 'fake-jwt-token',
      user: {
        id: 1,
        email: credentials.email,
        name: 'John Doe',
      },
    };
  } else {
    throw new Error('Invalid email or password');
  }
}