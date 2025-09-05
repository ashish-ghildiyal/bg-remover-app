import React from 'react'
import {assets} from '../assets/assets.js'
import { Link } from 'react-router'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const {openSignIn} = useClerk();
    const {issignedIn, user} = useUser();
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
    <Link to='/'>
        <img className="w-32 sm:w-44" src={assets.logo} alt="" />
    </Link>
    {
        issignedIn ? <div><UserButton/> </div>
        :  <button onClick={()=>openSignIn({})} className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full">
            Get started{" "}
            <img
            className="w-3 sm:w-4"
            src={assets.arrow_icon}
            alt=""
            />
            </button>
}
</div>

  )
}

export default Navbar