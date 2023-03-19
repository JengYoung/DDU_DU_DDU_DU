import { request } from './index';

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
