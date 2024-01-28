import { Controller } from 'react-hook-form';
import { AutoCompleteListBox } from 'components';
import { AutoCompleteProvider } from 'contexts';
import { useCallback, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { PrimaryAutoCompleteProps } from 'types';

export const PrimaryAutoComplete = ({
  name,
  control,
  loading,
  options,
  placeholder,
  totalOptions,
  fetchMoreData
}: PrimaryAutoCompleteProps) => {
  const [AutoCompleteListBoxScrolledPosition, setAutoCompleteListBoxScrolledPosition] = useState(0);

  const onListBoxScrollHandler = useCallback(
    (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
      const listboxNode = event.currentTarget;
      const Scrollposition = listboxNode.scrollTop + listboxNode.clientHeight;
      if (listboxNode.scrollHeight - Scrollposition <= 1 && options.length !== totalOptions) {
        setAutoCompleteListBoxScrolledPosition(Scrollposition);
        fetchMoreData && fetchMoreData();
      }
    },
    [options]
  );

  return (
    <AutoCompleteProvider isLoading={loading} position={AutoCompleteListBoxScrolledPosition}>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0]}
        render={({ field: { onChange, ...field } }) => (
          <Autocomplete
            disablePortal
            id="select-blog"
            loading={loading}
            options={options}
            onChange={(_, data) => onChange(data)}
            disableClearable
            onClose={() => {
              setAutoCompleteListBoxScrolledPosition(0);
            }}
            getOptionLabel={(option) => option.title}
            ListboxComponent={AutoCompleteListBox}
            ListboxProps={{
              onScroll: (event) => {
                onListBoxScrollHandler(event);
              },
              sx: {
                height: '250px'
              }
            }}
            renderInput={(params) => <TextField {...params} {...field} placeholder={placeholder} />}
          />
        )}
      />
    </AutoCompleteProvider>
  );
};
