import '../components/Header';
import './Time.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';

function TimeButtons() {



    return (
        <div className={'time-button__button-position'}>
            <button className={'time-button__button'} type={"button"}>9:00 am</button>
            <button className={'time-button__button'} type={"button"}>11:05 am</button>
            <button className={'time-button__button'} type={"button"}>2:00 pm</button>
        </div>
    )
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
                <Calendar
                    tileDisabled={({ date }) => !date.getDay('Sunday')}
                    onChange={setTime}
                    value={time}
                    calendarType={"US"}
                    minDate={new Date()}
                    maxDate={new Date("12-14-2022")}

                    // Event Indicator
                    tileClassName={({date, view}) => {
                        if (view === 'month' && date.getDate() === 2) {
                            return 'react-calendar--tile--event-indicator'
                        }
                    }}
                />
            </div>

            <TimeButtons />

            {/*button used to continue to next page*/}
            <continue>
                <button class = "buttonT" onClick={(e) => {updateTime(e, time)}}>Continue</button>
            </continue>

            <input type="hidden" id="stime" ></input>
        </>
    )
}

