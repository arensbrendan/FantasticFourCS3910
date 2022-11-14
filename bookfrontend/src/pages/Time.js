import '../components/Header';
import './Time.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function TimeButtons() {
    return (
        <div>
            <button className={'time-button__button'} type={"button"}>9:00 am</button>
            <button className={'time-button__button'} type={"button"}>11:05 am</button>
            <button className={'time-button__button'} type={"button"}>2:00 pm</button>
        </div>
    )
}

//Function to build the calendar.
function BuildCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                calendarType={"US"}
                minDate={new Date()}
                maxDate={new Date("12-10-2022")}

                // Event Indicator
                tileClassName={({date, view}) => {
                    if (view === 'month' && date.getDate() === 14) {
                        return 'react-calendar--tile--event-indicator'
                    }
                }}
            />
        </div>
    );
}

export default function Time(){

    return(
        <>
            {/*Spaces to get under the header*/}
            <div>Header Hides</div>
            <div>Header Hides</div>
            <div>Header Hides</div>
            <div>Header Hides</div>

            <prog>
                {/*progbarfix is a fix for every prog bar bedsides the one on the purpose page, this is due to a mistake in the CSS in the purpose.css*/}
                <div className={"progbarfix"}>
                    {/*Start Navbar*/}
                    {/*each li is what you can consider to be a circle, with the label li following*/}
                    <div className="container">
                        <ul className="progress-bar">
                            {/*DO NOT KNOW HOW TO DEAL WITH GOING TO A FUTURE PAGE PAST THE ONE IN FRONT IF CUSTOMER HAS BEEN TO IT, MAY SCRAP FEATURE*/}
                            <li>
                                {/*First status circle*/}
                                <div className = "done"><a  className={"doneA"} href={"./"}><b>1</b></a></div>
                                <div><a  href={"./"}><b>Purpose</b></a></div>
                            </li>
                            <li>
                                {/*Second status circle*/}
                                <div className = "done"><a className={"doneA"} href = "./Location"><b>2</b></a></div>
                                <div><a href = "./Location"><b>Location</b></a></div>
                            </li>
                            <li>
                                {/*Third status circle*/}
                                <div className = {"current"}><a href = "./Time" ><b>3</b></a></div>
                                <div><a href = "./Time"><b>Time</b></a></div>
                            </li>
                            <li>
                                {/*Fourth status circle*/}
                                <div className = "./Details"><a href = "./Details"><b>4</b></a></div>
                                <div><a href = "./Details"><b>Details</b></a></div>
                            </li>
                            <li>
                                {/*Fifth status circle*/}
                                <div><a href = "./Review"><b>5</b></a></div>
                                <div><a href = "./Review"><b>Review</b></a></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </prog>

            {/*heading and subheading*/}
            <h1>What time works best for you?</h1>
            <p className={"subheading"}>Choose a date from the calender and an available time from the options below.</p>

            {/*Renders the calendar.*/}
            <BuildCalendar />

            {/* Renders the time buttons. */}
            <TimeButtons />

            {/*button used to continue to next page*/}
            <continue>
                <a href= "./Details" className={"buttonP"}><button>Continue</button></a>
            </continue>
        </>
    )
}

