import React from "react";
import { Autocomplete as MuiAutocomplete } from "@mui/material";
import { Input } from "@/components/input/input";

type Properties = {
  options: any[];
  label?: string;
};

const Autocomplete: React.FC<Properties> = ({ options, label }) => {
  return (
    <MuiAutocomplete
      options={options}
      renderInput={(params) => <Input {...params} label={label} />}
    />
  );
};

export { Autocomplete };
