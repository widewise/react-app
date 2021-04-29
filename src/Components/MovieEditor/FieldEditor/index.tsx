/* eslint-disable react/jsx-props-no-spreading */
import { useField, FieldHookConfig } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const EditorPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const EditorFirstRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const EditorLabel = styled.label`
    color: #F65261;
    font-size: 20px;
    margin: 10px 0;
`;

const ValidationMessage = styled.label`
    color: #F65261;
    flex: 1;
    font-size: 13px;
    text-align: right;
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

type Props = FieldHookConfig<string> & {
  label: string
};

export const FieldEditor: FunctionComponent<Props> = (props: Props) => {
  const [field, meta] = useField(props);
  const {
    label, name, type, placeholder,
  } = props;
  return (
    <EditorPanel>
      <EditorFirstRow>
        <EditorLabel htmlFor={name}>{label}</EditorLabel>
        <ValidationMessage>{meta.error || ''}</ValidationMessage>
      </EditorFirstRow>
      { /* // PATTERN: JSX spread attributes */ }
      <EditorField {...field} name={name} type={type} placeholder={placeholder} />
    </EditorPanel>
  );
};

export default FieldEditor;
