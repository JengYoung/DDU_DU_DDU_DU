import { ILoginPayload, login } from '@/apis/auth';
import { DefaultErrorBoundary } from '@/components/ErrorBoundary/Default';
import { useMutation } from '@tanstack/react-query';
import Router, { useRouter } from 'next/router';

import React, { FormEvent, Suspense, useEffect, useState } from 'react';

const enum EInputs {
  'email' = 'email',
  'password' = 'password',
}

export default function Login() {
  const router = useRouter();

  const [inputs, setInputs] = useState<Record<EInputs, string>>({
    email: '',
    password: '',
  });

  const loginAPI = useMutation(
    async (payload: ILoginPayload) => {
      const res = await login(payload);
      return res;
    },
    {
      onSuccess: (res) => {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
      },
    }
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (loginAPI.isLoading) return;

    loginAPI.mutate({
      email: inputs.email,
      password: inputs.password,
    });

    router.push('/todos');
  };

  const onChange = (e: FormEvent, type: EInputs) => {
    setInputs((state) => ({
      ...state,
      [type]: (e.target as HTMLInputElement).value,
    }));
  };

  useEffect(() => {
    const value = localStorage.getItem('accessToken');

    if (value) {
      router.replace('/todos');
    }
  }, []);

  return (
    <div>
      <form>
        <input placeholder="아이디를 입력해주세요." onChange={(e) => onChange(e, EInputs.email)} />
        <input
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={(e) => onChange(e, EInputs.password)}
        />

        <DefaultErrorBoundary
          renderFallback={(error, onReset) => {
            const errorMessage = error.message ?? error;
            return (
              <div>
                {errorMessage}
                <button onClick={onReset}>다시 시도하기</button>
              </div>
            );
          }}
        >
          <Suspense fallback={<button disabled>로그인 중입니다...</button>}>
            <button onClick={onSubmit}>로그인</button>
          </Suspense>
        </DefaultErrorBoundary>
      </form>
    </div>
  );
}
