import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WishlistCard from './Components/WishlistCard'
import { removeItemWishList } from '../redux/reducer/wishlist'
const Wishlist = () => {
    const list=useSelector((state)=>state.wish.list);
    const dispatch = useDispatch();
    const removeItemFromWish = (item) => {
      dispatch(removeItemWishList(item))};
  return (
    <> 
    <h3 className="d-flex justify-content-center mt-4">Your Wishlist Items</h3>
    {list.map((item)=>(
      <WishlistCard {...item} key={item.id}
      removeItemFromWish={() => removeItemFromWish(item)}
      />

    ))}
    </>
  )
}

export default Wishlist