import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  id?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
  id,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        sx={{ backgroundColor: 'white' }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
