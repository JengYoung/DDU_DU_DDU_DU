import React, { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

type TRenderFallback = <E extends Error>(error: E, reset: () => void) => ReactNode;
interface IErrorBoundaryProps<Key = unknown, E extends Error = Error> extends PropsWithChildren {
  keys?: Key[];
  renderFallback: TRenderFallback;
  onError?(error: E): void;
}

interface IErrorBoundaryState {
  isFetching: boolean;
  isRestoring: boolean;
  isError: boolean;
  error: Error | null;
}

const getInitialState = () => ({
  error: null,
  isError: false,
  isFetching: false,
  isRestoring: false,
});

export class DefaultErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = getInitialState();
  }

  static getDerivedStateFromError(error: Error) {
    return { error, isError: true, isFetching: false, isRestoring: false };
  }

  reset() {
    this.state = getInitialState();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    this.props.onError && this.props.onError(error);
  }

  render() {
    if (this.state.isError) {
      return (
        <div>
          <p>다시 호출하기</p>
          <button
            onClick={() => this.props.renderFallback(this.state.error as Error, this.reset)}
          />
        </div>
      );
    }

    return this.props.children;
  }
}
