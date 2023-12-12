import Link from 'next/link';
import React from 'react';
import Styles from '@/Components/Footer.module.css';



const Footer = () => {
    return ( 

    
    <div className=' bg-black text-white flex justify-center items-center flex-col'>

        

    <div id={Styles.fone} className='flex justify-between items-center  w-2/3 text-2xl font-bold my-10'>
        <span>trivago</span>
        <span className='font-light flex items-center gap-1 text-xl'>
            <Link href={"https://www.facebook.com/"}>
            <i class="ri-facebook-circle-fill"></i>
            </Link>
            <Link href={"https://www.twitter.com/"}>
            <i class="ri-twitter-x-line"></i>
            </Link>

            <Link href={"https://www.instagram.com/"}>
            <i class="ri-instagram-line"></i>
            </Link>

            <Link href={"https://www.youtube.com/"}>
            <i class="ri-youtube-line"></i>
            </Link>

            <Link href={"https://www.linkedin.com/"}>
            <i class="ri-linkedin-fill"></i>
            </Link>
        </span>
    </div>

    <div id={Styles.ftwo} className=' w-2/3'>
    <div className=' flex items-center justify-between w-fit border border-white rounded-lg mb-2 px-2'>
    <img src="https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_640.png" alt="" className=' w-7 bg-white'/>
        <select name="" id="" className=' bg-black outline-none w-full p-2'>

            <option value="India">India</option>
        </select>
    </div>
    </div>

    <div id={Styles.fthree} className=' w-2/3 my-10 flex'>
        <div id={Styles.tho} className=' flex gap-10 text-sm p-4 w-1/2 '>

            <div id={Styles.thf}>
                <ul>
                    <li className=' pb-2'>
                        <Link href={""}>Company</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Jobs</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Press</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Investor relations</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Mobile apps-searching on the go</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>trivago Business Studio</Link>
                    </li>
                </ul>
            </div>

            <div id={Styles.ths}>

            <ul>
                    <li className=' pb-2'>
                        <Link href={""}>Help</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Learn how trivago works</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Terms and conditions</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Legal information</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Do Not Sell My Personal Information</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Privacy notice</Link>
                    </li>
                    <li className=' pb-2'>
                        <Link href={""}>Cyber Security</Link>
                    </li>
                </ul>

            </div>

        </div>
        <div id={Styles.tht} className=' p-4 w-1/2'>

           <div id={Styles.thto}>
           <h3 className=' text-xl font-semibold mb-4'>Get exclusive inspiration for your next stay - subscribe to our newsletter.</h3>

           <form className='flex justify-between items-center my-2' id={Styles.ff}>
           <input  type="email" name="" id={Styles.fin} placeholder="Email address" className=' border-b-2 border-blue-400 outline-none bg-black text-white w-full h-10 p-2 '/>
           <button className='boreder rounded-full bg-blue-500 px-7 py-2 '>subscribe</button>
           </form>
           </div>

           <p className=' text-sm text-gray-300'> tivago <span className=' font-bold'>N.V.</span> KesselstraBe 5 - 7, 40221 Dusseldorf, Germany</p>
           <p className=' text-sm text-gray-300'>Copyright 2023 trivago | All rights reserved.</p>
           
        </div>

    </div>


    </div> 
    
    );
}
 
export default Footer;