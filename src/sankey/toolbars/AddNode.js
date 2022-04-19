import React from 'react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: `Node${nextProps.nodes.length}`
    });
  }

  handleChange(key) {
    return (e) => {
      const state = {};

      state[key] = e.target.value;
      this.setState(state);
    };
  }

  render() {
    const defaultValue = this.state.name;

    return (
      <div className='input-group'>
        <input
          className='form-control'
          value={defaultValue}
          onChange={this.handleChange('name')}
        />
        <span className='input-group-btn'>
          <button
            className='btn btn-primary'
            onClick={this.props.addNode.bind(null, this.state.name)}
          >
            Add Node
          </button>
        </span>
      </div>
    );
  }
}
