import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  size: number
}

const Button = styled.button`
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    height: ${(props: ButtonProps) => props.size}px;
    width: ${(props: ButtonProps) => props.size}px;
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

export interface Props {
  // eslint-disable-next-line react/require-default-props
  className?: string,
  onClick: () => void,
  sizeInPixels: number,
}

const CloseButton: FunctionComponent<Props> = ({ className = '', onClick, sizeInPixels }: Props) => (
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

export default CloseButton;
