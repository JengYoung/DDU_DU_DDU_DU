import { check } from "#/domains/auth/apis/check";
import { Page } from "#/domains/site-management/banners/Page.client";
import { BannersProvider } from "#/domains/site-management/banners/hooks/banner.context";
import { Main } from "#/layouts/Main";

/**
 * [x] 일단 서버에서 컴포넌트를 받아온다.
 * 클라이언트 컴포넌트
 * 서버 컴포넌트
 * 
 * SSR을 위한 방법이다.
 * 
 * SSR -> RAW한 HTML을 뽑기 위한 과정이다.
 * RSC -> 서버단에서 컴포넌트를 불러오기 위한 방법이다.
 * 
 * 번들 -> 
 * 직렬화된 트리를 만든다 (renderToString...)
 * 서버 - 클라이언트
 * 
 * 서버 -> 받아와요 직렬화된 컴포넌트 정보
 * 클라이언트 -> placeholder -> 참조값만 전달
 * 
 * SSR
 * RSC
 */
async function fetchData() {
  const res = await fetch(
    'https://run.mocky.io/v3/7268585e-f7cb-4533-8898-5f6456fb5159', { cache: 'no-store' }
  );
  
  const data = await res.json();

  return data
}

export default async function Home() {
  await check();
  
  const data = await fetchData();

  return (
    <BannersProvider>
      <Main>
        <Page data={data}></Page>
      </Main>
    </BannersProvider>
  );
}
