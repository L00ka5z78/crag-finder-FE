import { useEffect, useRef } from 'react';

export const useDocumentTitle = (title: string, prevailOnUnmount = true) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  });
};