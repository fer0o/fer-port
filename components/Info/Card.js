import React from 'react'
import Image from 'next/image'

export const Card = ({ title, description, image }) => {
  return (
    <div>
      {/* card con grid */}

      <div className='   bg-base-100 shadow-xl border border-white'>
        <div className=' drop-shadow shadow-white flex justify-center  lg:w-[300px] h-[350px] m-auto'>
          <Image layout='fill' src={image} />
        </div>
        <div className='card-body'>
          <h2 className='card-title block text-center'>{title}</h2>
          <p>{description}</p>
          <div className='card-actions justify-center'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
