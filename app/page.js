import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Searchbar from '@/Components/Searchbar';
import Filter from '@/Components/Filter';
import React from 'react';
import Content from '@/Components/Content';
// import Map from '@/Components/Map';

const page = () => {
    return ( 
    <div >
    <Header/>
    <Searchbar/>
     <Filter/>
    <Content/>
    <Footer/>
    {/* <Map/> */}
    </div> 
    );
}
 
export default page;