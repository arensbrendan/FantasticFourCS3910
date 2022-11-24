import commerceMock from '../images/commerceMock.png';
import './Purpose.css';
import './Location.js';
import {useState} from "react";
import app from "../App";

function Purpose(props) {
    //minor planning for future backend/frontend connection - JG
    //var service = ["other"];
    //const i = 1;

    //progress();

    const[appointment, setAppointment] = useState({
        purpose:''

    });

    const changeValue = (e) =>{
        console.log(e);
        setAppointment({
            ...appointment, [e.target.id]:e.target.value
        });
        console.log(e.target.id + " Service ");
    }

    const submitPurpose =(e)=>{
        console.log(e.target.id + " Service ");
        e.preventDefault();
        fetch("http://localhost:8080/appointment", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(appointment)
        })
            .then(res=>{
                console.log(1,res,);
                if(res.status === 201){

                    return res.json();
                }else{
                    return null;
                }
            })
            .then(res=>{
                console.log(res)
                if(res!==null){
                    this.props.history.push('/Location');
                }else{
                    alert('fails');
                }

            });

    }


    //THIS IS THE START OF THE UI
    return (
        <>
            {/*{//dummy navbar section, this will help flesh out the top portion of every page}*/}
        <div>
            <title>Appointment Purpose</title>
            {/*stock image*/}
            <purpose>
                <img src= {commerceMock} class="imgcenter" alt={"Commerce Mock"}/>
            </purpose>
            <prog>
                <div className={"purposepage"}>
                    {/*Start Navbar*/}
                    {/*each li is what you can consider to be a circle, with the label li following*/}
                    <div className="container">
                        <ul className="progress-bar">
                            {/*DO NOT KNOW HOW TO DEAL WITH GOING TO A FUTURE PAGE PAST THE ONE IN FRONT IF CUSTOMER HAS BEEN TO IT, MAY SCRAP FEATURE*/}
                            <li>
                                {/*First status circle*/}
                                <div className = "current"><b>1</b></div>
                                <div><b>Purpose</b></div>
                            </li>
                            <li>
                                {/*Second status circle*/}
                                <div><a href = "./Location" onClick="return false" className={"a"}><b>2</b></a></div>
                                <div><a href = "./Location" onClick="return false" className={"a"}><b>Location</b></a></div>
                            </li>
                            <li>
                                {/*Third status circle*/}
                                <div><a href = "./Time" className={"a"}><b>3</b></a></div>
                                <div><a href = "./Time"className={"a"}><b>Time</b></a></div>
                            </li>
                            <li>
                                {/*Fourth status circle*/}
                                <div><a href = "./Details"className={"a"}><b>4</b></a></div>
                                <div><a href = "./Details"className={"a"}><b>Details</b></a></div>
                            </li>
                            <li>
                                {/*Fifth status circle*/}
                                <div><a href = "./Review"className={"a"}><b>5</b></a></div>
                                <div><a href = "./Review"className={"a"}><b>Review</b></a></div>
                            </li>
                        </ul>

                    </div>
                </div>
            </prog>
            <form onSubmit= {submitPurpose}>
            <purpose>
                {/*Title's for purpose CheckBoxes*/}
                <p className="h1"><b>What's the purpose of your visit?</b></p>
                <p className="sub1"><b>Please choose one of the options below.</b></p>

                {/*Table section to help organize the checkboxes in a nice manner*/}

                <table>
                    <div>

                    <tr>
                        <td>
                            {/*row1*/}
                            <label>
                                <input type="radio" id="Checking" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}
                                /><br/>
                                Checking Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="Savings" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Savings Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="CD" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                CD/MM Accounts
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row2*/}
                            <label>
                                <input type="radio" id="sBanking" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Student Banking
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="auto" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Auto Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="retire" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Savings for Retirement
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row3*/}
                            <label>
                                <input type="radio" id="credit" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Credit Card
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="home" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Home Equity
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="invest" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Investment Account
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row4*/}
                            <label>
                                <input type="radio" id="mortgage" className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Mortgage
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="sLoans"  className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Student Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" id="other"  className={"input"} name={"check"} onClick= {changeValue} value={appointment.purpose}></input><br/>
                                Other
                            </label>
                        </td>
                    </tr>
                    </div>

                </table>
                {/*end of checkboxes*/}

                {/*start of textarea*/}
                <p className="sub2">Add a Note</p>
                <textarea class = "centerArea" rows="4" cols="50" name="comment" placeholder="Enter Text Here..."></textarea>
                {/*end of textarea*/}
            </purpose>

            {/*button used to continue to next page*/}
            <continue>
                <a href= "./Location" className={"buttonP"}><button type = "submit">Continue</button></a>
            </continue>
            </form>
        </div>

            </>




    ); //END OF UI

    //potential integration use function, WIP - JG
}



export default Purpose;