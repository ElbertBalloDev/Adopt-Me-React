import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './Context/ThemeContext';

const App = () => {
  const ThemeHook = useState('darkblue');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={ThemeHook}>
        <div>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
