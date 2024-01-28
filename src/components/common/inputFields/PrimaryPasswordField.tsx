import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { InputField } from 'styles';
import { PasswordInputAdornment } from 'components';
import { PrimaryPasswordFieldProps } from 'types';

export const PrimaryPasswordField = ({
  name,
  control,
  label,
  props,
  helperText = '',
  placeholder = ''
}: PrimaryPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <InputField
          {...field}
          {...props}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          fullWidth
          label={label}
          error={!!error}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          helperText={error?.message ? error?.message : helperText}
          InputProps={{
            endAdornment: (
              <PasswordInputAdornment
                showPassword={showPassword}
                onhandleClickShowPassword={handleClickShowPassword}
              />
            )
          }}
        />
      )}
    />
  );
};
