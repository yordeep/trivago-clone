import React from 'react';
import Page from '../page';
import Styles from '@/app/Lang/page.module.css';
import Link from 'next/link';
const page = () => {
    return ( 
        <div>
            <Page/>
            <div className={Styles.language}>
                <div className={Styles.langdiv}>
                   <div className={Styles.langh}>
                   <h3 className={Styles.langh3}>Select language and currency</h3>
                    <Link href={"./"}>
                    <i id={Styles.ci} class="ri-close-line"></i>
                    </Link>
                   </div>
                    <p className={Styles.langp1}>Language</p>
                    <select className={Styles.langs1} name="" id="">
                        <option value="">English</option>
                    </select>
                    <p className={Styles.langp2}>Currency</p>
                    <select className={Styles.langs2} name="" id="">
                        <option value="">INR - Indian Rupees</option>
                    </select>
                    <button className={Styles.langb}>apply</button>
                </div>
            </div>
        </div>
     );
}
 
export default page;