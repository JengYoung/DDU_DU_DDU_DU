import { Page } from "#/domains/site-management/banners/Page.client";

async function fetchData() {
  const res = await fetch(
    'https://run.mocky.io/v3/7268585e-f7cb-4533-8898-5f6456fb5159', { cache: 'no-store' }
  );
  const data = await res.json();

  return data;
}

export default async function Home() {

  const data = await fetchData();

  return (
    <Page data={data}>{JSON.stringify(data)}</Page>
  );
}
