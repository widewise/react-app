import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from './Menu';
import { Movie } from '../../Models/movie';

export const ContextMenuPanel = styled.div`
    opacity: 0;
    transition: opacity .3s;

    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
`;

const MenuButton = styled.button`
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: 50%;

    background: #424242;
    background-image:
        radial-gradient(#FFFFFF 2px, transparent 2px),
        radial-gradient(#FFFFFF 2px, transparent 2px),
        radial-gradient(#FFFFFF 2px, transparent 2px);
    background-position:
        center -7px,
        center center,
        center 7px;
`;

export class ContextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  handleToggleMenu() {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { showMenu } = this.state;
    const { movie } = this.props;
    return (
      <ContextMenuPanel>
        {showMenu
          ? <Menu onCloseRequest={() => this.handleToggleMenu()} movie={movie} />
          : <MenuButton type="button" onClick={() => this.handleToggleMenu()} />}
      </ContextMenuPanel>
    );
  }
}

ContextMenu.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};

export default { ContextMenu, ContextMenuPanel };
