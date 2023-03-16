import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.API_END_POINT,
  timeout: 3000,
});

const request = baseInstance;

export interface ILoginPayload {
  email: string;
  password: string;
}

export const login = async ({ email, password }: ILoginPayload) => {
  const res = request.post('/auth/login', {
    email,
    password,
  });

  return res;
};
