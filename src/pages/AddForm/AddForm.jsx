// import React, { useState } from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { addFormRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState({});

  let data2 = '';

  const handleSubmitTwo = (event) => {
    event.preventDefault();

    const obj = { ...result };

    if (!obj[day]) {
      obj[day] = {};
    }

    obj[day][time] = value;
    setResult(obj);
    setDay('');
    setTime('');
    setValue('');
  };

  console.log(result);
  data2 = result;

  const { control, handleSubmit, getValues } = useForm();

  const putForm = async () => {
    await fetch('https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: getValues().name,
        image: getValues().image,
        fullInfo: getValues().fullInfo,
        gallery: [getValues().image_1, getValues().image_2, getValues().image_3, getValues().image_4],
        data2,
      }),
    });
  };

  return (
    <>
      <div className='add-form-wrapper'>
        <form className='add-form' onSubmit={handleSubmitTwo}>
          <InputText
            control={control}
            name='name'
            label='Назва тренування'
            rules={addFormRules.login}
          />
          <InputText
            control={control}
            name='image'
            label='Логотип'
            rules={addFormRules.image}
          />
          <InputText
            control={control}
            name='fullInfo'
            label='Опис тренування'
            rules={addFormRules.description}
          />
          <InputText
            style={{ backgroundColor: 'black' }}
            control={control}
            name='image_1'
            label='Зображення 1'
            rules={addFormRules.image}
          />
          <InputText
            style={{ backgroundColor: 'black' }}
            control={control}
            name='image_2'
            label='Зображення 2'
            rules={addFormRules.image}
          />
          <InputText
            style={{ backgroundColor: 'black' }}
            control={control}
            name='image_3'
            label='Зображення 3'
            rules={addFormRules.image}
          />
          <InputText
            style={{ backgroundColor: 'black' }}
            control={control}
            name='image_4'
            label='Зображення 4'
            rules={addFormRules.image}
          />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Day'
                variant='outlined'
                fullWidth
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Time'
                variant='outlined'
                fullWidth
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Value'
                variant='outlined'
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </Grid>
          </Grid>
          <Button
            size='large'
            onClick={handleSubmit(putForm)}
          >Додати
          </Button>
        </form>
      </div>
    </>
  );
}
