import Link from 'next/link'
import React from 'react'

const Navcomponent = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between z-10  border-blue- bg-black text-2xl font-bold p-8 border-b-2">
        <div className="flex-1 uppercase">
          <Link href="/">
            <a className="text-2xl text-white border-2 border-white rounded-md p-2">
              Home
            </a>
          </Link>
        </div>
        <div className=" space-x-8 uppercase">
          <Link href="/about">
            <a className="text-2xl text-white border-2 border-white rounded-md p-2">
              Acerca de mi
            </a>
          </Link>
          <Link href="/skills">
            <a className="text-2xl text-white border-2 border-white rounded-md p-2">
              Skills
            </a>
          </Link>
          <Link href="/contacto">
            <a className="text-2xl text-white border-2 border-white rounded-md p-2">
              Contacto
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navcomponent
