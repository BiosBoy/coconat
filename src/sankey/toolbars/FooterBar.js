import React from 'react';
import { ExportJSON, ImportJSON } from '../utils';

export default class extends React.Component {
  render() {
    return (
      <div className="toolBar toolBar--footer">
        <div className="row">
          <div className="col-xs-5">
          </div>
          <div className="col-xs-7">
            <button className="btn btn-success pull-right startNew" onClick={this.props.emptyDiagram}>New Diagram</button>
            <ExportJSON 
              nodes={this.props.nodes}
              links={this.props.links}
            />
            <ImportJSON readFile={this.readFile}/>
            <div className="clearFix"></div>
          </div>
        </div>
      </div>
    );
  }
};

