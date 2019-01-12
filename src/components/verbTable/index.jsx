import React, {Component} from 'react';
import Checkbox from 'rc-checkbox';

import 'rc-checkbox/assets/index.css';

class VerTable extends Component {

  handleOnChange = (e) => {
    this.props.onChange(e)
  };

  render() {
    const getRow = ({first, second, third, translate, id, toShow}) => {
      return (
        <tr key={id}
            onClick={e => this.handleOnChange({target: {name: id, checked: !toShow}})}
        >
          <th>
            <Checkbox
              name={id}
              checked={toShow}
              onChange={this.handleOnChange}
            />
          </th>
          <td>{first}</td>
          <td>{second}</td>
          <td>{third}</td>
          <td>{translate}</td>
        </tr>

      )
    };
    return (
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">to test</th>
          <th scope="col">Infinitive</th>
          <th scope="col">Past</th>
          <th scope="col">Past participle</th>
          <th scope="col">Translate</th>
        </tr>
        </thead>
        <tbody>
        {this.props.verbs.map(i => getRow(i))}
        </tbody>
      </table>
    );
  }
}

export default VerTable;