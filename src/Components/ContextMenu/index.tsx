import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Movie from '../../Models/movie';
import useToggle from '../../Hooks/useToggle';

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

interface Props {
  movie: Movie,
}

export const ContextMenu: FunctionComponent<Props> = ({ movie }: Props) => {
  const [showMenu, toggleShowMenu] = useToggle();

  return (
    <ContextMenuPanel>
      {showMenu
        ? <Menu onCloseRequest={() => toggleShowMenu()} movie={movie} />
        : <MenuButton type="button" onClick={() => toggleShowMenu()} />}
    </ContextMenuPanel>
  );
};

export default [ContextMenu, ContextMenuPanel];
