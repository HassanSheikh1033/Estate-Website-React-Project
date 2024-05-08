import React from 'react'
import logo from '../assets/Logo.png'
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        <section className='flex justify-between items-center px-8 py-8 mt-5 w-[1380px] h-[90px] bg-neutral-50 rounded-[70px] m-auto'>
            <div className="w-[67.89px] h-[17.09px]">
                <img src={logo} alt="" />
            </div>


            <div className='flex justify-center items-center w-[471px] h-[60px] rounded-[40px] my-auto bg-white mt-[-18px] p-4 ml-[125px]'>
                <div className="flex justify-center items-center gap-5">
                    <ul className=" flex gap-[24px] justify-between text-stone-900 text-base font-normal font-['Poppins'] leading-tight">
                        <li>About us</li>
                        <li>Projects</li>
                        <li>Agents</li>
                        <li>Services</li>
                        <li>Listings</li>
                    </ul>
                    <IoSearchOutline className='' />
                </div>
            </div>

            <div className='flex items-center justify-center gap-7'>
                <p className="text-stone-900 text-base font-normal font-['Poppins'] leading-tight">Other services</p>
                <div>
                    <button className="px-[25px] py-[10px] bg-white rounded-[40px] border border-stone-300 text-stone-900 text-base
                     font-[24px] font-['Poppins'] leading-tight" >
                        Contact Us
                    </button>
                </div>
            </div>
            
        </section>
    )
}
