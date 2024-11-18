import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextProps {
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showDetail, setShowDetail] = useState<number | null>(null);

  return (
    <ModalContext.Provider value={{ showDetail, setShowDetail }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};