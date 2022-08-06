import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import { HomePage, ContactPage, ProjectsPage, ErrorPage, Links } from './pages';
// import components
import { Head, Contact, Footer, Widget, ScrollToTop } from './components';

const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Head />
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
          <Route exact path="/links">
            <Links />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Contact />
        <Footer />
        <Widget />
      </Router>
    </main>
  );
};

export default App;
