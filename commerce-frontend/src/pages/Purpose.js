import commerceMock from '../images/commerceMock.png';
import './Purpose.css';
import './Location.js';

function Purpose() {
    //minor planning for future backend/frontend connection
    var service = ["other"];
    const i = 1;

    //progress();
    //THIS IS THE START OF THE UI
    return (
        <>
            {/*{//dummy navbar section, this will help flesh out the top portion of every page}*/}
        <div>
            <title>Appointment Purpose</title>
            {/*stock image*/}
            <purpose>
                <img src= {commerceMock} class="imgcenter"/>
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

            <purpose>
                {/*Title's for purpose CheckBoxes*/}
                <p className="h1"><b>What's the purpose of your visit?</b></p>
                <p className="sub1"><b>Choose as many topics as you need.</b></p>

                {/*Table section to help organize the checkboxes in a nice manner*/}
                <table>
                    <tr>
                        <td>
                            {/*row1*/}
                            <label>
                                <input type="checkbox" id="Checking" className={"input"}
                                /><br/>
                                Checking Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="Checking" className={"input"}></input><br/>
                                Savings Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="CD" className={"input"}></input><br/>
                                CD/MM Accounts
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row2*/}
                            <label>
                                <input type="checkbox" id="sBanking" className={"input"}></input><br/>
                                Student Banking
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="auto" className={"input"}></input><br/>
                                Auto Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="retire" className={"input"}></input><br/>
                                Savings for Retirement
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row3*/}
                            <label>
                                <input type="checkbox" id="credit" className={"input"}></input><br/>
                                Credit Card
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="home" className={"input"}></input><br/>
                                Home Equity
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="invest" className={"input"}></input><br/>
                                Investment Account
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            {/*row4*/}
                            <label>
                                <input type="checkbox" id="mortgage" className={"input"}></input><br/>
                                Mortgage
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="sLoans"  className={"input"}></input><br/>
                                Student Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="other"  className={"input"}></input><br/>
                                Other
                            </label>
                        </td>
                    </tr>

                </table>
                {/*end of checkboxes*/}

                {/*start of textarea*/}
                <p className="sub2">Add a Note</p>
                <textarea class = "centerArea" rows="4" cols="50" name="comment" placeholder="Enter Text Here..."></textarea>
                {/*end of textarea*/}
            </purpose>

            {/*button used to continue to next page*/}
            <continue>
                <a href= "./Location" className={"buttonP"}><button>Continue</button></a>
            </continue>
        </div>
            </>




    ); //END OF UI
}

export default Purpose;