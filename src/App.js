import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json"
import Modal from 'react-bootstrap/Modal'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      modalSrc: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false
    });
  }

  handleOpenModal = (src, title) => {
    this.setState({
      isModalOpen: true,
      src: src,
      title: title
    });
  }
  render() {
    return (
      <>
      <Header/>
      <Main data={data}
      handleOpenModal={this.handleOpenModal}/>
      <Footer/>
      <Modal
      show={this.state.isModalOpen}
      onHide={this.handleCloseModal}>
        <Modal.Header><h2>{this.state.title}</h2></Modal.Header>
        <Modal.Body>
          <img src={this.state.src}/>
        </Modal.Body>
      </Modal>
      </>
    )
  }
};


export default App;

