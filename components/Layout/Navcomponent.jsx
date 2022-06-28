import Link from 'next/link'
import React from 'react'

const Navcomponent = () => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b-4 border-white">
        <div className="flex-1">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link href="/about">
                  <a>Acerca de</a>
                </Link>
              </li>

              <li>
                <Link href="/skills">
                  <a>Skills</a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/">
              <a className="btn btn-ghost normal-case text-xl">Home</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/about">
                <a className="btn btn-ghost normal-case text-xl hover:underline">
                  Acerca de
                </a>
              </Link>
            </li>

            <li>
              <Link href="/skills">
                <a className="btn btn-ghost normal-case text-xl hover:underline">
                  Skills
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <a className="btn btn-ghost normal-case text-xl hover:underline">
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navcomponent
