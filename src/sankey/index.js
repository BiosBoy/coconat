import React from 'react';
import Modal from 'react-modal';

import { loadData, readFile } from './utils';

import TopBar from './toolbars/TopBar';
import SankeyChart from './SankeyChart';
import FooterBar from './toolbars/FooterBar';

import 'bootstrap/dist/css/bootstrap.css';
import './sankey.css';

const MODAL_STYLES = {
  content: {
    top: '275px',
    left: '37%',
    right: 'auto',
    bottom: 'auto',
    border: '0px solid #333',
    width: '300px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0 , 0.35)'
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nodes: [],
      links: [],
      modalIsOpen: false
    };

    this.loadData = loadData.bind(this);
    this.readFile = readFile.bind(this);

    this.emptyDiagram = this.emptyDiagram.bind(this);

    this.addNode = this.addNode.bind(this);
    this.updateNode = this.updateNode.bind(this);
    this.addLink = this.addLink.bind(this);
    this.updateLink = this.updateLink.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeAndSaveModal = this.closeAndSaveModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.loadData('./sampleData.json');
  }

  emptyDiagram() {
    this.loadData('./emptyData.json');
  }

  addNode(name) {
    const nodes = this.state.nodes;
    const idx = nodes.length;

    const nameTo = name || 'Node' + idx;

    nodes[idx] = {
      node: idx,
      name: nameTo
    };

    this.setState({ nodes });
  }

  updateNode(name, idx) {
    const { nodes } = this.state;

    nodes[idx]['name'] = name;

    this.setState({ nodes });
  }

  addLink(source, target, value) {
    if (this.state.nodes.length > 1 && !isNaN(value) && !isNaN(source) && !isNaN(target)) {
      const { links } = this.state;
      const idx = links.length;

      links[idx] = { source, target, value };
      this.setState({ links });
    }
  }

  updateLink(source, target, value) {
    const links = this.state.links.map((link) => {
      if (link.source === source && link.target === target) {
        link.value = value;
      }
      return link;
    });

    this.setState({ links });
  }

  openModal(e) {
    let modalContent = null;
    let modalContentNodeId = null;
    let modalContentNodeName = null;
    let modalContentLinkValue = null;
    let modalContentLinkSource = null;
    let modalContentLinkTarget = null;

    if (e.node !== undefined) {
      modalContent = 'node';
      modalContentNodeId = e.node;
      modalContentNodeName = e.name;
    } else if (e.value !== undefined) {
      modalContent = 'link';
      modalContentLinkValue = e.value;
      modalContentLinkSource = e.source.node;
      modalContentLinkTarget = e.target.node;
    }

    this.setState({
      modalIsOpen: true,
      modalContent,
      modalContentNodeId,
      modalContentNodeName,
      modalContentLinkValue,
      modalContentLinkSource,
      modalContentLinkTarget
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  closeAndSaveModal() {
    if (this.state.modalContent === 'link') {
      this.updateLink(this.state.modalContentLinkSource,this.state.modalContentLinkTarget,this.state.modalContentLinkValue);
    } else if (this.state.modalContent === 'node') {
      this.updateNode(this.state.modalContentNodeName, this.state.modalContentNodeId);
    }
    this.setState({ modalIsOpen: false });
  }

  handleInputChange(key) {
    if (this.state.modalContent === 'link') {
      this.setState({ modalContentLinkValue: key.target.value });
    } else if (this.state.modalContent === 'node') {
      this.setState({ modalContentNodeName: key.target.value });
    }
  }

  render() {
    let modalValue = null;
    let header = null;

    if (this.state.modalContent === 'link') {
      modalValue = this.state.modalContentLinkValue;
      header = 'Update Link Weight';
    } else if (this.state.modalContent === 'node') {
      modalValue = this.state.modalContentNodeName;
      header = 'Update Node Name';
    }

    return (
      <div>
        <TopBar
          nodes={this.state.nodes}
          links={this.state.links}
          addLink={this.addLink}
          addNode={this.addNode}
          openModal={this.openModal}
        />
        <SankeyChart nodes={this.state.nodes} links={this.state.links} openModal={this.openModal}/>
        <FooterBar
          nodes={this.state.nodes}
          links={this.state.links}
          readFile={this.readFile}
          emptyDiagram={this.emptyDiagram}
        />
        <Modal
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
          style={MODAL_STYLES}>
          <button className='close' onClick={this.closeModal}>
            <span aria-hidden='true'>&times;</span>
          </button>
          <h4>{header}</h4>
          <hr />
          <input
            className='form-control'
            defaultValue={modalValue}
            onChange={this.handleInputChange}
          />
          <hr />
          <div className='row'>
            <div className='col-xs-12'>
              <button className='btn btn-primary btn-block' onClick={this.closeAndSaveModal}>Apply Changes</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default App;
