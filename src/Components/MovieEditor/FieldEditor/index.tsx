import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const EditorPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const EditorLabel = styled.label`
    color: #F65261;
    width: 100%;
    font-size: 20px;
    margin: 10px 0;
`;

const EditorField = styled.input`
    background-color: #424242;
    border: 0;
    flex: 1;
    height: 38px;
    padding-left: 10px;
    color: #FFFFFF;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #EEEEEE;
    }
    :-ms-input-placeholder {
      color: #EEEEEE;
    }
    border-radius: 3px;
`;

interface Props {
  fieldKey: string,
  label: string,
  fieldType: string,
  fieldValue: string | number | Array<string>,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  placeHolder: string
}

export const FieldEditor: FunctionComponent<Props> = ({
  fieldKey, label, fieldType, fieldValue, placeHolder, onChange,
}: Props) => (
  <EditorPanel>
    <EditorLabel>{label}</EditorLabel>
    <EditorField
      id={fieldKey}
      key={fieldKey}
      type={fieldType}
      placeholder={placeHolder}
      value={fieldValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
    />
  </EditorPanel>
);

export default [FieldEditor, EditorPanel, EditorLabel];
