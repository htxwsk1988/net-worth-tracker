import React from 'react';
import { Helmet } from 'react-helmet'
import Networth from './components/networth.component';

function App() {
  return (
    <div>
      <Helmet>
          <title>{ 'Net Worth Tracker' }</title>
      </Helmet>
      <Networth />
    </div>
  );
}

export default App;
