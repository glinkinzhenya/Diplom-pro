import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { addFormRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const { control, handleSubmit, getValues } = useForm();

  function pushServer() {
    console.log(getValues());
  }

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
          name='description'
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
        <Button
          size='large'
          onClick={handleSubmit(pushServer)}
        >Додати
        </Button>
      </div>
    </div>
  );
}
