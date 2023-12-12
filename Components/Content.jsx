"use client"
import React, { useState } from 'react';
import Styles from '@/Components/Content.module.css';
import Page from '@/Components/Page';



const Content = () => {
    return ( 
        <div id={Styles.cont} className=' bg-gray-200 h-full w-full flex justify-start flex-col items-center pb-5'>

            {/* first box */}
            

                <div id={Styles.box1} className=' flex bg-white w-fit border rounded-xl gap-5 my-3'>
                    <img className=' rounded-l-xl' src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/25/6e/70148cee6ab99bd1811f6809a3b0200d1982bfcccf07b945b80a5c0d65e3.jpeg" alt="" />


                    <div >
                        <h3 id={Styles.b1h} className=' font-bold text-lg flex justify-between items-center w-96 mb-3 pt-2'>The Westin Mumbai Garden City
                        <i id={Styles.hi1} class="ri-heart-line" ></i></h3>
                        <div id="rate" className='flex gap-2' >
                            <div>
                            <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                            </div>
                        Hotel
                        </div>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>10.8 km to City center <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span></span>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>
                            <span className=' font-bold'>
                            9.2 Excellent <span className=' font-light'>(1141 reviews)</span>
                            </span>
                         <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span>
                         </span>


                    </div>


                  <div className='flex flex-col'>
                  <div className=' bg-green-100 rounded-xl m-2 p-2 border border-green-500 hover:bg-green-200'>
                            <h3 className=' font-bold'>Westin</h3>
                            <p className=' text-green-800'><i class="ri-check-line"></i> Pay at the property</p>
                            <span className='flex justify-between items-center mt-2 text-green-800 font-bold'>₹17,700 <button className=' bg-green-500 text-white rounded-lg p-2 font-normal' >view Deal <i class="ri-arrow-right-s-line"></i></button></span>
                 </div>
                
                <div className='flex gap-2 mx-3'>
                <div className='flex flex-col bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-3 rounded-xl text-xs'>Trip.com <span className='font-bold text-base'>₹17,700</span></div>


                <div className='flex bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-2 rounded-xl gap-2'>
                 <span className='flex flex-col text-xs '>Our lowest price: <span className=' text-base font-bold'>₹17,683 <span className=' font-light text-xs'>prestigia</span></span></span>
                <i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i>
                 </div>
                </div>


                  </div>
                </div>




                    {/* Second box */}


                <div id={Styles.box2} className=' flex bg-white w-fit h-fit border rounded-xl gap-5 my-3'>
                    <img className=' rounded-l-xl' src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/04/df/6bafedb480c3f0b9d6b0fc61c350ec49bdc1bb0f3591c6f44d2ce0611e35.jpeg" alt="" />


                    <div>
                        <h3 id={Styles.b2h} className=' font-bold text-lg flex justify-between items-center w-96 mb-3 pt-2'>The St.Regis Mumbai
                        <i id={Styles.hi2} class="ri-heart-line" ></i></h3>
                        <div id="rate" className='flex gap-2' >
                            <div>
                            <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                            </div>
                        Hotel
                        </div>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>10.7 km to City center <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span></span>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>
                            <span className=' font-bold'>
                            9.8 Excellent <span className=' font-light'>(1189 reviews)</span>
                            </span>
                         <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span>
                         </span>


                    </div>



                  <div className='flex flex-col'>
                  <div className=' bg-green-100 rounded-xl m-2 p-2 border border-green-500 hover:bg-green-200'>
                            <h3 className=' font-bold'>St.Regis</h3>
                            <p className=' text-green-800'><i class="ri-check-line"></i> Pay at the property</p>
                            <span className='flex justify-between items-center mt-2 text-green-800 font-bold'>₹23,010 <button className=' bg-green-500 text-white rounded-lg p-2 font-normal' >view Deal <i class="ri-arrow-right-s-line"></i></button></span>
                 </div>
                
                <div className='flex gap-2 mx-3'>
                <div className='flex flex-col bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-3 rounded-xl text-xs'>Booking.com <span className='font-bold text-base'>₹23,010</span></div>


                <div className='flex bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-2 rounded-xl gap-2'>
                 <span className='flex flex-col text-xs '>Our lowest price: <span className=' text-base font-bold'>₹22,988 <span className=' font-light text-xs'>prestigia</span></span></span>
                <i class="ri-arrow-drop-down-line" ></i>
                 </div>
                </div>


                  </div>
                </div>

                {/* third box */}

                <div id={Styles.box3} className=' flex bg-white w-fit h-fit border rounded-xl gap-5 my-3'>
                    <img className=' rounded-l-xl' src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/c8/e6/4d13438e8004bddc499b42ca71f7bc2b9b013259805ae5385b2f21651712.jpeg" alt="" />


                    <div>
                        <h3 id={Styles.b3h} className=' font-bold text-lg flex justify-between items-center w-96 mb-3 pt-2'>Ramada Navi Mumbai
                        <i id={Styles.hi3} class="ri-heart-line" ></i></h3>
                        <div id="rate" className='flex gap-2' >
                            <div>
                            <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                            </div>
                        Hotel
                        </div>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>15.2 km to City center <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span></span>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>
                            <span className=' font-bold'>
                            8.1 very good <span className=' font-light'>(501 reviews)</span>
                            </span>
                         <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span>
                         </span>


                    </div>



                  <div className='flex flex-col'>
                  <div className=' bg-green-100 rounded-xl m-2 p-2 border border-green-500 hover:bg-green-200'>
                            <h3 className=' font-bold'>Ramada</h3>
                            {/* <p className=' text-green-800'><i class="ri-check-line"></i> Pay at the property</p> */}
                            <span className='flex justify-between items-center mt-2 text-green-800 font-bold'>₹6,426 <button className=' bg-green-500 text-white rounded-lg p-2 font-normal' >view Deal <i class="ri-arrow-right-s-line"></i></button></span>
                 </div>
                
                <div className='flex gap-2 mx-3'>
                <div className='flex flex-col bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-3 rounded-xl text-xs'>Booking.com <span className='font-bold text-base'>₹6,426</span></div>


                <div className='flex bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-2 rounded-xl gap-2'>
                 <span className='flex flex-col text-xs '>Our lowest price: <span className=' text-base font-bold'>₹5,395 <span className=' font-light text-xs'>MakeMyTrip</span></span></span>
                <i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i>
                 </div>
                </div>


                  </div>
                </div>

           {/* fourth box */}

                                <div id={Styles.box4} className=' flex bg-white w-fit h-fit border rounded-xl gap-8 my-3 mb-6'>
                    <img className=' rounded-l-xl' src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/5c/5c/89281268a1851813ed83f067b89d716ea6aebb72b1b53736332542ea6693.jpeg" alt="" />


                    <div>
                        <h3 id={Styles.b4h} className=' font-bold text-lg flex justify-between items-center w-96 mb-3 pt-2'>Sahara Star
                        <i id={Styles.hi4} class="ri-heart-line" ></i></h3>
                        <div id="rate" className='flex gap-2' >
                            <div>
                            <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                            </div>
                        Hotel
                        </div>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>3.2 km to City center <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span></span>
                        <span className=' flex items-center justify-between hover:bg-gray-100'>
                            <span className=' font-bold'>
                            7.9 good <span className=' font-light'>(2280 reviews)</span>
                            </span>
                         <span><i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i></span>
                         </span>


                    </div>



                  <div className='flex flex-col'>
                  <div className=' bg-green-100 rounded-xl m-2 p-2 border border-green-500 hover:bg-green-200'>
                            <h3 className=' font-bold'>MakeMyTrip</h3>
                            <p className=' text-green-800'><i class="ri-check-line"></i> Free cancellation</p>
                            <span className='flex justify-between items-center mt-2 text-green-800 font-bold'>₹24,426 <button className=' bg-green-500 text-white rounded-lg p-2 font-normal' >view Deal <i class="ri-arrow-right-s-line"></i></button></span>
                 </div>
                
                <div className='flex gap-2 mx-3'>
                <div className='flex flex-col bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-3 rounded-xl text-xs'>trip.com <span className='font-bold text-base'>₹19,107</span></div>


                <div className='flex bg-gray-100 hover:bg-gray-200 border border-gray-400 w-fit px-2 rounded-xl gap-2'>
                 <span className='flex flex-col text-xs '>Our lowest price: <span className=' text-base font-bold'>₹19,107 <span className=' font-light text-xs'>Trip.com</span></span></span>
                <i class="ri-arrow-drop-down-line" style={{fontSize:'2vw'}}></i>
                 </div>
                </div>


                  </div>
                </div>
                <Page/>
        </div>
     );
}
 
export default Content;