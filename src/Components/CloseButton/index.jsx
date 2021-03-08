import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    position: relative;
`;

const ButtonLine1 = styled.div`
    background-color: #FFFFFF;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%) rotate(45deg);
    height: 1px;
    width: 100%;
`;

const ButtonLine2 = styled.div`
    background-color: #FFFFFF;
    left: 50%;
    position: absolute;
    top: 0px;
    transform: translate(-50%, 0%) rotate(45deg);
    height: 100%;
    width: 1px;
`;

export default function CloseButton({ className, onClick, sizeInPixels }) {
  return (
    <Button
      className={className}
      type="button"
      onClick={onClick}
      size={sizeInPixels}
    >
      <ButtonLine1 />
      <ButtonLine2 />
    </Button>
  );
}

CloseButton.defaultProps = {
  className: '',
};

CloseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  sizeInPixels: PropTypes.number.isRequired,
};
