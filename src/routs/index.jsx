import React from 'react';
import {Redirect, Route} from "react-router-dom";

import {TestPage, VerbsListPage} from "../pages";


const Routs = () => {
  return (
    <div className="panel-body">
      <Route exact path="/" render={() => <Redirect to="/list"/>}/>
      <Route exact path="/test" component={TestPage}/>
      <Route exact path="/list" component={VerbsListPage}/>
    </div>
  )
};

export default Routs