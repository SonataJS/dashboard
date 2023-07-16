import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import Home from './pages/Home';

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
