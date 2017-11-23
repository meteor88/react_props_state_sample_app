import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.multiply = this.multiply.bind(this);
    this.division = this.division.bind(this);

  }

  plus() {
    let result = parseInt(this.props.aValue) + parseInt(this.props.bValue);
    this.props.onResult(result);
  }

  minus() {
    let result = parseInt(this.props.aValue) - parseInt(this.props.bValue);
    this.props.onResult(result);
  }

  multiply() {
    let result = parseInt(this.props.aValue) * parseInt(this.props.bValue);
    this.props.onResult(result);
  }

  division() {
    let result = parseInt(this.props.aValue) / parseInt(this.props.bValue);
    this.props.onResult(result);
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.plus}>더하기</button>
        <button type="button" className="btn btn-secondary" onClick={this.minus}>빼기</button>
        <button type="button" className="btn btn-success" onClick={this.multiply}>곱하기</button>
        <button type="button" className="btn btn-danger" onClick={this.division}>나누기</button>

      </div>
    );
  }
}

export default Buttons;