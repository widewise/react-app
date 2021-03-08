import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

const SelectField = styled.select`
    text-transform: uppercase;
    flex: 1;
    background-color: #424242;
    border: 0;
    color: #FFFFFF;
    height: 38px;
`;

const SelectMenu = styled.div`
    max-height: 180px;
    padding: 3px 0;
    border-radius: 0 0 3px 3px;
    background-color: #424242;
    overflow-x: hidden;
    overflow-y: auto;
    pointer-events: none;
`;

const SelectOptions = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export default function MultipleSelect({ optionValues, selectedValues, onChange }) {
  return (
    <SelectField key="genre" value={selectedValues} placeholder="Select Genre" onChange={onChange}>
      <SelectMenu>
        <SelectOptions>
          {
  optionValues.map(
    (optionValue) => (
      <SelectOption
        optionValue={optionValue}
        isSelected={selectedValues.include(optionValue)}
      >
        {optionValue}
      </SelectOption>
    ),
  )
}
        </SelectOptions>
      </SelectMenu>
    </SelectField>
  );
}

MultipleSelect.propTypes = {
  optionValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
