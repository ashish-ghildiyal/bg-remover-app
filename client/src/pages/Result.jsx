import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContex'

const Result = () => {
   const { image, resultImg } = useContext(AppContext);
   const img = image ? URL.createObjectURL(image) : '';
   console.log("ikdkdk", img)
   
    console.log('result', image)
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
        <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
            
            <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
                <div>
                    <p className='font-semibold text-gray-600 mb-2'> Original</p>
                   {img && <img src={img} alt=""  className='rounded-md border'/>}
                </div>
                <div className='flex flex-col'>
                    <p className='font-semibold text-gray-600 mb-2'>Background Remover</p>
                    <div>
                     
                    {resultImg && <img src={resultImg} alt="" className='rounded-md border border-gray-300
                    h-full relative bg-layer'/>}
                    </div>
                </div>
            </div>
            { resultImg &&
            <div className='flex justify-center sm:justify-end items-center
             flex-wrap gap-4 mt-6'>
                <button className='
                gap-3 px-8 py-3.5 rounded-full  cursor-pointer text-violet-600 border border-violet-600
                 hover:scale-105 transition-all duration-700'>Try another image</button>
                 
                <a href={resultImg} download className='inline-flex gap-3 px-8 py-3.5 rounded-full  cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 
                 hover:scale-105 transition-all duration-700 text-white'>Download image</a>
            </div>
        }

        </div>
    </div>
  )
}

export default Result