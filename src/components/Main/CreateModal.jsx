import * as React from 'react';
import {
    Dialog,
    DialogActions,
    Card,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@mui/material';

export default function CreateModal({
    open, handleOnClose, trainingName, imageSrc, info
}) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleOnClose}
                aria-labelledby="responsive-dialog-title"
                aria-describedby="responsive-dialog-description"
            >
                <Card sx={{ width: '600px' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={imageSrc}
                        title='green iguana'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {trainingName}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {info}
                        </Typography>
                    </CardContent>
                </Card>
                <DialogActions>
                    <Button onClick={handleOnClose}>Закрити</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
