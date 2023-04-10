import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { adminRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const { control, handleSubmit } = useForm();

  const [imageData, setImageData] = useState(null);
  console.log(imageData);
  function handleImageChange(e) {
    console.log('huy');
    const file = e.target.files[0];

    Resizer.imageFileResizer(
      file,
      800, // максимальная ширина
      600, // максимальная высота
      'JPEG', // формат изображения
      70, // качество изображения в процентах
      0, // ориентация изображения
      (uri) => {
        setImageData(uri);
      },
      // 'base64' // тип вывода изображения
    );
  }

  function primer() {
    console.log('primer');
  }

  return (
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
          // onChange={handleImageChange}
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
          onClick={handleSubmit(primer)}
        >Додати
        </Button>
        <div>
          <input type="file" onChange={handleImageChange} />
          {imageData && <img src={imageData} alt="uploaded" />}
        </div>
      </div>
    </div>
  );
}
