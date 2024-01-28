import { Controller } from 'react-hook-form';
import { InputField } from 'styles';
import { PrimarySelectFieldProps } from 'types';

export const PrimarySelectField = ({
  name,
  control,
  label,
  props,
  children,
  helperText = ''
}: PrimarySelectFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <InputField
        select
        fullWidth
        label={label}
        error={!!error}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        helperText={error?.message ? error?.message : helperText}
        {...field}
        {...props}
      >
        {children}
      </InputField>
    )}
  />
);
