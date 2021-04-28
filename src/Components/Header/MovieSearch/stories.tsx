/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Route } from 'react-router';
import MovieSearch, { Props } from './index';

export default {
  title: 'Components/MovieSearch',
  component: MovieSearch,
  decorators: [StoryRouter()],
} as Meta;

const SearchPanel = styled.div`
  background-color: #424242;
  color: #FFFFFF;
  width: 700px;
  padding: 20px;
`;

const SearchLocation = styled.div`
  padding-top: 20px;
`;

const Template: Story<Props> = (args) => (
  <SearchPanel>
    <MovieSearch {...args} />
    <Route
      render={({ history }) => (
        <SearchLocation>
          Location path:
          {history.location.pathname}
        </SearchLocation>
      )}
    />
  </SearchPanel>
);

export const Example = Template.bind({});
Example.args = {
  search: 'Movie',
};
