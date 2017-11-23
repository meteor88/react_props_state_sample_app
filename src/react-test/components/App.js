import React from 'react';
import Inputs from './Inputs';
import Buttons from './Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      inputA: 0,
      inputB: 0
    }

    this.setResultValue = this.setResultValue.bind(this);
    this.setA = this.setA.bind(this);
    this.setB = this.setB.bind(this);
  }

  setResultValue(result) {
    this.setState({ result: result });
  }

  setA(value) {
    this.setState({ inputA: value });
  }

  setB(value) {
    this.setState({ inputB: value });
  }

  render() {
    return (
      <div>
        <div className="col-lg-6">
          <Inputs aValue={this.setA} bValue={this.setB}></Inputs>
          <br />
          <Buttons onResult={this.setResultValue} aValue={this.state.inputA} bValue={this.state.inputB}></Buttons>
          <br />
          <br />
          <div className="input-group">
            <span className="input-group-addon" id="result">RESULT</span>
            <input type="text" className="form-control" placeholder="결과 보여주는곳 ..." aria-label="Username" aria-describedby="result" value={this.state.result} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;