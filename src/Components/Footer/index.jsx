import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import Title from '../Title';

const FooterPanel = styled.footer`
    background-color: #424242;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export default function Footer() {
  return (
    <FooterPanel>
      <Container>
        <Title />
      </Container>
    </FooterPanel>
  );
}
