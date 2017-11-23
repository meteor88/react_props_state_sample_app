import React from 'react';

class Inputs extends React.Component {

  aChangeEvent(e) {
    this.props.aValue(e.target.value);
  }

  bChangeEvent(e) {
    this.props.bValue(e.target.value);
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon" id="inputA">A</span>
        <input type="text" className="form-control" placeholder="숫자 1"
          aria-label="Username" aria-describedby="inputA" onChange={this.aChangeEvent.bind(this)} />
        <span className="input-group-addon" id="inputB">B</span>
        <input type="text" className="form-control" placeholder="숫자 2"
          aria-label="Username" aria-describedby="inputB" onChange={this.bChangeEvent.bind(this)} />
      </div>

    );
  }
}

export default Inputs;