import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';

export default function RegisterPage() {
  const methods = useForm({
    mode: 'onTouched',
  });
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { handleSubmit } = methods;
  return (
    <main className='flex h-screen w-full flex-row items-center justify-center'>
      <Seo templateTitle='Register' />
      <section className='hidden h-full w-1/2 overflow-hidden lg:block'>
        <NextImage
          src='/images/auth/register.png'
          alt='Register'
          width={720}
          height={1024}
          className='h-full'
        />
      </section>
      <section className='mx-auto w-10/12 lg:w-1/2'>
        <FormProvider {...methods}>
          <form className='mx-auto flex w-3/4 flex-col gap-6'>
            <Typography variant='j1'>Sign Up</Typography>
            <Typography variant='b1'>
              Ready to spice things up? Register now and embark on a culinary
              exploration!
            </Typography>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-3'>
                <Input
                  id='username'
                  label='Username'
                  validation={{
                    required: 'Email must be filled',
                    pattern: {
                      value: REGEX.USERNAME,
                      message: 'Username must be alphanumeric',
                    },
                  }}
                  placeholder='Enter your username'
                  required
                  helperText="Choose a username with letters, numbers, dots, and underscores. It can't start or end with dots or underscores. Be unique, be you!"
                />
                <Input
                  id='email'
                  label='Email'
                  validation={{
                    required: 'Email must be filled',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Email must be valid',
                    },
                  }}
                  placeholder='Enter your email'
                  required
                />
                <Input
                  id='password'
                  label='Password'
                  validation={{
                    required: 'Password must be filled',
                    pattern: {
                      value: REGEX.PASSWORD,
                      message: 'Password must be alphanumeric',
                    },
                  }}
                  placeholder='Enter your password'
                  type='password'
                  required
                  helperText='Include at least one uppercase letter, one lowercase letter, a number, and a symbol. Ensure your password is a minimum of 12 characters long. Mix it up for maximum protection!'
                />
              </div>
              <Button size='lg' variant='primary' type='submit'>
                Register
              </Button>
            </div>
            <Typography variant='b1'>
              Already part of our community?{' '}
              <PrimaryLink href='/auth/login'>Sign in</PrimaryLink> to continue
              your journey.
            </Typography>
          </form>
        </FormProvider>
      </section>
    </main>
  );
}
