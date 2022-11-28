import {Route, Routes} from 'react-router-dom';
import Purpose from './pages/Purpose.js';
import React, { useEffect, useState } from "react";
import Error from './pages/Error.js';

import Location from "./pages/Location";
//import './pages/Purpose.css';
import './components.css'
import Review from "./pages/Review";
import Details from "./pages/Details";
import Time from "./pages/Time";
import Menu from './components/Menu.js';
import NavMenu from './components/NavMenu.js';


function App(){


    const appointment = {
        purpose: "",
        location:"",
        time:"",
        fname:"",
        lname:"",
        email:"",
        phone:"",
    };


    const [aptmnt, setAptmnt] = useState(appointment);
    const [status, setStatus] = useState(0);

    useEffect(()=>{
        console.log("Appjs status " );
        setStatus(status);
    },[])

    const updateState=(e, state)=>{

        //e.preventDefault();
        //setAptmnt(state);
        console.log("update state : " + state);
        setStatus(state);


        console.log(aptmnt);

    }

    const updatePurpose=(e, data)=>{

        // e.preventDefault();

        if(data !== 'status'){
            console.log("purpose : " + data);
            setAptmnt({...aptmnt,  purpose:data});
        }

        if(data === 'status'){
            setStatus(1);
        }
        console.log(aptmnt);
    }

    const updateLocation=(e, data)=>{

        e.preventDefault();
        console.log("location : " + data);
        setStatus(2);
        setAptmnt({...aptmnt,  location:data});
        console.log("2 appointment =>")
        if(data === 'status'){
            setStatus(2);
        }
        console.log(aptmnt);

    }

    const updateTime=(e, data)=>{

        //e.preventDefault();

        if(data !== 'status'){
            console.log("time : " + data);
            setStatus(3);
            setAptmnt({...aptmnt,  time:data});
        }
        console.log("3 appointment =>")
        if(data === 'status'){
            setStatus(3);
        }
        console.log(aptmnt);
    }

    const updateDetails=(e, data)=>{

        //e.preventDefault();

        console.log("fname : " + data);
        setAptmnt({...aptmnt,  fname:data.fname});
        setAptmnt({...aptmnt,  lname:data.lname});
        setAptmnt({...aptmnt,  email:data.email});
        setAptmnt({...aptmnt,  phone:data.phone});
        setStatus(4);
        console.log("4 appointment =>")

        setStatus(4);

        console.log(aptmnt);
    }
    const updateReview=(e, data)=>{
        e.preventDefault();
        console.log("review : " + data);
        setStatus(4);
    }

    return (
        <div>
            <Menu />
            <NavMenu key={status} barstate={status} updateState={updateState} />
            {(status===0)&&<Purpose updatePurpose={updatePurpose}/>}
            {(status===1)&&<Location updateLocation={updateLocation}/>}
            {(status===2)&&<Time updateTime={updateTime}/>}
            {(status===3)&&<Details updateDetails={updateDetails}/>}
            {(status===4)&&<Review appointment = {aptmnt} updateReview={updateReview}/>}

            {/* Routes will be the key to getting all webpages to load, based on their /url
                    <Routes>
                        <Route path="/" element={<Purpose />} />
                        <Route path="/Location" element={<Location />} />
                        <Route path="/Time" element={<Time />} />
                        <Route path="/Details" element={<Details />} />
                        <Route path="/Review" element={<Review />} />
                        <Route path="*" element={<Error />} />
                    ERROR PAGE MUST BE LAST ROUTE
                    </Routes> */}
            {/*footnote will follow every pages contents*/}
            {/*Begin Footnote*/}
            <footnote>
                <p className="center1">Brendan Arens - Jackson Gordon - Megan Lesmeister - Adam Meloy</p>
                <p>SE3910 - Commerce Bank Project - Fall 2022</p>
            </footnote>
            {/*End Footnote*/}

        </div>
    )
}
export default App;