import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import Home from './pages/Home';
import Project from './pages/Project';
import Entity from './pages/Entity';
import Field from './pages/Field';

const App: Component = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Route path="/project/entity/:idx" component={Entity} />
          <Route path="/project/entity/:idx/field/:fidx" component={Field} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
