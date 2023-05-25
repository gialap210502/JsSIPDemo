import React from 'react';
import CallButton from './components/CallButton';
import CallStatus from './containers/CallStatus';

const App = () => (
  <div style="display: flex; justify-content: center;">
    <CallButton />
    <CallStatus />
  </div>
);

export default App;
