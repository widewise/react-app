import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';
import { MovieEditor } from '../../MovieEditor';

const AddButton = styled.button`
    background-color: #55555599;
    height: 37px;
    color: #F65261;
    font-size: 20px;
    border-radius: 3px;
    margin: 10px;
    border: 0;
`;

class MovieAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    return (
      <>
        <AddButton onClick={() => this.handleToggleModal()}>+ ADD MOVIE</AddButton>
        {showModal
        && (
        <Modal onCloseRequest={this.handleToggleModal}>
          <MovieEditor onCloseRequest={this.handleToggleModal} />
        </Modal>
        )}
      </>
    );
  }
}

export default MovieAdd;
