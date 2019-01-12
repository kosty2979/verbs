import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Routs from './routs';
import Store from './store'
import {NavPanel} from './components';
import MainLayout from './layout';

import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <MainLayout>
            <NavPanel />
            <div className="panel-body">
              <Routs/>
            </div>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
