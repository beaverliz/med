import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button onClick={handleClickOpen}>Начать измерения</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Выберете показания для измерений</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native"> </InputLabel>
              <Button id="demo-dialog-select-label"> Давление</Button>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label"> </InputLabel>
              <Button id="demo-dialog-select-label"> Температура</Button>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
