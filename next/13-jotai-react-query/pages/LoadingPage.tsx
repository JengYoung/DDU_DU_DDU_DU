import React from 'react';

interface ILoadingPage {
  children?: React.ReactNode;
}
const LoadingPage = ({ children }: ILoadingPage) => {
  return <div>{children}</div>;
};

export default LoadingPage;
