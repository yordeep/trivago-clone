"use client"

import React from 'react';
import Searchbar from '@/Components/Searchbar';
import Filter from '@/Components/Filter';
import Styles from '@/Components/Header.module.css';
import Link from 'next/link';


const Header = () => {

    return ( 
        <div className=' mb-5'>
                 <div id={Styles.header} className='flex justify-between h-14 px-60 border-b-2'>
        <img src="https://play-lh.googleusercontent.com/C0gdwkwRgeWwtBRklQBD8XMd7ctEVuQweHscdmXIY9JWX-0NvPcpnxDcmz-m0II08mmO" alt="" className=' w-36 object-cover'/>

        <div id={Styles.right} className='flex  gap-5 px-3'>

          <Link href={"/Fav"} id={Styles.favl}>
          <h4 id={Styles.fav} className='flex items-center gap-1 px-3 h-full hover:bg-slate-100 text-sm'>
        <i id={Styles.favi} class="ri-heart-line" ></i> 
             Favorites</h4>
        <i id={Styles.favib} class="ri-heart-line" ></i>
          </Link>

        <Link href={"/Lang"} id={Styles.langi}>
        <h4 id={Styles.lang} className='flex items-center gap-1 whitespace-nowrap px-5 h-full hover:bg-slate-100 text-sm' >
        <i class="ri-global-line" style={{fontSize:'1.5vw'}}></i>
             EN.₹</h4>  
        </Link>
             
        <Link href={"/Login"} id={Styles.login}>         
            <h4 id={Styles.log} className='flex items-center gap-1 px-5 h-full whitespace-nowrap hover:bg-slate-100 text-sm'>
        <i id={Styles.logi} class="ri-account-circle-line"></i>
             Log in</h4>  
        <i id={Styles.logib} class="ri-account-circle-line"></i>
        </Link>

        <div id={Styles.menuin}>
        <h4 id={Styles.menu} className='flex items-center gap-1 px-5 h-full hover:bg-slate-100 text-sm'>
        <i id={Styles.menui} class="ri-menu-line"></i>
             Menu</h4>
        <i id={Styles.menuib} class="ri-menu-line"></i>
        <div id={Styles.menudiv1}>
          <Link id={Styles.mdl1} href={"/Menu_l1"}>  <div id={Styles.mdi1}>Recently viewed</div> </Link>
          <Link id={Styles.mdl2} href={"/Menu_l2"}> <div id={Styles.mdi2}>Help and support</div> </Link>
        </div>
        </div>
        






             
             </div>  

     </div>


     </div>
     
     );
}
 
export default Header;