import Header from '@/Components/Header';
import Link from 'next/link';
import React from 'react';
import Styles from '@/app/Fav/page.module.css';
const page = () => {
    return (
         <div className={Styles.favorite_page}>
    <Header/>

    <div className={Styles.favorite_page_left}>
    <div className={Styles.back}>
        <Link className={Styles.backlink} href={"./"}> ⟨ Back</Link>
    </div>

    <div className={Styles.favorite_page_right}>
        <div className={Styles.favorite_page_right_in}>
        <i id={Styles.favorite_icon} class="ri-heart-line" ></i>
        <div>
        <h3 className={Styles.favorite_page_right_in_h}>Keep track of stays you like </h3>
          <span className={Styles.favorite_page_right_in_p}>  <Link className={Styles.favorite_page_right_link} href={"./Login"}>Log in or create an account</Link> to save your favorites stays to your account and create your own lists.</span>
        </div>
        </div>
       <div>
       <h2 className={Styles.favorite_page_h2}>Your favourites</h2>
        <p className={Styles.favorite_page_p1}>1 list</p>
        <img className={Styles.favorite_page_img} src="https://fomantic-ui.com/images/wireframe/image.png" alt="" />
        <p className={Styles.favorite_page_p2}>Your next stay <span> (0 stays) </span></p>
       </div>
    </div>
    </div>

    </div> 
    );
}
 
export default page;