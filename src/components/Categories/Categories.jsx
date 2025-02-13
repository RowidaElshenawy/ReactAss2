import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styleCategory from './Categories.module.scss'
export default function Categories() {
  let {name} = useParams()
  console.log(name);
  const [categories, setCategory] = useState([])
  const [error , setErorr] = useState("")
  async function getCategories() {
    try{
      setErorr("")
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      console.log(data.meals);
      if(data.meals === null){
        throw new Error("Meal not found")
      }
      setCategory(data.meals)
    }catch(error){
      console.log(error.message)
      setErorr(error.message)
    }
    
  }
  useEffect(() => {
    getCategories()
  }, [name])
  return (
    <>
       {error ? <div className='h-screen'><div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-full" role="alert">
              {error}
            </div> </div>  : <div className=' sm:flex sm:flex-wrap '>
        {categories.map(categ =>
          <div className={`${styleCategory.child1} px-3 my-20  text-green-700   w-[90%] md:w-1/2 lg:w-[33.3333%] xl:w-[25%]`}>
            <div className={`${styleCategory.inner} bg-white rounded-3xl px-10 pb-5  flex flex-col items-center`}>
              <div className='relative bottom-11'>
                <img className='rounded-full' src={categ.strMealThumb} alt="" />
              </div>
              <h2 className=' text-black '>{categ.strMeal.split("").splice(0,9).join("")}</h2>
              <Link to={`/ingredients/${categ.idMeal}`} className={`${styleCategory.bt} px-5 py-1 rounded-full bg-green-400 text-white  text-lg mt-3`}>View Recipe</Link>
            </div>
          </div>
        )}
      </div>}
      
    </>
  )
}
