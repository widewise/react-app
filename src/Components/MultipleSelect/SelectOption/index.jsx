import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectOptionItem = styled.li`
    display: flex;
    align-items: center;
    padding: 4px 8px;
    font-size: 14px;
    text-indent: 4px;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;

    &:hover {
        background: #F65261;
    }
`;

const OptionLabel = styled.label`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export default function SelectOption({
  optionValue, isSelected, children,
}) {
  return (
    <SelectOptionItem>
      <OptionLabel for={optionValue}>
        <input
          type="checkbox"
          id={optionValue}
          checked={isSelected}
        />
        {children}
      </OptionLabel>
    </SelectOptionItem>
  );
}

SelectOption.propTypes = {
  optionValue: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
