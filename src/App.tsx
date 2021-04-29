/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Scrollhandler from './components/scrollhandler.component';

import Navbar from './components/navbar.component';
import Home from './components/home.component';

const container = css`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const App: React.FC = () => {
  return (
    <Router>
      <div className="Container" css={container}>
        <Scrollhandler />
        <Navbar />
        <Route path="/" exact component={Home} />
      </div>
    </Router>

  );
};

export default App;
