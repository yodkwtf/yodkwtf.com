import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import { HomePage, ContactPage, ProjectsPage, ErrorPage } from './pages';
// import components
import { Footer, ScrollToTop } from './components';

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
