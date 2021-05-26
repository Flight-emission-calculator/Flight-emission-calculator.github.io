import './css/App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Start from './Views/Start.js';
import Comparison1 from './Views/Comparison1';
import Comparison2 from './Views/Comparison2';
import Comparison3 from './Views/Comparison3';
import Summary from './Views/Summary';
import Information from './Views/Information';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Link to={"/" } style={{ textDecoration: 'none'}}>
              <p className="header-btn">Calculate new trip</p>
            </Link>

            <h2 id="title">Flight Emission Calculator and Comparator</h2>

             <Link to={"/info"} style={{ textDecoration: 'none'}} className="more-info">
                <p className="header-btn">More Information</p>
            </Link> 
        </header>

        {/* <Fragment> */}
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Start}/>
            <Route path="/:from/:destination/:roundTrip" exact component={Comparison1}/>
            <Route path="/:from/:destination/:roundTrip/:emissions/household" exact component={Comparison2}/>
            <Route path="/:from/:destination/:roundTrip/:emissions/plastic-recycle" exact component={Comparison3}/>
            <Route path="/:from/:destination/:roundTrip/:emissions/summary" exact component={Summary}/>
            <Route path="/info" exact component={Information}/>
          </Switch>
        {/* </Fragment> */}


      </div>
    </Router>
  );
}

export default App;
