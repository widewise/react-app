import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export function FieldEditor({
  fieldKey, label, fieldType, fieldValue, placeHolder, onChange,
}) {
  return (
    <EditorPanel>
      <EditorLabel>{label}</EditorLabel>
      <EditorField
        id={fieldKey}
        key={fieldKey}
        type={fieldType}
        placeHolder={placeHolder}
        value={fieldValue}
        onChange={onChange}
      />
    </EditorPanel>
  );
}

FieldEditor.defaultProps = {
  placeHolder: '',
};

FieldEditor.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  fieldValue: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.string),
    ],
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
};

export default { EditorPanel, EditorLabel };
