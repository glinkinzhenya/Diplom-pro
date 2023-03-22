import { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default class CallBack extends Component {
    constructor() {
        super();
        this.state = { open: false };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    } handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" onClick={this.handleClickOpen}>
                    <Typography color="white"> Ми Вам зателефонуємо</Typography>
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Введіть Ваш номер телефону</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Ми зателефонуємо як найшвідше та відповемо на всі ваші питання
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
                        <Button onClick={this.handleClose}>Відмінити</Button>
                        <Button onClick={this.handleClose}>Підтвердити</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}