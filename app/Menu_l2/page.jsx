import React from 'react';
import Header from '@/Components/Header';
import Link from 'next/link';
import Styles from '@/app/Menu_l2/page.module.css';

const page = () => {
    return ( 
        <div >
            <Header/>
            <div id={Styles.recent}>
            <div id={Styles.recentback} >
                <Link id={Styles.rl1} href={"./"}>⟨ Back</Link>
                <Link id={Styles.rl2} href={"./Menu_l1"}>Recently Viewed</Link>
                <Link id={Styles.rl3} href={"./Menu_l2"}>Help and support</Link>
            </div>
            <div id={Styles.recentd2}>
                <h2 id={Styles.rh2}> Help and support </h2>
                <p id={Styles.hp}>to be able to quickly ask us a question you have to 
                    <Link id={Styles.hl1} href={"./Login"}> log in </Link> or <Link id={Styles.hl2}  href={"./Login"}> create an account </Link>
                    if you don't have one yet. No matter what, you can still try sending us your enqiry on our 
                    <Link id={Styles.hl3} href={""}> help center </Link>
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default page;