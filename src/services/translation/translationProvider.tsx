import { FC, PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';

import pl from './locale/pl.json';

import { ITranslationProviderProps } from './translation-provider-props';

export const TranslationProvider: FC<
  PropsWithChildren<ITranslationProviderProps>
> = ({ locale = 'pl', defaultLocale = 'pl', translations = pl, children }) => {
  return (
    <IntlProvider
      messages={translations}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
};
