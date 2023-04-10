import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { adminRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const { control, handleSubmit } = useForm();

  const [avatar, setAvatar] = useState('');

  const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Error while reading file.'));
  });

  const onSubmit = async (event) => {
    const file = event.target.files[0];
    const base64String = await getBase64(file);
    setAvatar(base64String);
    console.log(avatar);
  };

  return (
    <>
      <div className='add-form-wrapper'>
        <div className='add-form'>
          {/* <InputText
          control={control}
          name='name'
          label='Назва тренування'
          type='text'
          rules={adminRules.login}
        /> */}
          <InputText
            style={{ backgroundColor: 'black' }}
            control={control}
            name='image'
            label='Логотип'
            type='file'
            rules={adminRules.image}
            id="myFileInput"
            onChange={onSubmit}
          />
          {/* <InputText
          control={control}
          name='fullInfo'
          label='опис тренування'
          type='text'
          rules={adminRules.login}
        />
        <InputText
          control={control}
          name='gallery'
          label='Зображення 1'
          type='file'
          rules={adminRules.password}
        /> */}
          {/* <InputText
          control={control}
          name='gallery'
          label='Зображення 2'
          type='file'
          rules={adminRules.password}
        />
        <InputText
          control={control}
          name='gallery'
          label='Зображення 3'
          type='file'
          rules={adminRules.password}
        />
        <InputText
          control={control}
          name='gallery'
          label='Зображення 4'
          type='file'
          rules={adminRules.password}
        /> */}
          {/* <InputText
          control={control}
          name='days'
          label='Вільні дні'
          type='text'
          rules={adminRules.login}
        /> */}
          <Button
            size='large'
            onClick={handleSubmit()}
          >Додати
          </Button>
          {avatar && <img src={avatar} alt="Preview" />}
        </div>
      </div>
    </>
  );
}
