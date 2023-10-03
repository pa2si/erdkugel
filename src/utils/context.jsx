'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [staff, setStaff] = useState(staffList);

  const openModal = (staff) => {
    setIsModalOpen(true);
    setSelectedStaff(staff);
  };

  const closeModal = () => {
    setSelectedStaff(null);
    setIsModalOpen(false);
  }; */

  return (
    <AppContext.Provider
      value={
        {
          /*      isModalOpen,
        selectedStaff,
        staff,
        openModal,
        closeModal, */
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
