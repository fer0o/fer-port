import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Card = ({ title, description, image ,link,linkGithub }) => {
  return (
    <div>
      {/* card con grid */}

      <div className='   bg-base-100 shadow-xl border border-white lg:m-8 lg:p-2 p-8 h-full'>
        <div className=' drop-shadow shadow-white  w-full h-48 lg:w-full lg:h-80 '>
          <Image layout='fill' src={image} />
        </div>
        <div className='card-body'>
          <h2 className='card-title block text-center font-bold text-2xl'>{title}</h2>
          <p>{description}</p>
          
            <button className='bg-blue-500 border-2 border-black text-white rounded-md text-lg p-4 mt-8'>
              <Link href={link}>Abrir enlace</Link>
            </button>
            <button className='bg-black text-white border-2 border-white rounded-md text-lg p-4 mt-8'>
              <Link href={linkGithub}>Link Github</Link>
            </button>
        </div>
      </div>
    </div>
  )
}
