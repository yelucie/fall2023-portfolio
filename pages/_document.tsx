import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Lucie Ye's portfolio</title>
        <link rel="icon" href="/images/icon.png" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
          rel='stylesheet' />
      </Head>
      <body className='bg-fixed bg-gradient-to-r from-purple-600 to-teal-300 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
