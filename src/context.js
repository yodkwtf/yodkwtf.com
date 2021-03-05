import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // setting states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // functions for sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
