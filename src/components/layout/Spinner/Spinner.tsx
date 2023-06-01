import { FC } from 'react';

import './LoadingSpinner.css';

interface Props {
  isLoadingPage?: boolean;
}

const LoadingSpinner: FC<Props> = ({ isLoadingPage = false }) => (
  <div
    data-testid="loader"
    className={isLoadingPage ? 'page-backdrop' : 'component-backdrop'}
  >
    <div
      className={`dark-loader-style ${
        isLoadingPage ? 'page-loader' : 'component-loader'
      }`}
    ></div>
  </div>
);

export default LoadingSpinner;
