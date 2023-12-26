import { Timer, Utensils, Vegan } from 'lucide-react';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

export default function RecipeCard({
  href,
  imgSrc,
  title,
  description,
  time,
  category,
  vegan,
}: {
  href: string;
  imgSrc: string;
  title?: string;
  description?: string;
  time: number;
  category?: string;
  vegan?: boolean;
}) {
  return (
    <div className='w-full rounded-md bg-white drop-shadow'>
      <div className='relative w-full'>
        <NextImage
          src={imgSrc}
          alt='food'
          width={300}
          height={300}
          className='w-full'
          imgClassName='w-full h-52 object-cover rounded-t-md'
        />
        <div className='absolute top-3 right-3 flex flex-col items-center justify-center rounded-md bg-primary-500 px-4 py-3'>
          <div className='flex flex-row items-center gap-1'>
            <Timer size={24} className='text-white' />
            <Typography variant='b3' color='white'>
              {time} min{time > 0 ? 's' : ''}
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col gap-3 py-4 px-6'>
        <Typography variant='h3'>{title}</Typography>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center gap-1'>
            <Utensils size={24} />
            <Typography variant='b3'>{category}</Typography>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <Vegan size={24} />
            <Typography variant='b3'>
              {vegan ? 'Vegan' : 'Non-Vegan'}
            </Typography>
          </div>
        </div>
        <Typography variant='b2'>{description}</Typography>
        <ButtonLink href={href} variant='primary'>
          {href.startsWith('/recipes/') ? 'View Recipe' : 'Edit Recipe'}
        </ButtonLink>
      </div>
    </div>
  );
}
