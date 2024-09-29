import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const NavLinks = [
    {
        title: "About",
        path:"#about"
    },
    {
        title: "Projects",
        path:"#projects"
    },
    {
        title: "Contact",
        path:"#contact"
    }
]

const Navbar = () => {
    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
                <div className='flex flex-wrap items-canter justify-between mx-auto px-8 py-6'>
                    <Link href={'/'} className='text-2xl md:text-4xl text-white font-semibold'>Sujit Rukade</Link>
                    <div className="menu hidden md:block md:w-auto" id='navbar'>
                        <ul className='flex md:p-0 p-4 md:flex-row md:space-x-8 mt-0'>
                            {
                                NavLinks.map((link, index)=>(
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
