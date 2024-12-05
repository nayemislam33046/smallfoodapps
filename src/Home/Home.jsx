import React, { useContext, useState } from 'react';
import Shop from '../Shop/Shop';
import { Mycontext } from '../Context/Context';
import Search from '../Search/Search';
const Home = () => {
    const {state} = useContext(Mycontext)
    const [items, setitems] = useState(state.product)
   const filterFood = (curFood)=>{
     const updateFood = state.product.filter((mycatefory)=>{
        return mycatefory.category === curFood
     })
     setitems(updateFood)
   }
   const SearchData = (search)=>{
    const value = search.toLowerCase()
    const foodData = state.product.filter((foodnames)=>{
        const foodName = foodnames.name.toLowerCase()
        return foodName.startsWith(value)
    })
    setitems(foodData)
   }
  return (
    <div className='my-20'>
        <Search getSearch={SearchData}/>
        <div className='my-3 flex flex-wrap gap-1 items-center sm:justify-center'>
            <button className='bg-orange-500 shadow-lg sm:w-20 text-sm sm:text-base w-16 py-1 mx-2 px-1 rounded text-white' onClick={()=>setitems(state.product)}>ALL</button>
            <button className='bg-orange-500 shadow-lg sm:w-20 text-sm sm:text-base w-16 py-1 mx-2 px-1 rounded text-white' onClick={()=>filterFood("Breakfast")}>Breakfast</button>
            <button className='bg-orange-500 shadow-lg sm:w-20 text-sm sm:text-base w-16 py-1 mx-2 px-1 rounded text-white' onClick={()=>filterFood("Launch")}>Launch</button>
            <button className='bg-orange-500 shadow-lg sm:w-20 text-sm sm:text-base w-16 py-1 mx-2 px-1 rounded text-white' onClick={()=>filterFood("Evening")}>Evening</button>
            <button className='bg-orange-500 shadow-lg sm:w-20 text-sm sm:text-base w-16 py-1 mx-2 px-1 rounded text-white' onClick={()=>filterFood("dinner")}>Dinner</button>
        </div>
        <div className='flex items-center flex-wrap justify-center'>
        {items.map((apidata)=>{
            return <Shop key={apidata.id} shop={apidata}/>
        })}
    </div>
    </div>
  )
}
export default Home