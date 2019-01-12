import React, {Component} from 'react';

class MainLayout extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="panel panel-default">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;