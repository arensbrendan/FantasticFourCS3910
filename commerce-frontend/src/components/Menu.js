import commerceLogo from "../images/commerceLogo.png";


function Menu(){
    return(
        <>
            <div>
                <nav>
                    {/*Header that will be on the top of every page, will also follow the user if they scroll*/}
                    <div className="header">
                        <p className="logo"><img src={commerceLogo} width="325" height="50"/></p>
                        <ul>
                            <li>
                                <button>Home</button>
                            </li>
                            <li>
                                <button>Borrow</button>
                            </li>
                            <li>
                                <button>Invest</button>
                            </li>
                            <li>
                                <button className="active">Appointments</button>
                            </li>
                            <li>
                                <button>Careers</button>
                            </li>
                            <li>
                                <button>About</button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>


        </>


    )
}

export default Menu;