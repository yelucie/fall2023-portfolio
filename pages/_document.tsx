import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Moderustic:wght@300..800&display=swap" rel="stylesheet" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </Head>
      <body className="bg-fixed bg-gradient-to-r from-purple-600 to-teal-300 dark:from-dark-500 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}