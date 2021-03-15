import React, { ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.h1`
  background-color: blue;
  color: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) : void {
    // eslint-disable-next-line no-console
    console.error(`${error}: ${errorInfo}`);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorMessage>Something went wrong.</ErrorMessage>;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
