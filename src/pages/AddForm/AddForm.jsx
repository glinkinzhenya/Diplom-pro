import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { InputText } from '../../components/Forms/InputText';
import { addFormRules } from '../../constans/rules';
import './AddForm.css';

export default function AddForm() {
  const { control, handleSubmit, getValues } = useForm();

  const [result, setResult] = useState({});

  const test = () => {
    console.log(getValues().fullInfo);
    const days = getValues().fullInfo.split('; ');
    console.log(days);
    const obj = {};

    days.forEach((day) => {
      const [name, time, value] = day.split(', ');
      obj[name] = obj[name] || {};
      obj[name][time] = value;
    });

    setResult({ days: obj });
    const finish = { days: obj };
    console.log(result);
    console.log({ days: obj });
    console.log(finish);
  };

  // const putForm = async () => {
  //   // const days = {};
  //   // console.log(getValues().fullInfo);
  //   // const data = getValues().fullInfo;
  //   // const newData = data.split(' ');
  //   // console.log(newData);
  //   // newData.forEach((item) => {
  //   //   console.log(item);
  //   //   days[item] = item;
  //   // });
  //   // console.log(days);

  //   await fetch('https://64148167e8fe5a3f3a087de9.mockapi.io/api/v1/classes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: getValues().name,
  //       image: getValues().image,
  //       fullInfo: getValues().fullInfo,
  //       gallery: [getValues().image_1, getValues().image_2, getValues().image_3, getValues().image_4],
  //     }),
  //   });
  // };

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
        {/* <InputText
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
        /> */}
        <Button
          size='large'
          onClick={handleSubmit(test)}
        >Додати
        </Button>
      </div>
    </div>
  );
}
