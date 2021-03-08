import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';

const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ModalOverlay = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    overflow-x: hidden;
    overflow-y: auto;
`;

const ModalBorder = styled.div`
    position: relative;
    width: 600px;
    min-height: 200px;
    background: #232323;
    border-radius: 3px;
    margin-top: 100px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
    margin: 60px;
`;

const CloseButtonModel = styled(CloseButton)`
    position: absolute;
    top: 10px;
    right: 10px;
`;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }

  render() {
    const {
      onCloseRequest,
      children,
    } = this.props;
    return (
      <>
        <GlobalStyle />
        <ModalOverlay>
          <ModalBorder>
            <CloseButtonModel onClick={onCloseRequest} sizeInPixels={32} />
            <ModalContent>
              {children}
            </ModalContent>
          </ModalBorder>
        </ModalOverlay>
      </>
    );
  }
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
