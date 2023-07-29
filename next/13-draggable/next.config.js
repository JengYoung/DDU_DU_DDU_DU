/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.bank-mall.co.kr'] // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;
