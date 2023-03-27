import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function CallBack() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{ width: '70%' }} variant="outlined" onClick={handleClickOpen}>
        <Typography sx={{ fontSize: '70%' }} color="white"> Ми Вам зателефонуємо</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Введіть Ваш номер телефону</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Ми зателефонуємо як найшвідше та відповемо на всі ваші пітання
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="+380"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відмінити</Button>
          <Button onClick={handleClose}>Підтвердити</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
