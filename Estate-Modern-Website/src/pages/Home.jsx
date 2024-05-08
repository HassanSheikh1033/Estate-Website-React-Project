import React from 'react'
import hero from '../assets/hero1.png'
import message from '../assets/messages.png'
import edit from '../assets/edit-2.png'
import sms from '../assets/sms-tracking.png'
import house1 from '../assets/house1.png'
import icon1 from '../assets/star-solid.svg'
import arrowleft from '../assets/arrow-left.svg'
import arrowright from '../assets/arrow-right.png'
import test1 from '../assets/test1.jpg'
import house2 from '../assets/house2.png'


export default function Home() {
    return (
        <>
            {/* //======================= Hero   ===================================== */}
            <section className='gradient mx-auto mt-11 flex justify-between'>
                <div className='flex flex-col py-[24px]'>
                    <div className='flex flex-col px-[80px] py-7 mt-10 gap-7'>
                        <div className='flex gap-4 flex-col'>
                            <p className="text-black text-base font-normal font-['Poppins'] leading-tight">
                                Welcome to Realstate
                            </p>
                            <h1 className="text-black text-[67px] font-semibold font-['Poppins']">
                                Manage Your <br /> Property
                            </h1>
                            <p className="w-[435px] text-black text-base font-normal font-['Poppins'] leading-normal">
                                Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc
                            </p>
                        </div>

                        <div className=" bg-white rounded-[40px] w-[408px] h-[60px]">
                            <div className="flex items-center justify-between gap-[125px]">
                                <p className="opacity-40 text-black text-base font-normal font-['Poppins'] ml-4 text-center">Enter your email</p>

                                <button className="w-[147px] h-[60px] bg-stone-900 rounded-[40px] text-white text-base font-semibold font-['Poppins']
                                 leading-normal">
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={hero} className="w-[848.20px] h-[712.44px]" alt="" />
                </div>
            </section>




            {/* ======================   About us  ====================== */}
            <section className='mt-[220px] flex flex-col'>
                <div className='flex flex-col items-center justify-center'>
                    <p className="text-black text-base font-normal font-['Poppins'] leading-tight text-center">Three steps. Three minutes.</p>
                    <h1 class="text-black text-[50px] font-semibold font-['Poppins'] leading-[60px] mt-3">Everything should be this easy.</h1>
                </div>


                <div className='flex mt-[65px] mx-auto justify-between gap-[175px]'>
                    <div className='flex flex-col gap-4 '>
                        <img src={message} className='w-[55px] h-[55px]' alt="" />
                        <h1 class="text-black text-[28px] font-semibold font-['Poppins'] leading-[33.60px]">
                            Answer questions
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum in in <br /> vestibulum.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <img src={sms} className='w-[55px] h-[55px]' alt="" />
                        <h1 class="text-black text-[28px] font-semibold font-['Poppins'] leading-[33.60px]">
                            Answer questions
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum in in <br /> vestibulum.
                        </p>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <img src={edit} className='w-[55px] h-[55px]' alt="" />
                        <h1 className="text-black text-[28px] font-semibold font-['Poppins'] leading-[33.60px]">
                            Answer questions
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum in in <br /> vestibulum.
                        </p>
                    </div>
                </div>


                <div className='mt-[150px] px-[70px]'>
                    <div className=''>
                        <p className="text-black text-base font-normal font-['Poppins'] leading-tight">Best Project of the Years</p>
                        <div className='flex justify-between'>
                            <h1 className="text-black text-[37px] font-semibold font-['Poppins'] leading-[60px]">Our recent projects</h1>
                            <div className='flex gap-3'>
                                <img src={arrowleft} alt="" />
                                <img src={arrowright} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center justify-between mt-7 '>
                        <div className="w-[417px] h-[391px] opacity-100 bg-white rounded-[14px] border border-stone-300">
                            <img src={house1} alt="" />
                            <h1 className="text-black text-[19px] font-semibold font-['Poppins'] leading-relaxed mt-3 ml-3 ">Sobha Hearland II Villas</h1>
                            <p className="text-[17px] text-black text-base font-normal font-['Poppins'] leading-normal mt-2 ml-3">
                                Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum.
                            </p>
                            <div className='flex gap-2 mt-4 ml-3'>
                                <div className='flex '>
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                </div>
                                <p className="text-black text-base font-normal font-['Poppins'] leading-tight">4.83</p>
                            </div>
                        </div>

                        <div className="w-[417px] h-[391px] opacity-100 bg-white rounded-[14px] border border-stone-300">
                            <img src={house1} alt="" />
                            <h1 className="text-black text-[19px] font-semibold font-['Poppins'] leading-relaxed mt-3 ml-3">Sobha Hearland II Villas</h1>
                            <p className="text-[17px] text-black text-base font-normal font-['Poppins'] leading-normal mt-2 ml-3">
                                Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum.
                            </p>
                            <div className='flex gap-2 mt-4 ml-3'>
                                <div className='flex '>
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                </div>
                                <p className="text-black text-base font-normal font-['Poppins'] leading-tight">4.83</p>
                            </div>
                        </div>

                        <div className="w-[417px] h-[391px] opacity-100 bg-white rounded-[14px] border border-stone-300">
                            <img src={house1} alt="" />
                            <h1 className="text-black text-[19px] font-semibold font-['Poppins'] leading-relaxed mt-3 ml-3">Sobha Hearland II Villas</h1>
                            <p className="text-[17px] text-black text-base font-normal font-['Poppins'] leading-normal mt-2 ml-3">
                                Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing imperdiet bibendum.
                            </p>
                            <div className='flex gap-2 mt-4 ml-3'>
                                <div className='flex '>
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                    <img src={icon1} alt="" />
                                </div>
                                <p className="text-black text-base font-normal font-['Poppins'] leading-tight">4.83</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>






            {/* =============================  Testimonial Section  ===================================== */}
            <section className='flex flex-col mt-[120px]'>
                <h1 className="text-black text-[49px] font-semibold font-['Poppins'] leading-[60px] text-center">
                    We are a global, boutique real <br /> estate brokerage
                </h1>

                <div className='flex justify-between px-10 mx-auto gap-[165px] mt-[70px]'>
                    <div className='ml-[87px] mt-[70px]'>
                        <h1 className="text-black text-[36px] font-semibold font-['Poppins'] leading-[45.60px]">
                            The transfer of real estate
                        </h1>
                        <p className="w-[474px] text-black text-left text-base font-normal font-['Poppins'] leading-normal mt-4">
                            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet <br /> sit pellentesque sollicitudin.
                            Egestas faucibus lacus diam in <br /> senectus consectetur. Mattis elit adipiscing quisque tellus <br />
                            scelerisque vehicula ante nunc. Tellus consequat nisl quis <br /> nisl justo.
                        </p>

                        <div className='flex gap-5 mt-7'>
                            <button className="px-[25px] py-[10px] bg-black rounded-[40px] border border-stone-300 text-white text-base
                            font-[24px] font-['Poppins'] leading-tight" >
                                Book Now!
                            </button>
                            <button className="px-[25px] py-[10px] bg-white rounded-[40px] border border-stone-300 text-stone-900 text-base
                            font-[24px] font-['Poppins'] leading-tight" >
                                Read more
                            </button>
                        </div>

                        <div className='flex gap-[40px] mt-[65px]'>
                            <div>
                                <p className="text-black text-[50px] font-semibold font-['Poppins'] leading-[80.40px]">12+</p>
                                <p class="text-black text-base font-normal font-['Poppins'] leading-tight">Customers</p>
                            </div>

                            <div>
                                <p className="text-black text-[50px] font-semibold font-['Poppins'] leading-[80.40px]">10+</p>
                                <p class="text-black text-base font-normal font-['Poppins'] leading-tight">Customers</p>
                            </div>

                            <div>
                                <p className="text-black text-[50px] font-semibold font-['Poppins'] leading-[80.40px]">14+</p>
                                <p class="text-black text-base font-normal font-['Poppins'] leading-tight">Customers</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <img className='w-[450px] h-[426px] mt-[20px]' src={test1} alt="" />
                    </div>
                </div>
            </section>


            {/* =============================  Footer  ===================================== */}

            <section className='gradient1 mx-auto mt-[120px] flex justify-between mb-[74px]'>
                <div className='flex flex-col py-[24px]'>
                    <div className='flex flex-col px-[80px] py-7 mt-10 gap-7'>
                        <div className='flex gap-4 flex-col'>
                            <h1 className="text-black text-[57px] font-semibold font-['Poppins']">
                                Subscribe Our Newsletter
                            </h1>
                            <p className="w-[435px] text-black text-base font-normal font-['Poppins'] leading-normal">
                            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas
                             faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                            </p>
                        </div>

                        <div className=" bg-white rounded-[40px] w-[408px] h-[60px]">
                            <div className="flex items-center justify-between gap-[125px]">
                                <p className="opacity-40 text-black text-base font-normal font-['Poppins'] ml-4 text-center">Enter your email</p>

                                <button className="w-[147px] h-[60px] bg-stone-900 rounded-[40px] text-white text-base font-semibold font-['Poppins']
                                 leading-normal">
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={house2} className="w-[606px] h-[557px]" alt="" />
                </div>
            </section>


        </>

    )
}
