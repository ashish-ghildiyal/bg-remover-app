import React from 'react'
import { assets ,plans} from '../assets/assets'

const Buycredits = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'> 
    <button className='border border-gray-400 px-4 py-2 rounded-full mb-6'> Our plans</button>
    <h1 className='text-3xl md:text-4xl lg:text-3xl font-semibold text-gray-600 mb-6'>Choose the plan that's right for you</h1>
    <div className='flex flex-wrap justify-center gap-6 text-left'>
      {plans.map((plan,i)=>(
        <div key={i} className='bg-white border drop-shadow-sm rounded-lg py-12 px-8 text-gray-700'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 semi-bold'>{plan.id}</p>
             <p className='text-sm'>{plan.desc}</p>
              <p className='mt-6'>
                <span className='text-3xl'>{plan.price}</span>/ {plan.credits}
              </p>
              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md min-w-52 py-2.5'>Get started</button>
        </div>
     ) )}
        
    </div>
    </div>
  )
}

export default Buycredits