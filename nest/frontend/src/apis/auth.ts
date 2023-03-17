import wrapPromise from '@/pages/api/wrapPromise';
import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  timeout: 3000,
});

const request = baseInstance;

export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResponse {
  accessToken: string;
}

console.log();

export const login = ({ email, password }: ILoginPayload) => {
  const res = request.post<ILoginResponse>('/auth/login', {
    email,
    password,
  });

  return res;
};
