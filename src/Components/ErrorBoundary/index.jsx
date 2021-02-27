import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessage = styled.h1`
  background-color: blue;
  color: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(`${error}: ${errorInfo}`);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorMessage>Something went wrong.</ErrorMessage>;
    }

    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
