import React from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';
import MovieEditor from '../../MovieEditor';
import useToggle from '../../../Hooks/useToggle';

const AddButton = styled.button`
    background-color: #55555599;
    height: 37px;
    color: #F65261;
    font-size: 20px;
    border-radius: 3px;
    margin: 10px;
    border: 0;
`;

function MovieAdd() {
  const [showModal, toggleShowModal] = useToggle();
  return (
    <>
      <AddButton onClick={() => toggleShowModal()}>
        + ADD MOVIE
      </AddButton>
      {showModal
      && (
      <Modal onCloseRequest={() => toggleShowModal()}>
        <MovieEditor onCloseRequest={() => toggleShowModal()} />
      </Modal>
      )}
    </>
  );
}

export default MovieAdd;
