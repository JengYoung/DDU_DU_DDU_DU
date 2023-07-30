import { check } from '#/domains/auth/apis/check';
import { SignInPage } from '#/domains/auth/signin/Page';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: '로그인 | 연구주제 2. TDD로 Form 구현',
  description: 'TDD로 Form을 구현해봅니다 🙆🏻',
};

export default async function Page() {
  return (
    <SignInPage />
  )
}
