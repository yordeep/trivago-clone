"use client"
import React, { useState } from 'react';
import { Pagination, Typography } from '@mui/material';



const Map = () => {
    const [page, setpage] = useState(1);

    const handleChage = (e,p)=>{
        console.log(e,p);
        setpage(p);
    }
    return ( <div>
        <Pagination count={3} color="primary" onChange={handleChage} page={page}/>
    </div> );
}
 
export default Map;