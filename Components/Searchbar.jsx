import React from 'react';
import Styles from '@/Components/Searchbar.module.css';
import Calendar from '@/Components/Calendar';

const Search = () => {
    return ( 
        <div className='flex items-center justify-center'>

<div id={Styles.sb} className='  flex justify-start items-center border rounded-xl w-fit my-5 shadow-xl '>
        <div id={Styles.sbi} className='flex items-center justify-center'>
            <div id={Styles.s} className="  h-14 flex justify-center items-center gap-3 p-1  hover:bg-slate-100 hover:rounded-lg m-1 pr-1 border-r-2">
            <i id={Styles.si} class="ri-search-line"></i>
            <span className='flex flex-col'>
            <span className=' text-xs'>Destination</span>
            <input type="text" placeholder='Mumbai' className=' border-none outline-none text-black '/>
            </span>

            <i id={Styles.ci} class="ri-close-line"></i>
            </div>



            {/* Check in */}

            <div id={Styles.cin} className="  h-14 flex justify-center items-center gap-5 p-1 hover:bg-slate-100 hover:rounded-lg m-1  pl-7 pr-5 border-r-2">
            <i class="ri-calendar-line" style={{fontSize:'1.5vw'}}></i>
            <span className='flex flex-col'>
            <span className=' text-xs'>Check-in</span>
            {/* <span className='text-xs font-bold'>Sun,10-12-2023</span> */}
            <Calendar/>
            {/* <input type="text" placeholder='Mumbai' className=' border-none outline-none text-black '/> */}
            </span>

            </div>

            {/* Check out */}

            <div id={Styles.cout} className="  h-14 flex justify-center items-center gap-5 p-1 hover:bg-slate-100 hover:rounded-lg m-1 pr-10 border-r-2">
            <span className='flex flex-col'>
            <span className=' text-xs'>Check-out</span>
            {/* <span className='text-xs font-bold'>Mon,11-10-2023</span> */}
            <Calendar/>
            {/* <input type="text" placeholder='Mumbai' className=' border-none outline-none text-black '/> */}
            </span>

            </div>

            {/* check in / out */}

            <div id={Styles.cio} className="  h-14 flex justify-center items-center gap-5 py-3 px-2 hover:bg-slate-100 hover:rounded-lg m-1 pr-10 border-r-2">
            <i id={Styles.cai} class="ri-calendar-line" ></i>
            <span className='flex flex-col'>
            <span id={Styles.cioo} className=' text-xs'>Check-in/out</span>
            {/* <span id={Styles.ciot} className='text-xs font-bold'>10 Dec - 11 Dec</span> */}
            <div id={Styles.cal}>
            <Calendar/>/<Calendar className=" mx-5"/>
            </div>
            {/* <input type="text" placeholder='Mumbai' className=' border-none outline-none text-black '/> */}
            </span>

            </div>

            <div id={Styles.r} className="  h-14 flex justify-center items-center gap-5 p-1 hover:bg-slate-100 hover:rounded-lg m-1 pr-10 border-r-2">
            <i id={Styles.ri} class="ri-hotel-bed-line"></i>
            <span className='flex flex-col'>
            <span id={Styles.ro} className=' text-xs'>Hotel and Rooms</span>
            <span id={Styles.rt} className='text-xs font-bold'>2 Guests,1 room</span>
            {/* <input type="text" placeholder='Mumbai' className=' border-none outline-none text-black '/> */}
            </span>

            {/* <i class="ri-close-line" style={{fontSize:'1.2vw'}}></i> */}
            </div>

            <button id={Styles.sbb} className=' bg-blue-500 ml-20 px-5 py-2 rounded mr-2 text-white text-xl' >Search</button>

           
        </div>
        </div>


        </div>
        
     );
}
 
export default Search;