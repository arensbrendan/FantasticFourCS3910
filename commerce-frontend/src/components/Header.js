import commerceLogo from "../images/commerceLogo.png";
import '../pages/Purpose.css';

function Header() {

    return Header(
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


        </div>


    )

}
export default Header;