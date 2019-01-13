import React, {Component} from 'react';

class TensePage extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className="col-xs-12">
          <h2 className="text-center">Present</h2>
          <img className ="fullWidth" src={'/img/3.png'}/>
        </div>
        <div className="col-xs-12">
          <h2 className="text-center">Past</h2>
          <img className ="fullWidth" src={'/img/2.png'}/>
        </div>
        <div className="col-xs-12">
          <h2 className="text-center">Future</h2>
          <img className ="fullWidth" src={'/img/1.png'}/>
        </div>

      </div>
    );
  }
}

export default TensePage;