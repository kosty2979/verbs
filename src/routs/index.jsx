import React from 'react';
import { Route, Redirect} from "react-router-dom";

import {TestPage, VerbsListPage, TensePage} from "../pages";


const Routs = () => {
  return (
    <div className="panel-body">
      <Route exact path="/" render={()=><Redirect to='./list'/>}/>
      <Route exact path="/list" component={VerbsListPage}/>
      <Route exact path="/test" component={TestPage}/>
      <Route exact path="/tense" component={TensePage}/>
    </div>
  )
};

export default Routs