import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <TranslationProvider>
      <Router>{children}</Router>
    </TranslationProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
