import React from 'react';
import './App.css';
import Events from './pages/Events'
import Complaints from './pages/Complaints'
import Commission from './pages/Commission'
import Rules from './pages/Rules'
import Agenda from './pages/Agenda'
import Error from './pages/Error'
import Navbar from './component/Navbar'
import Egyption from './pages/Egyption'
import More from './component/More'
import {Route ,Switch } from 'react-router-dom'
import { Define}  from './component/Define';
import { Consist } from './component/Consist';
import { Doing } from './component/Doing';
import { Desision } from './component/Desision';
import { Follow } from './component/Follow';
import Home from './pages/Home';
import Search from './pages/Search'
import Vote from './component/Vote';
import Thank from './component/Thank';
import { Result } from './component/Result';
 

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/agenda" component={Agenda} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/commission" component={Commission} />
      <Route exact path="/complaints" component={Complaints} />
      <Route exact path="/egyption" component={Egyption} />
      <Route exact path="/more" component={More} />
      <Route exact path="/define" component={Define} />
      <Route exact path="/consist" component={Consist} />
      <Route exact path="/doing" component={Doing} />
      <Route exact path="/desision" component={Desision} />
      <Route exact path="/follow" component={Follow} />
      <Route exact path="/vote" component={Vote} />
      <Route exact path="/thank" component={Thank} />
      <Route exact path="/result" component={Result} />
      <Route  component={Error} />
    </Switch>
    </>
  );
}

export default App;
