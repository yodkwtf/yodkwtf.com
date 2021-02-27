import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Main from './pages/Main';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
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
