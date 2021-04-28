/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import {
  withKnobs, number,
} from '@storybook/addon-knobs';
import Modal, { Props } from './index';

export default {
  title: 'Components/Modal',
  component: Modal,
  decorators: [withKnobs],
} as Meta;

const TextBox = styled.textarea`
  background-color: gray;
  color: #FFF;
  max-width: 450px;
  ::placeholder {
    color: #BBB;
  }
`;

const Template: Story<Props> = (args) => (
  <Modal {...args}>
    <TextBox
      name="Text1"
      placeholder="Please enter text"
      cols={number('cols', 55, { min: 15, max: 55 })}
      rows={number('rows', 5, { min: 5, max: 25 })}
    />
  </Modal>
);

export const Example = Template.bind({});
Example.args = {
  onCloseRequest: () => { alert('Modal is closed'); },
};
