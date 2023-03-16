import { ILoginPayload, login } from '@/apis/auth';
import React, { FormEvent, PropsWithChildren, Suspense, useState } from 'react';

interface ILoginButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const enum EInputs {
  'email' = 'email',
  'password' = 'password',
}

const LoginButton = ({ onClick }: ILoginButtonProps) => {
  return <button onClick={onClick}>로그인</button>;
};

export default function Login() {
  const [inputs, setInputs] = useState<Record<EInputs, string>>({
    email: '',
    password: '',
  });

  const onChange = (e: FormEvent, type: EInputs) => {
    setInputs((state) => ({
      ...state,
      [type]: (e.target as HTMLInputElement).value,
    }));
  };

  const onSubmit = (e: FormEvent, inputs: ILoginPayload) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <div>
      <form>
        <input placeholder="아이디를 입력해주세요." onChange={(e) => onChange(e, EInputs.email)} />
        <input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={(e) => onChange(e, EInputs.password)}
        />
        <Suspense fallback={<button disabled>로그인 중입니다...</button>}>
          <button onClick={(e) => onSubmit(e, inputs)}>로그인</button>
        </Suspense>
      </form>
    </div>
  );
}
