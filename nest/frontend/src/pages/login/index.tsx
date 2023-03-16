import React from 'react';

export default function Login() {
  const onSubmit = () => {};

  return (
    <div>
      <form>
        <input placeholder="아이디를 입력해주세요." />
        <input placeholder="비밀번호를 입력해주세요." type="password" />

        <button onClick={onSubmit}>로그인</button>
      </form>
    </div>
  );
}
