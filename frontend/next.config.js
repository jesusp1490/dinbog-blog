/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['es', 'en'],       // Idiomas soportados
    defaultLocale: 'es',         // Idioma por defecto
    localeDetection: true        // Detecta idioma automáticamente (opcional)
  }
}

module.exports = nextConfig
