import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import CreateModal from './CreateModal';
import { Link } from 'react-router-dom';
import NameNextPage from '../../../NameNextPage';

export let nameButton = null;


export default function TreiningCard({ trainingName, imageSrc, info }) {
  const [open, setOpenModal] = useState(false);



  const startQuiz = () => {
    console.log('Quiz started');

    nameButton = trainingName;
  };

  console.log(trainingName);
  // split преобразеут строку в массив
  // join объединяет в строку
  const newTrainingName = trainingName.split(' ').join('_').toLowerCase();

  //console.log(trainingName.split(' '));
  //console.log(newTrainingName);

  return (
    <>
      <Card sx={{
        width: 250,
        background: 'rgba(0, 0, 0, 0.550)',
        color: 'white',
        borderRadius: '13px',
      }}>
        <CardMedia
          sx={{ height: 150 }}
          image={imageSrc}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {trainingName}
          </Typography>
          <Typography variant='body2' color='grey'>
            {info.slice(0, 40)}...
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button sx={{ fontSize: '11px' }} size='small' onClick={startQuiz}>Записатись</Button> */}

          <Button onClick={startQuiz} sx={{ fontSize: '11px' }} size="small">
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={`/test/${newTrainingName}`}
            >
              Открыть
            </Link>

          </Button>


          <Button sx={{ fontSize: '11px', color: 'white' }} size='small'
            onClick={() => setOpenModal(true)}>Дізнатись більше</Button>
        </CardActions>
      </Card>
      <CreateModal
        open={open}
        handleOnClose={() => setOpenModal(false)}
        imageSrc={imageSrc}
        trainingName={trainingName}
        info={info}
      />




    </>
  );
}
