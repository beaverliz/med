import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function EmailInput() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
    >
      <TextField
        helperText="Введите свою почту"
        id="demo-helper-text-misaligned"
        label="Почта"
      />
    </Box>
  );
}
