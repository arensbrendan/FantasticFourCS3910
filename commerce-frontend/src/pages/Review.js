import './Review.css';


export default function Review(props){

    const BookSuccess =(e) =>{
        e.preventDefault();
        fetch("http://localhost:8080/appointments", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(props.appointment)
        })
            .then(window.alert("Appointment Booked!"));

    }

    if(props.appointment.time.getDate() === null){
        props.appointment.time.setDate(`Wed Nov 30 2022 00:00:00`);
    }
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
                    <p className={"reviewPara"}>{props.appointment.time.getUTCMonth() + 1}/{props.appointment.time.getDate()}/{props.appointment.time.getUTCFullYear()}<br/>at <br/>11:05am </p>

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
                <button className={"buttonR"} onClick={BookSuccess}>Book Appointment</button>
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