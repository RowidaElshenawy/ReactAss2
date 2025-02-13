import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './All.module.scss'
import Ingredients from '../Ingredients/Ingredients'
import { Link, useNavigate } from 'react-router-dom'
export default function All() {
  let [meals, setmeals] = useState([])
  async function getAllMeals() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    console.log(data);
    setmeals(data.meals)
  }
  useEffect(() => {
    getAllMeals()
  }, [])
  return (
    <>
      <div className='  sm:flex sm:flex-wrap '>
        {meals.map(meal =>
          <div className= {`px-3 my-20   text-green-700 w-[90%] md:w-1/2 lg:w-[33.3333%] xl:w-[25%] ${styles.child}`}>
            <div className={`${styles.inner} bg-white rounded-3xl px-10 pb-5  flex flex-col items-center `}>
              <div className='relative bottom-11'>
                <img className='rounded-full' src={meal.strMealThumb} alt="" />
              </div>
              <h2 className=' text-black '>{meal.strMeal}</h2>
              <p className='py-2 text-green-400 '><i class="fa-solid fa-earth-americas"></i> {meal.strArea}</p>
              <Link to={`/ingredients/${meal.idMeal}`} className={`${styles.bt} px-5 py-1 rounded-full bg-green-400 text-white  text-lg `} >View Recipe</Link>
            </div>
          </div>)}
      </div>
    </>
  )
}


