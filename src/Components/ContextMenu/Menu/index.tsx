import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import CloseButton from '../../CloseButton';
import Movie from '../../../Models/movie';
import Modal from '../../Modal';
import MovieEditor from '../../MovieEditor';
import MovieDelete from '../../MovieDelete';

const MenuListPanel = styled.div`
    background-color: #424242;
    width: 100px;
    border-radius: 5px;
`;

const MenuHeaderPanel = styled.div`
    display: flex;
    padding: 5px 5px 0 5px;
`;

const MenuHeader = styled.h6`
    font-size: 3px;
    flex: 1;
`;

const MenuList = styled.ul`
    padding: 0;
    padding-bottom: 10px;
`;

const MenuItem = styled.li`
    list-style:none;
    background-image:none;
    background-repeat:none;
    background-position:0;
    padding: 5px 15px;
    :hover {
        background: #F65261;
    }
`;

interface Props {
  onCloseRequest: () => void,
  movie: Movie,
}

const Menu: FunctionComponent<Props> = ({ onCloseRequest, movie }: Props) => {
  const [state, setState] = useState('start');
  return (
    <>
      {(state === 'start' || state === 'deleteMovie')
      && (
      <MenuListPanel>
        <MenuHeaderPanel>
          <MenuHeader />
          <CloseButton onClick={() => onCloseRequest()} sizeInPixels={18} />
        </MenuHeaderPanel>
        <MenuList>
          <MenuItem onClick={() => setState('editMovie')}>EDIT</MenuItem>
          <MenuItem onClick={() => setState('deleteMovie')}>DELETE</MenuItem>
        </MenuList>
      </MenuListPanel>
      )}
      {state === 'editMovie' && (
      <Modal onCloseRequest={onCloseRequest}>
        <MovieEditor onCloseRequest={onCloseRequest} movie={movie} />
      </Modal>
      )}
      {state === 'deleteMovie' && (
      <Modal onCloseRequest={onCloseRequest}>
        <MovieDelete onCloseRequest={onCloseRequest} />
      </Modal>
      )}
    </>
  );
};

export default Menu;
