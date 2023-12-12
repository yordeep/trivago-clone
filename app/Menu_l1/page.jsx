import React from 'react';
import Header from '@/Components/Header';
import Link from 'next/link';
import Styles from '@/app/Menu_l1/page.module.css';

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
                <h2 id={Styles.rh2}> Recently Viewed </h2>
                <p>you have no interacted with any accommodations recently on this device</p>
                <img id={Styles.rimg} src="https://imgcy.trivago.com/image/upload/v1645091670/hardcodedimages/member-area/empty-recently-viewed.svg" alt="" />

            </div>
            </div>
        </div>
     );
}
 
export default page;