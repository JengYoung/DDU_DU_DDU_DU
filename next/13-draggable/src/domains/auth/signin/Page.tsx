import Link from 'next/link'
import React from 'react'

export const SignInPage = () => {
  return (
    <div>
      <h1>로그인</h1>
      
      <form>
        <input />
        <input />
        
        <button type="submit">로그인하기</button>
      </form>

      <Link href="/signup">회원가입하기</Link>
    </div>
  )
}
