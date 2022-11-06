import './Review.css';


export default function Review(){
    return(

        <>
            {/*Spaces to get under the header*/}
            <div>Header Hides</div>
            <div>Header Hides</div>
            <div>Header Hides</div>
            <div>Header Hides</div>

            <prog>
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
                                <div className = "done"><a className={"doneA"} href = "./Time" ><b>3</b></a></div>
                                <div><a href = "./Time"><b>Time</b></a></div>
                            </li>
                            <li>
                                {/*Fourth status circle*/}
                                <div className = "done"><a className={"doneA"} href = "./Details"><b>4</b></a></div>
                                <div><a href = "./Details"><b>Details</b></a></div>
                            </li>
                            <li>
                                {/*Fifth status circle*/}
                                <div className={"current"}><a href = "./Review"><b>5</b></a></div>
                                <div><a href = "./Review"><b>Review</b></a></div>
                            </li>
                        </ul>

                    </div>
                </div>
            </prog>

            {/*Heading and subheading*/}
            <h1>Here's a review of you appointment!</h1>
            <p className={"subHeading1"}>Please ensure that all details are correct, if not, you can go back and change them.</p>

        {/*display the contents of the appointment*/}
            <div className={"gridR"}>

                {/*Box1 will handle the Date and time that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Date and Time</h1> <br/>
                    <p className={"reviewPara"}>November 7th, 2022 <br/>at <br/>11:05am </p>

                </div>

                {/*Box2 will handle the Location that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Location</h1> <br/>
                    <p className={"reviewPara"}>Downtown<br/> Kansas <br/>City</p>

                </div>

                {/*Box3 will handle the Service that the appointment is set for*/}
                <div className={"reviewBox"}>

                    <h1 className={"reviewHeader"}>Service</h1> <br/>
                    <p className={"reviewPara"}>Other<br/> Checking</p>

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