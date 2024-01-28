import { Controller } from 'react-hook-form';
import { InputField } from 'styles';
import { PrimaryInputFieldProps } from 'types';

export const PrimaryInputField = ({
  name,
  control,
  label,
  props,
  helperText = '',
  placeholder = ''
}: PrimaryInputFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState: { error } }) => (
      <InputField
        fullWidth
        label={label}
        placeholder={placeholder}
        error={!!error}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        helperText={error?.message ? error?.message : helperText}
        {...field}
        {...props}
      />
    )}
  />
);
