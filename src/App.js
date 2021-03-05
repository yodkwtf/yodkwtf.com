import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Main from './pages/Main';
import Error from './pages/Error';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
// import components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/Projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/Contact">
            <ContactPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
