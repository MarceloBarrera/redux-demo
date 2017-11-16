import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";

export class SimpleGridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: this.createColumnDefs(),
      rowData: this.createRowData(),
      rowSelection: "single"
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  createColumnDefs() {
    return [
      {headerName: "Make", field: "make",editable: true},
      {headerName: "Model", field: "model",editable: true},
      {headerName: "Price", field: "price",editable: true}
    ];
  }

  createRowData() {
    return [
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxter", price: 72000}
    ];
  }

  onSelectionChanged() {
    if(!this.gridApi)
      return;
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.athlete;
    });
    //document.querySelector("#selectedRows").innerHTML = selectedRowsString;
    console.log(selectedRowsString)
  }

  render() {
    let containerStyle = {
      height: 115,
      width: 500
    };

    return (
      <div style={containerStyle} className="ag-fresh">
        <h1>Simple ag-Grid React Example</h1>
        <AgGridReact
          id="myGrid"
          // properties
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}

          // events
          onGridReady={this.onGridReady}
          rowSelection={this.state.rowSelection}
          onSelectionChanged={this.onSelectionChanged.bind(this)}
        />

      </div>
    );
  }
}
export default SimpleGridExample;
