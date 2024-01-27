import MealsGrid from '@/component/meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react';

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}


export default async function MealsPage(){

  return (
    <>
      <header className= {classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href = "/meals/share">
            Share your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback = {<p className={classes.loading}>Fetching Meals</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  )
}