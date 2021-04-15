import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectEditor, { SelectOptionType } from './index';
import userEvent from '@testing-library/user-event';

const label = 'select editor label';
const options: Array<SelectOptionType> = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
];

const formProps= {
    name: 'selectValue',
    placeholder: 'select value'
};
const fieldMock = {};
const metaMock = {};
const helperMock = {};

jest.mock("formik", () => ({
  ...jest.requireActual("formik"),
  useField: jest.fn(() => {
    return [fieldMock, metaMock, helperMock];
  }),
}));

describe('SelectEditor', () => {
    it('render simple selector snapshot', () => {
        {/*
        // @ts-ignore */}
        const { asFragment } = render(<SelectEditor label={label} isMulti={false} options={options} formProps={formProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
