import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { addFormRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const { control, handleSubmit, getValues } = useForm();
  const putForm = async () => {
    console.log(getValues());
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
      }),
    });
  };

  return (
    <div className='add-form-wrapper'>
      <div className='add-form'>
        <InputText
          control={control}
          name='name'
          label='Назва тренування'
          rules={addFormRules.login}
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='image'
          label='Логотип'
          rules={addFormRules.image}
          id="myFileInput"
        />
        <InputText
          style={{ backgroundColor: 'black' }}
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
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='Понеділок'
          label='Понеділок'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_10:30'
          label='10:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_10:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_11:30'
          label='11:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_11:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_12:30'
          label='12:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='пн_12:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='Середа'
          label='Середа'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_10:30'
          label='10:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_10:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_11:30'
          label='11:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_11:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_12:30'
          label='12:30'
          rules=''
          type='checkbox'
        />
        <InputText
          style={{ backgroundColor: 'black' }}
          control={control}
          name='ср_12:30_seats'
          label='Кількість місць'
          rules=''
          type='number'
        />
        <Button
          size='large'
          onClick={handleSubmit(putForm)}
        >Додати
        </Button>
      </div>
    </div>
  );
}
