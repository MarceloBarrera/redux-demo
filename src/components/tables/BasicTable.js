import React from 'react';
import ReactDom from 'react-dom';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

import { Scrollbars } from 'react-custom-scrollbars';

import ReactScrollbar from 'react-scrollbar-js';


class BasicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: this.createData(),
      itemsCount: 40
    };
  }

  createData() {
    let header = [{value: '', readOnly: true}, {value: 'ANSWERS', readOnly: true}, {value: 'CODES', readOnly: true}];
    let gridData = [];
    gridData.push(header);
    for (let i = 0; i < 100; i++) {
      gridData.push([{value: i + 1, readOnly: true}, {value: i + 2}, {value: i + 5}]);
    }
    return gridData;
  }

  render() {
    let itemElements = [];
    for (var i = 0; i < this.state.itemsCount; i++) {
      itemElements.push(<div key={i}>item {i}</div>);
    }
    let myScrollbar = {
      width: 400,
      height: 400
    };

    return (

      <div>
        <ReactScrollbar style={myScrollbar}>
          <div className="react-scrollbar-default">
            {itemElements }
          </div>
        </ReactScrollbar>

        <Scrollbars style={{ width: 500, height: 300 }}>
          {itemElements }
        </Scrollbars>
          <div className="sheet-container">
            <ReactScrollbar style={{ width: 500, height: 300 }}>
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
                overflow="clip"/>
            </ReactScrollbar>
          </div>

      </div>
    )
  }

  handlePaste(data) {
    console.log("paste data :" + data);
    data.map(d => console.log(d))
  }

}


export default BasicTable;

