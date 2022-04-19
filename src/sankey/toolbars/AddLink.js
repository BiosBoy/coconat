import React from 'react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      source: NaN,
      target: NaN,
      weight: 'Weight'
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }

  handleChange(key) {
    return (e) => {
      const state = {};

      state[key] = parseInt(e.target.value);
      this.setState(state);
    };
  }

  clearInput() {
    this.setState({ weight: '' });
  }

  setDefault() {
    if (typeof this.state.weight !== 'number') {
      this.setState({ weight: 'Weight' });
    }
  }

  render() {
    const sourceNodes = this.props.nodes
      .map((node, i) => {
        return <option value={node.node} key={i}>{node.name}</option>;
      });

    sourceNodes.unshift(<option value={NaN} key='000'>Select Source</option>);

    const targetNodes = this.props.nodes
      .filter((node, i) => {
        return node.node !== this.state.source;
      })
      .map((node, i) => {
        return <option value={node.node} key={i}>{node.name}</option>;
      });

    targetNodes.unshift(<option value={NaN} key='000'>Select Target</option>);

    return (
      <div className='input-group'>
        <div className='input-group-btn'>
          <select
            className='btn btn-default'
            onChange={this.handleChange('source')}
          >
            {sourceNodes}
          </select>

          <select
            className='btn btn-default'
            onChange={this.handleChange('target')}
          >
            {targetNodes}
          </select>
        </div>

        <input
          className='form-control'
          value={this.state.weight}
          onFocus={this.clearInput}
          onBlur={this.setDefault}
          onChange={this.handleChange('weight')}
        />

        <div className='input-group-btn'>
          <button
            className='btn btn-primary'
            onClick={this.props.addLink.bind(null, parseInt(this.state.source), parseInt(this.state.target), parseInt(this.state.weight))}
          >
            Add Link
          </button>
        </div>
      </div>
    );
  }
}
