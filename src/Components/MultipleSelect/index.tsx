import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
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

interface Props {
    optionValues: Array<string>,
    selectedValues: Array<string>,
    onChange: () => void,
}

const MultipleSelect: FunctionComponent<Props> = (
  { optionValues, selectedValues, onChange }: Props,
) => (
  <SelectField key="genre" value={selectedValues} placeholder="Select Genre" onChange={onChange}>
    <SelectMenu>
      <SelectOptions>
        {
  optionValues.map(
    (optionValue) => (
      <SelectOption
        optionValue={optionValue}
        isSelected={selectedValues.includes(optionValue)}
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

export default MultipleSelect;
