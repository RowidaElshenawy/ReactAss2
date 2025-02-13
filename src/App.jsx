import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import All from './components/All/All'
import Ingredients from './components/Ingredients/Ingredients'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound/NotFound'

function App() {
  const routes = createBrowserRouter([
    {path:"", element:<Layout/>, children:[
      {index:true , element:<All/>},
      {path:"ingredients/:id" ,element:<Ingredients/>},
      {path:"categories/:name" , element :<Categories/>},
      {path:"*" , element :<NotFound/>}
    ]}
  ])
  return (
      <RouterProvider router={routes}>

      </RouterProvider>
  )
}

export default App
