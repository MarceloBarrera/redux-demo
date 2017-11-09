import React from 'react';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        [{value: '', readOnly: true}, {value: 'ANSWERS', readOnly: true}, {value: 'CODES', readOnly: true}],
        [{value: 1, readOnly: true}, {value: 2}, {value: 3}],
        [{value: 2, readOnly: true}, {value: 2}, {value: 4}],
        [{value: 3, readOnly: true}, {value: 2}, {value: 4}]
      ]
    };
  }

  handlePaste(data) {
    // console.log("paste data :" + data);
    // data.map(d => console.log(d))
  }

  render() {
    return (
      <div className="sheet-container">
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onChange={(cell, rowI, colJ, value) => {
            this.setState({
              grid: this.state.grid.map((col) =>
                col.map((rowCell) =>
                  (rowCell === cell) ? ({value: value}) : rowCell
                )
              )
            });
          }}
          onPaste={this.handlePaste}
        />
      </div>
    );
  }
}


export default BasicTable;

