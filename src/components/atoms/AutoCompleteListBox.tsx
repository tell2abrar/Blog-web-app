import { CircularProgress, Stack } from '@mui/material';
import { useAutoCompleteContextContext } from 'contexts';
import { ListBoxProps, NullableHTMLUListElement } from 'types';
import { ForwardedRef, forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';

export const AutoCompleteListBox = forwardRef(function ListBoxBase(
  props: ListBoxProps,
  ref: ForwardedRef<HTMLUListElement>
) {
  const { children, ...rest } = props;
  const innerRef = useRef<HTMLUListElement>(null);
  const { isLoading, position } = useAutoCompleteContextContext();

  useImperativeHandle<NullableHTMLUListElement, NullableHTMLUListElement>(
    ref,
    () => innerRef.current
  );

  useLayoutEffect(() => {
    if (innerRef.current && position) innerRef.current.scrollTop = position;
  }, []);

  return (
    <Stack sx={{ paddingBottom: '10px' }}>
      <ul {...rest} ref={innerRef} role="list-box">
        {children}
      </ul>
      {isLoading && <CircularProgress size={15} sx={{ alignSelf: 'center' }} />}
    </Stack>
  );
});
