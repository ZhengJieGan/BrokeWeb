import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const menuItem = ["Food", "Travel", "Electronics"];

export default function DropDown() {
  const [categories, setCategories] = React.useState("");

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box width="100%">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categories}
          label="Categories"
          onChange={handleChange}
        >
          {menuItem.map((item) => {
            return <MenuItem key={item} value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
