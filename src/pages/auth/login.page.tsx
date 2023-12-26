import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function LoginPage() {
  const methods = useForm({
    mode: 'onTouched',
  });
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { handleSubmit } = methods;
  return (
    <main className='flex h-screen w-full flex-row items-center justify-center'>
      <Seo templateTitle='Login' />
      <section className='hidden h-full w-1/2 overflow-hidden lg:block'>
        <NextImage
          src='/images/auth/login.png'
          alt='Login'
          width={720}
          height={1024}
          className='h-full'
        />
      </section>
      <section className='mx-auto w-10/12 lg:w-1/2'>
        <FormProvider {...methods}>
          <form className='mx-auto flex w-3/4 flex-col gap-6'>
            <Typography variant='j1'>Sign in</Typography>
            <Typography variant='b1'>
              Savor the flavors! Log in to your account and let the culinary
              journey begin.
            </Typography>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-3'>
                <Input
                  id='email'
                  label='Email'
                  validation={{ required: 'Email must be filled' }}
                  placeholder='Enter your email'
                  required
                />
                <Input
                  id='password'
                  label='Password'
                  validation={{ required: 'Password must be filled' }}
                  placeholder='Enter your password'
                  type='password'
                  required
                />
              </div>
              <Button size='lg' variant='primary' type='submit'>
                Login
              </Button>
            </div>
            <Typography variant='b1'>
              New to Mangan Mas Bro? Join the community and create your account{' '}
              <PrimaryLink href='/auth/register'>here</PrimaryLink>
            </Typography>
          </form>
        </FormProvider>
      </section>
    </main>
  );
}
