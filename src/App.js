import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Assets from './components/assets.component';
import Liabilities from './components/liabilities.component';

function App() {
  return (
    <div className="App">
      <Assets />
      <br/>
      <Liabilities />
    </div>
    // <Router>
    //   <Route path="/" exact component={}>
    // </Router>
  );
}

export default App;
