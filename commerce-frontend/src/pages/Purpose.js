
import './Purpose.css';
import './Location.js';
import {useState} from "react";
import app from "../App";

function Purpose({updatePurpose}) {
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


    //THIS IS THE START OF THE UI
    return (
        <>
            {/*{//dummy navbar section, this will help flesh out the top portion of every page}*/}
            <div>


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
                                        <input type="radio" id="Checking" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Checking')}} value={appointment.purpose}
                                        /><br/>
                                        Checking Account
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="Savings" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Savings')}} value={appointment.purpose}></input><br/>
                                        Savings Account
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="CD" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'CD/MM')}} value={appointment.purpose}></input><br/>
                                        CD/MM Accounts
                                    </label>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    {/*row2*/}
                                    <label>
                                        <input type="radio" id="sBanking" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Student Banking')}} value={appointment.purpose}></input><br/>
                                        Student Banking
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="auto" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Auto Loans')}} value={appointment.purpose}></input><br/>
                                        Auto Loans
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="retire" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Savings for Retirement')}} value={appointment.purpose}></input><br/>
                                        Savings for Retirement
                                    </label>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    {/*row3*/}
                                    <label>
                                        <input type="radio" id="credit" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Credit Card')}} value={appointment.purpose}></input><br/>
                                        Credit Card
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="home" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Home Equity')}} value={appointment.purpose}></input><br/>
                                        Home Equity
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="invest" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Investment Account')}} value={appointment.purpose}></input><br/>
                                        Investment Account
                                    </label>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    {/*row4*/}
                                    <label>
                                        <input type="radio" id="mortgage" className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Mortgage')}} value={appointment.purpose}></input><br/>
                                        Mortgage
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="sLoans"  className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Student Loans')}} value={appointment.purpose}></input><br/>
                                        Student Loans
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        <input type="radio" id="other"  className={"input"} name={"check"} onClick= {(e) => {changeValue(e); updatePurpose(e, 'Other')}} value={appointment.purpose}></input><br/>
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
                    <button class = "buttonP"onClick={(e) => {updatePurpose(e, 'status')}}>Continue</button>
                </continue>

            </div>

        </>




    ); //END OF UI

    //potential integration use function, WIP - JG
}



export default Purpose;