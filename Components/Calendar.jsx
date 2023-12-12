"use client"
import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Styles from '@/Components/Calendar.module.css';

const Calendar = () => {
    

    const [date, setdate] = useState(new Date());
    return ( 
        <div>
            <Datepicker className={Styles.date}
             selected={date} 
             onChange={(date)=>setdate(date)}
             dateFormat="dd-EE"
             />
        </div>
     );
}
 
export default Calendar;