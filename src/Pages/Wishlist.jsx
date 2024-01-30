import React from 'react'
import { useSelector } from 'react-redux'
import ProductListItem from './Components/ProductListItem'

const Wishlist = () => {
    const list=useSelector((state)=>state.wish.list)
  return (
    <> 
    <h3 className="d-flex justify-content-center mt-4">Your Wishlist Items</h3>
    {list.map((item)=>(
      <ProductListItem {...item} key={item.id}/>
    ))}
    </>
  )
}

export default Wishlist