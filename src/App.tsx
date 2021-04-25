/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar.component';
import Home from './components/home.component';

const App: React.FC = () => {
  return (
    <Router>
      <div className="Container">
        <Navbar />
        <Route path="/" exact component={Home} />
      </div>
    </Router>

  );
};

export default App;
