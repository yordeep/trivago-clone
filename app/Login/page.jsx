import React from 'react';
import Styles from '@/app/Login/page.module.css';
import { ST } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
const page = () => {
    return ( 
       <div className={Styles.outer_login}>
         <div className={Styles.login}>
            <img src="https://play-lh.googleusercontent.com/C0gdwkwRgeWwtBRklQBD8XMd7ctEVuQweHscdmXIY9JWX-0NvPcpnxDcmz-m0II08mmO" alt="" className=' w-36 object-cover' />
            <h3 className={Styles.logh}>Login or create an account</h3>
            <p className={Styles.logp}>your email address</p>
            <input  type="email" name="" className={Styles.login_inp}/>
            <button className={Styles.logb}>Next</button>
            <p className={Styles.logor}>----------------   OR   -----------------</p>
            <Link href={""} className={Styles.gil}>
                <img className={Styles.gi} src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="" />
                Continue with Google
            </Link>
            <Link href={""} className={Styles.ail}>
                <img className={Styles.ai} src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="" />
                Continue with Apple
            </Link>
            <Link  href={""} className={Styles.fil}>
                <img className={Styles.fi} src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" alt="" />
                Continue with Facebook
            </Link>

            <p className={Styles.log2}>By creating an account, you agree to our
                <span  >
                    <Link className={Styles.logs1} href={""}> Privacy policy </Link>
                </span>
                 and
                <span >
                    <Link className={Styles.logs2} href={""}> Terms of use.</Link>
                </span>
            </p>
        </div>
       </div>
     );
}
 
export default page;