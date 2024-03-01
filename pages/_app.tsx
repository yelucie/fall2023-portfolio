import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 py-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48'>
        <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 xl:col-span-3 rounded-2xl'>
          <Sidebar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 rounded-2xl xl:col-span-9'>
          <Navbar />
          <AnimatePresence mode='wait'>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}
