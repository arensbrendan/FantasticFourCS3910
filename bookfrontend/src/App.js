import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import {Routes, Route, Router} from 'react-router-dom';
import Purpose from './pages/Purpose.js';
import React from "react";
import Error from './pages/Error.js';
import commerceLogo from "./images/commerceLogo.png";
import Location from "./pages/Location";
//import './pages/Purpose.css';
import './components.css'
import Review from "./pages/Review";
import Details from "./pages/Details";



function App(){
    return (
        <div>

            <div>
                <nav>
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
                    <Routes>
                        <Route path="/" element={<Purpose />} />
                        <Route path="/Location" element={<Location />} />
                        {/*<Route path="/Time" element={<Time />} />*/}
                        <Route path="/Details" element={<Details />} />
                        <Route path="/Review" element={<Review />} />
                        <Route path="*" element={<Error />} />
                    {/*ERROR PAGE MUST BE LAST ROUTE*/}
                    </Routes>

            {/*Begin Footnote*/}
            <footnote>
                <p className="center1">Brendan Arens - Jackson Gordon - Megan Lesmeister - Adam Meloy</p>
                <p>SE3910 - Commerce Bank Project - Fall 2022</p>
            </footnote>
            {/*End Footnote*/}

        </div>
    )
}
export default App;