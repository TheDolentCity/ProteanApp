import React from 'react';

export default class ProteanErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error
  componentDidCatch(error, errorInfo) {
    console.log(`ERROR:${error}`);
    // console.log(`ERROR_INFO:${JSON.stringify(errorInfo)}`);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackUI;
    }

    return this.props.children;
  }
}