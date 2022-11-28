import './Review.css';


export default function Review(props){




    return(

        <>
            {/*Spaces to get under the header*/}
            {/*Heading and subheading*/}
            <h1>Here's a review of you appointment!</h1>
            <p className={"subHeading1"}>Please ensure that all details are correct, if not, you can go back and change them.</p>

            {/*display the contents of the appointment*/}
            <div className={"gridR"}>

                {/*Box1 will handle the Date and time that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Date and Time</h1> <br/>
                    <p className={"reviewPara"}>{props.appointment.time.getDate()} <br/>at <br/>11:05am </p>

                </div>

                {/*Box2 will handle the Location that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Location</h1> <br/>
                    <p className={"reviewPara"}>{props.appointment.location}</p>

                </div>

                {/*Box3 will handle the Service that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Service</h1> <br/>
                    <p className={"reviewPara"}>{props.appointment.purpose}</p>

                </div>

                {/*continue button*/}

            </div>
            <continue>
                <button className={"buttonR"} onClick={"BookSuccess"}>Book Appointment</button>
            </continue>

            <continue>
                <button name= "deleteButton" className={"buttonDelete"}>Delete Appointment</button>
            </continue>

            <h1 className={"reviewThank"}>Thank you for choosing Commerce Bank!</h1>


            {/*breaks for consistent spacing*/}
            <br/>
            <br/>





        </>

    )
}

//an attempt for future frontend/backend
function BookSuccess(){
    document.getElementById("bookButton").innerHTML = "Success! Your appointment has been made, we'll see you then!";
    return(
        <h1>Success! Your appointment has been made, we'll see you then!</h1>
    )

}