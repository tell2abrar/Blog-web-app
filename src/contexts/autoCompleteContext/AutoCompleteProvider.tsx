import { useMemo } from 'react';
import { AutoCompleteContext } from './AutoCompleteContext';
import { AutoCompleteProviderProps } from 'types';

export const AutoCompleteProvider = ({
  children,
  position,
  isLoading
}: AutoCompleteProviderProps) => {
  const store = useMemo(() => {
    return { isLoading, position };
  }, [isLoading, position]);

  return (
    <AutoCompleteContext.Provider value={{ ...store }}>{children}</AutoCompleteContext.Provider>
  );
};
