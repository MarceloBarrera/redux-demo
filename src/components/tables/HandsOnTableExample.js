import React, { Component } from 'react';

import HotTable from 'react-handsontable';


class HandsOnTableExample extends Component {
  createData() {
    let gridData = [];
    for (let i = 0; i < 100; i++) {
      gridData.push(["answer"+i+1,"code"+i+1]);
    }
    return gridData;
  }

  constructor(props) {
    super(props);
    this.handsontableData =  this.createData();
    // this.handsontableData = [
    //   ["answer1","code1"],
    //   ["answer2","code2"],
    //   ["answer3","code3"]
    // ];
    this.tableContainer = null;
  }

  colHeaders(col) {
    switch (col) {
      case 0:
        return 'ANSWERS';
      case 1:
        return 'CODES';
    }
  }

  rowHeaders(index) {
    return index+1;
  }

  static firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
    console.log('firstRowRenderer:');
    //instance.renderers.TextRenderer.apply(this, arguments);
    // td.style.fontWeight = 'bold';
    // td.style.color = 'green';
    // td.style.background = '#CEC';
  }

  cellsSettings(row, col, prop) {
    console.log('cellsSettins:');
    var cellProperties = {};
    if (row === 0) {
      console.log('cellsSettins:0');
      //cellProperties.renderer = HandsOnTableExample.firstRowRenderer; // uses function directly
      return cellProperties;
    }
    return cellProperties;
  }


  render() {
    return (
      <div id="example-component">
        <HotTable settings={{
          data: this.handsontableData,
          colHeaders: this.colHeaders,
          rowHeaders: this.rowHeaders,
          //cells: this.cellsSettings,
          colWidths: [300, 300],
          rowHeaderWidth: 20,
          width: 638,
          height: 320,
          currentColClassName: 'currentCol',
          currentRowClassName: 'currentRow'
          // disableVisualSelection: ['current']
          // rowHeights: [20, 40, 100]
        }}/>
      </div>
    );
  }

}

export default HandsOnTableExample;
