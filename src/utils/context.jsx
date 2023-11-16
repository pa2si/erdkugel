'use client';

import { createContext, useState, useContext } from 'react';
import contacts from '@/utils/contactData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogoInView, setIsLogoInView] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const openModal = (branchId) => {
    const contact = contacts.find((contact) => contact.id === branchId);
    setIsModalOpen(true);
    setSelectedBranch(contact);
    console.log('Modal opened, state is:', { isModalOpen, selectedBranch });
  };

  const closeModal = () => {
    setSelectedBranch(null);
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        selectedBranch,
        closeModal,
        isLogoInView,
        setIsLogoInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
