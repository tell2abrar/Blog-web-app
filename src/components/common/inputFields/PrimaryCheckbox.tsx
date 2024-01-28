import { Controller } from 'react-hook-form';
import { PrimaryCheckboxProps } from 'types';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const PrimaryCheckbox = ({ control, label, name }: PrimaryCheckboxProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormGroup>
        <FormControlLabel control={<Checkbox {...field} />} checked={field.value} label={label} />
      </FormGroup>
    )}
  />
);
