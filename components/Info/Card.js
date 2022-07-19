import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ title, description, image ,link }) => {
  return (
    <div>
      {/* card con grid */}

      <div className='   bg-base-100 shadow-xl border border-white '>
        <div className=' drop-shadow shadow-white  w-full h-48 lg:w-full lg:h-96 '>
          <Image layout='fill' src={image} />
        </div>
        <div className='card-body'>
          <h2 className='card-title block text-center'>{title}</h2>
          <p>{description}</p>
          <div className='card-actions justify-center'>
            <button className='bg-blue-500 text-white text-lg p-4 m-4 w-auto h-auto'>
              <Link href={link}>Abrir enlace</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
