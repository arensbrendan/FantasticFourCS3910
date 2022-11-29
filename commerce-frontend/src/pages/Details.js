import { createContext, useContext, useEffect, useState } from 'react';
import './Details.css';


function Details({updateDetails}){




    const[user, setUser] = useState({
        fname:'',
        email:'',
        lname:'',
        phone:'',
    });



    const changeValue=(e)=>{
        console.log(e);

        setUser({
            ...user, [e.target.name]:e.target.value
        });
        console.log( " name : " + e.target.value   );

    }


    return(

        <>
            {/*Spaces to get under the header*/}
            {/*heading and subheading for the Details page*/}
            <h1>We just need a few more details about your visit!</h1>
            <p className={"subheading"}>Please provide all information asked in the boxes below</p>

            {/*using a grid to align the contents of Details, this promises even spacing and is just more useful*/}
            <form action={"./Review"}>
                <div className={"grid"}>
                    {/*set up as LABEL - INPUT - LABEL - INPUT to line up correctly */}


                    <label className={"grid-item1"} htmlFor={"fname"}><b>First Name:</b></label>
                    <label className={"grid-item1"} htmlFor={"email"}><b>Email:</b></label>

                    <input onChange = {changeValue} name="fname" value = {user.fname}  type={"text"}   className={"grid-item"} required />
                    <input onChange = {changeValue} name="email" value = {user.email} type={"email"} placeholder={"example@email.com"} className={"grid-item"} required/>

                    <label className={"grid-item3"} htmlFor={"lname"}><b>Last Name:</b></label>
                    <label className={"grid-item3"} htmlFor={"phone"}><b>Phone Number:</b></label>

                    <input onChange = {changeValue} name="lname" type={"text"}  value = {user.lname}className={"grid-item2"} required/>
                    <input onChange = {changeValue} name="phone" type={"tel"}  value = {user.phone} placeholder={"(888)-555-3333"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} className={"grid-item2"} required/>

                </div>

                {/*continue button*/}
                <continue>
                    <button onClick={(e) => {updateDetails(e, user)}} className={"buttonD"}>Continue</button>
                </continue>
            </form>
        </>

    )
}
export default Details;