import React, {
  FunctionComponent, ReactChild, ReactFragment, ReactPortal,
} from 'react';
import styled from 'styled-components';

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

interface Props {
  optionValue: string,
  isSelected: boolean,
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined,
}

const SelectOption:FunctionComponent<Props> = (
  { optionValue, isSelected, children }: Props,
) => (
  <SelectOptionItem>
    <OptionLabel>
      <input
        type="checkbox"
        id={optionValue}
        checked={isSelected}
      />
      {children}
    </OptionLabel>
  </SelectOptionItem>
);

export default SelectOption;
