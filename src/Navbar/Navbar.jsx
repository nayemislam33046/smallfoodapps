import { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiCartAlt, BiTrashAlt} from "react-icons/bi";
import { Mycontext } from '../Context/Context';
const Navbar = () => {
  const {state,dispatch} = useContext(Mycontext)
  const [cartOpen, setcartOpen] = useState(false)
  const handleClick =()=>{
    if (state.cart.length === 0) {
      setcartOpen(false)
    }else{
      setcartOpen(!cartOpen)
    }
  }

  const menuRef = useRef()
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current?.contains(e.target)) {
        setcartOpen(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);
  return (
    <div className='bg-slate-800 flex items-center justify-between px-5 h-[10vh] md:px-10 lg:px-20 fixed left-0 right-0 top-0'>
        <div>
          <Link to="/" className='text-white font-bold text-lg'>E-commerce</Link>
        </div>
        <div className='flex items-center gap-4'>
              <NavLink to="/" className="text-white ">Profile</NavLink>
                <div className='relative' onClick={handleClick} ref={menuRef}>
                   <span className='text-orange-500 text-xl cursor-pointer'><BiCartAlt/></span>
                    <span className='absolute text-sm -top-3 -right-3 bg-blue-600 text-white p-[1px] rounded-full w-5 text-center cursor-pointer'>{state.cart.length}</span>
                   {cartOpen && state.cart.length>0 && <div className='bg-white shadow-lg border rounded absolute right-0 p-3'>
                      {state.cart.map((cartData)=>{
                        return <div key={cartData.id} className='flex w-56 items-center justify-between rounded border-b-2 border-slate-500 py-2'>
                      <img src={cartData.images} alt={cartData.name} className='w-10 h-10 rounded-full '/>
                      <p>${cartData.price}</p>
                      <div onClick={()=>dispatch({type:"REMOVECART",payload:cartData.id})}><BiTrashAlt/></div>
                        </div>
                      })}
                      <Link to="/cart" className='my-5 w-full bg-blue-500 block text-center py-1 text-white rounded'>Go To Cart</Link>
                    </div>}
                </div>
        </div>
    </div>
  )
}
export default Navbar