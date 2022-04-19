import React from 'react';
import AddNode from './AddNode';
import AddLink from './AddLink';

export default class extends React.Component {
  render() {
    return (
      <div className="toolBar toolBar--top">
        <div className="row">
          <div className="col-xs-4">
            <AddNode addNode={this.props.addNode} nodes={this.props.nodes} />
          </div>
          <div className="col-xs-8">
            <AddLink addLink={this.props.addLink} nodes={this.props.nodes} />
          </div>
        </div>
      </div>
    );
  }
};

