import { withSitemap } from 'next-sitemap';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações do Next.js aqui
};

export default withSitemap({
  siteUrl: 'https://www.seusite.com',
  // outras configurações específicas do sitemap, se necessário
})(nextConfig);
