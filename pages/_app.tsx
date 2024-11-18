import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/components/lib/contexts/LanguageContext';
import { ModalProvider, useModal } from '@/components/lib/contexts/ModalContext';
import Sidebar from '@/components/Common/Sidebar';
import Navbar from '@/components/Common/Navbar';
import LoadingSkeleton from '@/components/ui/skeletons/LoadingSkeleton';
import ModalCover from '@/components/ui/ModalCover';

const AppContent = ({ Component, pageProps, router }: AppProps) => {
  const { showDetail, setShowDetail } = useModal();

  return (
    <div className="grid grid-cols-12 gap-6 my-16 sm:px-20 md:px-32 lg:px-36 xl:px-24 2xl:px-48 xl:h-screen">
      <div className="col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 xl:col-span-3 rounded-2xl xl:h-full">
        <Sidebar />
      </div>
      <div className="relative flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 rounded-2xl xl:col-span-9 xl:h-full">
        {showDetail !== null && (
          <ModalCover className="absolute inset-0 z-40" setShowDetail={setShowDetail} />
        )}
        <Navbar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function App({ Component, pageProps, router }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <LoadingSkeleton />;
  }

  return (
    <LanguageProvider>
      <ThemeProvider attribute="class">
        <ModalProvider>
          <AppContent Component={Component} pageProps={pageProps} router={router} />
        </ModalProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}