import * as React from 'react';

import RecipeCard from '@/components/cards/RecipeCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout withHeader={true}>
      <Seo templateTitle='Home' />

      <main className='mx-auto flex w-11/12 flex-col gap-12 py-16 md:w-10/12'>
        <section className='flex flex-col gap-4 bg-white'>
          <Typography variant='j2'>Trending Recipes</Typography>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            <RecipeCard
              href='/recipes/1'
              imgSrc='https://www.simplyrecipes.com/thmb/81DDN-JmyLF4q4x3ji9US5EinZY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Flan-LEAD-4babaa6635e84aa583e40beeffdc9e61.jpg'
              title='American Pancake Cereal'
              description='Tiny delights, big flavor! Dive into a bowl of American Pancake Cereal - mini, fluffy pancakes that pack a punch of breakfast joy. Quick to make, perfect for a bite-sized morning indulgence.'
              time={20}
              category='Breakfast'
              vegan={true}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
