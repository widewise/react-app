/* eslint-disable react/jsx-props-no-spreading */
import { useField, FieldHookConfig, FormikProps } from 'formik';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Select, { ValueType } from 'react-select';
import Movie from '../../../Models/movie';

export const EditorPanel = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const EditorFirstRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const EditorLabel = styled.label`
    color: #F65261;
    font-size: 20px;
    margin: 10px 0;
`;

export const ValidationMessage = styled.label`
    color: #F65261;
    flex: 1;
    font-size: 13px;
    text-align: right;
`;

const EditorSelect = styled(Select)`
    color: 'black';
    text-transform: uppercase;
    flex: 1;
    border: 0;
    height: 38px;
`;

export interface SelectOptionType {
  label: string,
  value: string,
}

type Props = FieldHookConfig<string> & {
  label: string,
  formProps: FormikProps<Movie>
  options: Array<SelectOptionType>,
  isMulti: boolean,
};

export const SelectEditor: FunctionComponent<Props> = (props: Props) => {
  const [field, meta] = useField(props);
  const {
    label, options, isMulti, name, placeholder, formProps,
  } = props;

  const onChange = (option: ValueType<SelectOptionType | SelectOptionType[], boolean>) => {
    formProps.setFieldValue(
      field.name,
      isMulti
        ? (option as SelectOptionType[]).map((item: SelectOptionType) => item.value)
        : (option as SelectOptionType).value,
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    }
    return isMulti ? [] : ('' as unknown);
  };

  return (
    <EditorPanel>
      <EditorFirstRow>
        <EditorLabel htmlFor={name}>{label}</EditorLabel>
        <ValidationMessage>{meta.error || ''}</ValidationMessage>
      </EditorFirstRow>
      { /* // PATTERN: JSX spread attributes */ }
      <EditorSelect
        {...field}
        name={name}
        placeholder={placeholder}
        options={options}
        defaultValue={getValue()}
        value={getValue()}
        onChange={onChange}
        isMulti={isMulti}
      />
    </EditorPanel>
  );
};

export default SelectEditor;
