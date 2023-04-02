import * as React from 'react';
import {
  Dialog,
  DialogActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function CreateModal({
  open, handleOnClose, trainingName, imageSrc, info, ok,
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
          <CardContent sx={{ background: 'black' }}>
            <Typography gutterBottom variant='h5' color='white' component='div'>
              {trainingName}
            </Typography>
            <Typography variant='body2' color='grey'>
              {info}
            </Typography>
          </CardContent>
        </Card>
        <DialogActions>
          {ok ? <Link
            style={{
              textDecoration: 'none',
              color: '#0671dc',
              display: 'block',
              padding: '10px',
            }}
            to={'/'}
          >Закрити
          </Link>
            : <Button onClick={handleOnClose}>Закрити</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}
