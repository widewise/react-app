/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import CloseButton, { Props } from './index';

export default {
  title: 'Components/CloseButton',
  component: CloseButton,
} as Meta;

const BackgroundPanel = styled.div`
  background-color: gray;
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: Story<Props> = (args) => (
  <BackgroundPanel>
    <CloseButton {...args} />
  </BackgroundPanel>
);

export const Small = Template.bind({});
Small.args = {
  onClick: () => { alert('Small close button'); },
  sizeInPixels: 20,
};

export const Big = Template.bind({});
Big.args = {
  onClick: () => { alert('Big close button'); },
  sizeInPixels: 32,
};
