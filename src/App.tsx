import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import Home from './pages/Home';
import Project from './pages/Project';
import Entity from './pages/Entity';

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/project/entity/:id?" component={Entity} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
