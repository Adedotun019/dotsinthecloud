import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Adedotun Adeeko - Personal Portfolio Website" />
        <meta name="keywords" content="portfolio, web development, next.js, react, tailwind" />
        <meta name="author" content="Adedotun Adeeko" />
        <meta property="og:title" content="Adedotun Adeeko - Portfolio" />
        <meta property="og:description" content="Personal portfolio website showcasing my projects and skills" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dotsinthecloud.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adedotun Adeeko - Portfolio" />
        <meta name="twitter:description" content="Personal portfolio website showcasing my projects and skills" />
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
