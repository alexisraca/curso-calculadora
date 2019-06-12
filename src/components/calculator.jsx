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

  clearData(event, pushableHistory = this.state.history) {
    this.state.operation.length && pushableHistory.push(this.state.operation)
                              
    this.setState({
      currentValue: "",
      history: pushableHistory,
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
    console.log(this.state.history)
    return(
      <div className="container">
        <div className="body-container">
          <div className="viewport">
            <p>
              {this.state.currentValue || this.state.result}
            </p>
          </div>
          <div className="buttons-container">
            <button className="clear" onClick={this.clearData.bind(this)}>C</button>
            <button className="sum" onClick={this.sumEvent.bind(this)}>+</button>
            <button className="result" onClick={this.resultEvent.bind(this)}>=</button>
          </div>
          <div className="buttons-container">
            <button className="number" onClick={this.buildNumberClick("1")}>1</button>
            <button className="number" onClick={this.buildNumberClick("2")}>2</button>
            <button className="number" onClick={this.buildNumberClick("3")}>3</button>
          </div>
          <div className="buttons-container">
            <button className="number" onClick={this.buildNumberClick("4")}>4</button>
            <button className="number" onClick={this.buildNumberClick("5")}>5</button>
            <button className="number" onClick={this.buildNumberClick("6")}>6</button>
          </div>
          <div className="buttons-container">
            <button className="number" onClick={this.buildNumberClick("7")}>7</button>
            <button className="number" onClick={this.buildNumberClick("8")}>8</button>
            <button className="number" onClick={this.buildNumberClick("9")}>9</button>
          </div>
          <div className="buttons-container">
            <button className="number" onClick={this.buildNumberClick("0")}>0</button>
          </div>
        </div>
        <div className="history">
          <h5>
            HISTORIAL
          </h5>
          {
            this.state.history.map((x, index) => {
              return(<p className="history-element" key={index}>{x.join("")}</p>)
            })
          }
        </div>
      </div>
    )
  }
}