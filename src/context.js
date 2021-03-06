import React, { useState } from 'react';

const AppContext = React.createContext();

// get store theme from LS
const storedTheme = () => {
  // default theme if no theme is stored
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

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

  // SMOOTH SCROLL FUNCTION
  const smoothScroll = (e) => {
    // 1) prevent default scroll
    e.preventDefault();
    // 2) get href=#id from clicked link
    const id = e.currentTarget.getAttribute('href').slice(1);
    // 3) get section with that id
    const element = document.getElementById(id);
    // 4) get navbar height
    const navHeight = document.querySelector('nav').getBoundingClientRect()
      .height;
    // 5) check if navbar is fixed
    const isNavFixed = document
      .querySelector('nav')
      .classList.contains('nav-fixed');
    // 6) change position
    let position = element.offsetTop - navHeight;
    if (!isNavFixed) {
      position = position - navHeight;
    }
    // 7) navigate to position
    window.scrollTo({
      left: 0,
      top: position,
    });
    // 8) close sidebar if open
    closeSidebar();
  };

  // state
  const [theme, setTheme] = React.useState(storedTheme());

  // useEffect
  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // switch theme function
  const switchTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        smoothScroll,
        theme,
        switchTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
