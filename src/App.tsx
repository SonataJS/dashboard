import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import Home from './pages/Home';
import Project from './pages/Project';

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/project" component={Project} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
