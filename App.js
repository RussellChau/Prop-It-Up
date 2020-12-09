import React from 'react';

import Component from './components/component';

function App() {
  return (
      <div>
          <Component firstName="Alfred" lastName="Hitchcock" age="45" hairColor="Bald"/>
          <Component firstName="Sonic" lastName="Hedgehog" age="12" hairColor="green"/>
          <Component firstName="Mario" lastName="Mario" age="53" hairColor="brown"/>
          <Component firstName="Luigi" lastName="Mario" age="48" hairColor="brown"/>
      </div>
  );
}

export default App;
