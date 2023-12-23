import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "& > :not(style)": { m: 1, width: "30ch" },
      }}
    >
      <TextField
        helperText="Введите свое имя"
        id="demo-helper-text-misaligned"
        label="Имя"
      />
      <TextField
        helperText="Введите свою фамилию"
        id="demo-helper-text-misaligned"
        label="Фамилия"
      />
    </Box>
  );
}
