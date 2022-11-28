import '../components/Header';
import './Time.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';

//Function to build the calendar.
function BuildCalendar(){
    const [time, setTime] = useState(new Date());

    const onDateChange = (newDate) => {
        setTime(newDate);
        console.log(newDate);
    }

    return (
        <div>
            <Calendar onChange={onDateChange} value={time} calendarType={"US"} minDate={new Date()}
                /* Needs implementation: click on Nov 4th to show times (11:05 am)> */ />
        </div>
    );
}

export default function Time({updateTime}){


    const [time, setTime] = useState(new Date());

    const onDateChange = (newDate) => {
        setTime(newDate);
        console.log(newDate);
    }

    return(
        <>
            {/*Spaces to get under the header*/}
            {/*heading and subheading*/}
            <h1>What time works best for you?</h1>
            <p className={"subheading"}>Choose a date from the calender and an available time from the options below.</p>

            {/*Renders the calendar.*/}
            <div>
                <Calendar onChange={onDateChange} value={time} calendarType={"US"} minDate={new Date()}
                    /* Needs implementation: click on Nov 4th to show times (11:05 am)> */ />
            </div>

            {/*button used to continue to next page*/}
            <continue>
                <button class = "buttonT" onClick={(e) => {updateTime(e, time)}}>Continue</button>
            </continue>

            <input type="hidden" id="stime" ></input>
        </>
    )
}

