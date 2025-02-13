import React, {  useEffect, useState } from 'react'
import tabsStyles from './Tabs.module.scss'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default function Tabs() {
    const [list , setList]=useState([])
    async function getList(){
        let{data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        console.log(data.meals);
        setList(data.meals)
    }
    useEffect(()=>{ 
        getList()
    },[])
  return (
    <div className=' hidden sm:block ml-[270px] pt-10'>
        <h2>Learn, Cook, Eat Your Food</h2>
        <ul className= {`${tabsStyles.TabsUl} flex flex-wrap mt-6`}>
            <li  className='w-fit'>
                <NavLink className={`${tabsStyles.tab} border-gray-200 `} to={""}>All</NavLink >
            </li>
            {list.map(categoryName=> <li key={categoryName.strCategory} className='w-fit'>
                <NavLink className={`${tabsStyles.tab}`} to={`/Categories/${categoryName.strCategory}`}>{categoryName.strCategory}</NavLink>
            </li>)}
        </ul>
    </div>
  )
}