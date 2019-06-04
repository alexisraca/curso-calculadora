import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      history: [],
      currentValue: "",
      operation: [],
      nextValue: ""
    }
  }

  clearData() {
    let pushableHistory = this.state.operation.length ?
                              this.state.history.push(this.state.operation) :
                              null
    this.setState({
      currentValue: "",
      history: pushableHistory || this.state.history,
      operation: [],
      nextValue: "",
      result: ""
    })
  }

  buildNumberClick(number, newOperationValue = this.state.operation) {
    return (event) => {
      newOperationValue.push(this.state.nextValue)
      this.setState({
        currentValue: newOperationValue.join("") + number,
        operation: newOperationValue,
        nextValue: number,
      })
    }
  }

  sumEvent(event, newOperationValue = this.state.operation) {
    if(this.state.nextValue && !isNaN(parseInt(this.state.nextValue))) {
      newOperationValue.push(this.state.nextValue)
    }

    this.setState({
      currentValue: newOperationValue.join("") + "+",
      operation: newOperationValue,
      nextValue: "+"
    })
  }

  resultEvent(event, newOperationValue = this.state.operation) {
    if(this.state.nextValue && !isNaN(parseInt(this.state.nextValue))) {
      newOperationValue.push(this.state.nextValue)
    }
    this.setState({
      currentValue: "",
      result: eval(newOperationValue.join("")),
      operation: newOperationValue,
      nextValue: ""
    })
  }

  render() {
    return(
      <div>
        <div className="viewport">{this.state.currentValue || this.state.result}</div>
        <div>
          <button className="clear" onClick={this.clearData.bind(this)}>C</button>
          <button className="sum" onClick={this.sumEvent.bind(this)}>+</button>
          <button className="result" onClick={this.resultEvent.bind(this)}>=</button>
        </div>
        <div>
          <button className="number" onClick={this.buildNumberClick("1")}>1</button>
          <button className="number" onClick={this.buildNumberClick("2")}>2</button>
          <button className="number" onClick={this.buildNumberClick("3")}>3</button>
        </div>
        <div>
          <button className="number" onClick={this.buildNumberClick("4")}>4</button>
          <button className="number" onClick={this.buildNumberClick("5")}>5</button>
          <button className="number" onClick={this.buildNumberClick("6")}>6</button>
        </div>
        <div>
          <button className="number" onClick={this.buildNumberClick("7")}>7</button>
          <button className="number" onClick={this.buildNumberClick("8")}>8</button>
          <button className="number" onClick={this.buildNumberClick("9")}>9</button>
        </div>
        <div>
          <button className="number" onClick={this.buildNumberClick("0")}>0</button>
        </div>
      </div>
    )
  }
}