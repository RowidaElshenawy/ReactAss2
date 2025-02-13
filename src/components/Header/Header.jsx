import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const[selectedItem ,setSlectedItem] = useState("")
  let navigate = useNavigate()
  const [list , setList]=useState([])
    async function getList(){
        let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        console.log(data.meals);
        setList(data.meals)
    }
    useEffect(()=>{ 
        getList()
    },[])
    function selectItem(e){
      navigate(`/Categories/${e.target.value}`) 
      setSlectedItem(e.target.value)
      console.log(list);
    }
      
  return ( 
<form class="max-w-sm mx-auto sm:hidden relative top-20 p-5 mb-32">
    <h2 className='mb-5'>Learn, Cook, Eat Your Food</h2>
  <select id="Meals" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  onChange={selectItem}
  value={selectedItem}>
    {list.map(categoryName=>
      <option key={categoryName.strCategory} value={categoryName.strCategory}>
        {categoryName.strCategory}
      </option>)}
  </select>
</form>

  )
}
