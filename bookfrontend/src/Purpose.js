import commerceLogo from './images/commerceLogo.png';
import commerceMock from './images/commerceMock.png';
import './Purpose.css';
import './Location.js';

function Purpose() {

    //progress();
    //THIS IS THE START OF THE UI
    return (
        //dummy navbar section, this will help flesh out the top portion of every page
        <div>
            <title>Appointment Purpose</title>
            <nav>
                <div class = "header">

                    <p class = "logo"><img src = {commerceLogo} width = "325" height = "50"/></p>
                    <ul>
                        <li><button>Home</button></li>
                        <li><button>Borrow</button></li>
                        <li><button>Invest</button></li>
                        <li><button class = "active">Appointments</button></li>
                        <li><button>Careers</button></li>
                        <li><button>About</button></li>

                    </ul>
                </div>
            </nav>
            <purpose>
                <img src= {commerceMock} class="imgcenter"/>
            </purpose>
            <prog>
                <div className="container">
                    <ul className="progress-bar">
                        <li>
                            <div className = "current"><b>1</b></div>
                            <div><b>Purpose</b></div>
                        </li>
                        <li>
                            <div><a href = "./Location" onClick="return false"><b>2</b></a></div>
                            <div><a href = "./Location" onClick="return false"><b>Location</b></a></div>
                        </li>
                        <li>
                            <div><a href = "./Time" ><b>3</b></a></div>
                            <div><a href = "./Time"><b>Time</b></a></div>
                        </li>
                        <li>
                            <div><a href = "./Details"><b>4</b></a></div>
                            <div><a href = "./Details"><b>Details</b></a></div>
                        </li>
                        <li>
                            <div><a href = "./Review"><b>5</b></a></div>
                            <div><a href = "./Review"><b>Review</b></a></div>
                        </li>
                    </ul>

                </div>
            </prog>

            <purpose>
                <p className="h1"><b>What's the purpose of your visit?</b></p>
                <p className="sub1"><b>Choose as many topics as you need.</b></p>

                <table>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" id="Checking"></input><br/>
                                Checking Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="Checking"></input><br/>
                                Savings Account
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="CD"></input><br/>
                                CD/MM Accounts
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" id="sBanking"align=""></input><br/>
                                Student Banking
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="auto"align=""></input><br/>
                                Auto Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="retire" align=""></input><br/>
                                Savings for Retirement
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" id="credit" align=""></input><br/>
                                Credit Card
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="home" align=""></input><br/>
                                Home Equity
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="invest" align=""></input><br/>
                                Investment Account
                            </label>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <label>
                                <input type="checkbox" id="mortgage" align=""></input><br/>
                                Mortgage
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="sLoans" align=""></input><br/>
                                Student Loans
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="other" align=""></input><br/>
                                Other
                            </label>
                        </td>

                    </tr>

                </table>
                <p className="sub2">Add a Note</p>
                <textarea class = "centerArea" rows="4" cols="50" name="comment" placeholder="Enter Text Here..."></textarea>





            </purpose>

            <continue>
                <a href= "./Location.js"><button>Continue</button></a>
            </continue>

            <footnote>
                <p className="white">`</p>
                <p className="center1">Brendan Arens - Jackson Gordon - Megan Lesmeister - Adam Meloy</p>
                <p>SE3910 - Commerce Bank Project - Fall 2022</p>
            </footnote>

        </div>




    ); //END OF UI
}

export default Purpose;