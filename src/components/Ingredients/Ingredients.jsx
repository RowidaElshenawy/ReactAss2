import React, { useEffect, useState } from 'react'
import IngredientsStyles from './Ingredients.module.scss'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
export default function Ingredients() {
  let {id} = useParams()
  console.log(id);
  const [mealDetails, setMealDetails] = useState([]);
  const [error , setErorr] = useState("")
  async function getIngredients() {
    try{
      setErorr("")
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(data);
      if(data.meals === null){
        throw new Error("The ID you entered is incorrect,no meals available. Please enter another ID")
      }
      setMealDetails(data.meals[0])
    }
    catch(error){
      console.log(error.message);
      setErorr(error.message)
    }
  }
  useEffect(() => {
    getIngredients()
  }, [])
  return (
    <>
     {error ? <div className='h-screen'><div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-full" role="alert">
              {error}
            </div> </div>  : <div className='lg:flex lg:flex-wrap lg:justify-between lg:items-start  '>
        <div className="inner lg:w-[33%]">
          <h1>{mealDetails?.str}</h1>
          <h2 className=' text-black mb-5'>{mealDetails?.strMeal}</h2>
          <img className='rounded-xl w-[100%]' src={mealDetails?.strMealThumb} alt="" />
          <div className='mt-10 flex justify-center'>
            <Link to={mealDetails.strYoutube} target='blank' className='px-5 py-2 me-3 bg-red-600 rounded-lg text-white' href=''><i className="pe-2 fa-brands fa-youtube"></i>youtube</Link >
            <Link to={mealDetails.strSource} target='blank' className='px-5 py-2 me-3 bg-green-600 rounded-lg text-white'><i className="pe-2 fa-solid fa-globe"></i>source</Link>
          </div>
        </div>
        <div className='lg:w-[33%] mt-12'>
          <p>{mealDetails?.strInstructions}</p>
        </div>
        <div className='bg-white p-3 lg:w-[32%] mt-12'>
          <h3 className='border-b-2 border-gray-500 mb-2 p-1 text-3xl font-semibold pb-4'>Ingredients</h3>
          <ul>
            <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails?.strIngredient1}</h4>
              <span>{mealDetails?.strMeasure1}</span>
            </li>
            <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails?.strIngredient2}</h4>
              <span>{mealDetails?.strMeasure2}</span>
            </li>
            <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails?.strIngredient3}</h4>
              <span>{mealDetails?.strMeasure3}</span>
            </li>
            <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails?.strIngredient4}</h4>
              <span>{mealDetails?.strMeasure4}</span>
            </li>
            <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails.strIngredient5}</h4>
              <span>{mealDetails.strMeasure5}</span>
            </li>
            {mealDetails.strIngredient6 ?<li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails.strIngredient6}</h4>
              <span>{mealDetails.strMeasure6}</span>
            </li>: ""}
            {mealDetails.strIngredient7 ? <li className='border-b-2 border-gray-500 mb-2 p-1 flex justify-between'>
              <h4 className=''>{mealDetails.strIngredient7}</h4>
              <span>{mealDetails.strMeasure7}</span>
            </li> : " " }
          </ul>
        </div>
      </div>}
     
    </>
  )
}