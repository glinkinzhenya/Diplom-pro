import React from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputText } from '../../components/Forms/InputText';
import { adminRules } from '../../constans/rules';
import './Admin.css';

export default function Admin() {
  const { control, handleSubmit, getValues } = useForm();
  console.log(control);

  const onSubmit = () => {
    if (getValues().login === 'admin' && getValues().password === 'qwerty') {
      window.location.href = '/admin/4hg874hg8h45g85hg848g47gh4hyth4ythvy4thg8yh5g784h578heyubvyurbvubs';
    }
  };

  return (
    <div className='admin-wrapper'>
      <div className='form-wrapper'>
        <InputText
          control={control}
          name='login'
          label='Логін'
          type='text'
          rules={adminRules.login}
        />
        <InputText
          control={control}
          name='password'
          label='Пароль'
          type='password'
          rules={adminRules.password}
        />
        <Button
          size='large'
          onClick={handleSubmit(onSubmit)}
        >Війти
        </Button>
      </div>
    </div>
  );
}
