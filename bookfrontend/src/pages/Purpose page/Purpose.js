import commerceLogo from '../../images/commerceLogo.png';
import commerceMock from '../../images/commerceMock.png';
import './Purpose.css';

function Purpose() {

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
                <img src= {commerceMock} class="center"/>
            </purpose>
            <prog>
                <div className="container">
                    <ul className="progress-bar">
                        <li>
                            <div className = "current"><b>1</b></div>
                            <div><b>Purpose</b></div>
                        </li>
                        <li>
                            <div><b>2</b></div>
                            <div><b>Location</b></div>
                        </li>
                        <li>
                            <div><b>3</b></div>
                            <div><b>Time</b></div>
                        </li>
                        <li>
                            <div><b>4</b></div>
                            <div><b>Details</b></div>
                        </li>
                        <li>
                            <div><b>5</b></div>
                            <div><b>Review</b></div>
                        </li>
                    </ul>

                </div>
            </prog>

            <purpose>
                <p><b>What's the purpose of your visit?</b></p>
            </purpose>

        </div>




    ); //END OF UI
}

export default Purpose;