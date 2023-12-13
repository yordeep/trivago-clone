"use client"
import React, { useState } from 'react';
import Styles from '@/Components/Filter.module.css';
import Slider from '@/Components/Slider';

const Filter = () => {
    return ( 

        <div id={Styles.f} className=' mb-4'>
             <div id={Styles.fi} className='flex justify-center items-center gap-2'>
            <div id={Styles.per} className='flex flex-col'>
                <span className='ml-3 pb-2 font-bold text-xs'>Price: <span className=' font-normal text-xs'>per night</span></span>
                <div id={Styles.fs0}>
                    ₹0 - ₹45,000+
                    <i id={Styles.fs0i} class="ri-arrow-down-s-line"></i>
                <i id={Styles.fs0iu} class="ri-arrow-up-s-line"></i>
                </div>
                <div id={Styles.prir}>
                    <div id={Styles.prid}>
                        <span>Set price range</span>
                        <span id={Styles.prids}>
                            <span id={Styles.prids1}>per night</span>
                            <span id={Styles.prids2}>total stay</span>
                        </span>
                    </div>
                <Slider/>
                <div id={Styles.ftb}>
                        <button id={Styles.ftbr}>reset</button>
                        <button id={Styles.ftba}>apply</button>
                    </div>
                </div>
            </div>


            <div id={Styles.filter} className='flex flex-col'> 
            <span className=' font-bold text-xs ml-3 pb-2'>Filters</span>
            <div id={Styles.fs1}>
                    Select
                    <i id={Styles.fs1i} class="ri-arrow-down-s-line"></i>
                <i id={Styles.fs1iu} class="ri-arrow-up-s-line"></i>
                </div>
                <div id={Styles.fil}>
                    <div id={Styles.fil1}>
                        <span id={Styles.fil1h}>Hotel Class</span>
                        <span id={Styles.fil1r}>
                            <div id={Styles.filrb}>
                                0-1
                        <i id={Styles.star} class="ri-star-line"></i>
                            </div>
                            <div id={Styles.filrb}>
                                2
                        <i id={Styles.star} class="ri-star-line"></i>
                            </div>
                            <div id={Styles.filrb}>
                                3
                        <i id={Styles.star} class="ri-star-line"></i>
                            </div>
                            <div id={Styles.filrb}>
                                4
                        <i id={Styles.star} class="ri-star-line"></i>
                            </div>
                            <div id={Styles.filrb}>
                                5
                        <i id={Styles.star} class="ri-star-line"></i>
                            </div>
                        </span>
                    </div>
                    <div id={Styles.fil2}>
                    <span id={Styles.fil2h}>Popular filters</span>
                    <div id={Styles.fil2l}>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Free cancellation
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />All-inclusive
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Beach
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Parking
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Kicthen
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Pet freindly
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Pat at the property
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Spa
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Half board
                        </span>
                    </div>

                    <div id={Styles.fil2r}> 
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Breakfast included
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Pool
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />WIFI
                        </span >
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Air conditioning
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Restaurant
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Family friendly
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Hot tub
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Gym
                        </span>
                        <span id={Styles.fil2ls}>
                            <input type="checkbox" name="" id="" />Full board
                        </span>
                    </div>
                    <div>

                    </div>
                    </div>
                    <div id={Styles.ptb}>
                        <button id={Styles.ptbr}>reset</button>
                        <button id={Styles.ptba}>apply</button>
                    </div>
                </div>
            </div>


            <div id={Styles.guest} className='flex flex-col'>
            <span className=' font-bold text-xs ml-3 pb-2'>Guest rating</span>
            <div id={Styles.fs2}>
                    All
                    <i id={Styles.fs2i} class="ri-arrow-down-s-line"></i>
                <i id={Styles.fs2iu} class="ri-arrow-up-s-line"></i>
                </div>
                <div id={Styles.gr}>
                    <div id={Styles.gr1}>
                        <span id={Styles.gr1s}>8.5+</span>
                        <span>Excellent</span>
                    </div>
                    <div id={Styles.gr2}>
                        <span id={Styles.gr2s}>8.0+</span>
                        <span>very good</span>
                    </div>
                    <div id={Styles.gr3}>
                        <span id={Styles.gr3s}>7.5+</span>
                        <span>good</span>
                    </div>
                    <div id={Styles.gr4}>
                        <span id={Styles.gr4s}>7.0+</span>
                        <span>fine</span>
                    </div>
                    <div id={Styles.ptb}>
                        <button id={Styles.ptbr}>reset</button>
                        <button id={Styles.ptba}>apply</button>
                    </div>
                </div>
            </div>


            <div id={Styles.prot} className='flex flex-col'>
            <span className=' font-bold text-xs ml-3 pb-2'>Property type</span>
                <div id={Styles.fs3}>
                    All
                    <i id={Styles.fs3i} class="ri-arrow-down-s-line"></i>
                <i id={Styles.fs3iu} class="ri-arrow-up-s-line"></i>
                </div>
                <div id={Styles.pt}>
                    <div id={Styles.pt1}>
                    <input type="radio" name="property_type" id="" value={"all"} />All
                    </div>

                    <div id={Styles.pt2}>
                    <input type="radio" name="property_type" id="" value={"hotel"} />hotel
                    </div>

                    <div id={Styles.pt3}>
                    <input type="radio" name="property_type" id="" value={"house / apatrment"} />House / apartment
                    </div>
                    <div id={Styles.ptb}>
                        <button id={Styles.ptbr}>reset</button>
                        <button id={Styles.ptba}>apply</button>
                    </div>
                </div>
            </div>


            <div id={Styles.loca} className='flex flex-col'>
            <span className=' font-bold text-xs ml-3 pb-2'>Location</span>
            <div id={Styles.fs4}>
                city center
                <i id={Styles.fs4i} class="ri-arrow-down-s-line"></i>
                <i id={Styles.fs4iu} class="ri-arrow-up-s-line"></i>

            </div>
            <div id={Styles.lf}>
              <h3 id={Styles.lfh3}>Find my stay close to...</h3>
              <p id={Styles.lfp1}>this popular site:</p>
              <select name="" id={Styles.lfs1}>
                <option value="">city center</option>
              </select>
              <p id={Styles.lfp2}>or this address:</p>
              <select name="" id={Styles.lfs2}>
                <option value="">....</option>
              </select>


             </div>
             
            </div>
        </div>
        </div>
       
     );
}
 
export default Filter;