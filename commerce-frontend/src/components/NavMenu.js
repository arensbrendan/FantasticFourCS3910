import { useEffect, useState } from 'react';
import commerceMock from '../images/commerceMock.png';

function NavMenu(props){

    const [vcurrent, setCurrent] = useState(0);


    useEffect(()=>{
        console.log("test ddd" + props.barstate );
        setCurrent(props.barstate)
    },[])

    const setmenu =(data) =>{
        // e.preventDefault();
        setCurrent(data);
    }


    return(
        <>
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
                                {vcurrent === 0 &&
                                    <div onClick={(e) => {props.updateState(e, 0); setmenu(0)}} className = "current"  ><b>1</b></div>
                                }
                                {vcurrent !== 0 &&
                                    <div onClick={(e) => {props.updateState(e, 0); setmenu(0)}} ><b>1</b></div>
                                }
                                <div onClick={(e) => {props.updateState(e, 0)}}><b>Purpose</b></div>
                            </li>
                            <li>
                                {/*Second status circle*/}
                                {vcurrent === 1 &&
                                    <div onClick={(e) => {props.updateState(e, 1); setmenu(1)}} className = "current"> <b>2</b> </div>
                                }
                                {vcurrent !== 1 &&
                                    <div onClick={(e) => {props.updateState(e, 1); setmenu(1)}} > <b>2</b> </div>
                                }
                                <div onClick={(e) => {props.updateState(e, 1)}}> <b>Location</b> </div>
                            </li>
                            <li>
                                {/*Third status circle*/}
                                {vcurrent === 2 &&
                                    <div onClick={(e) => {props.updateState(e, 2); setmenu(2)}} className = "current">  <b>3</b> </div>
                                }
                                {vcurrent !== 2 &&
                                    <div onClick={(e) => {props.updateState(e, 2); setmenu(2)}}>  <b>3</b> </div>
                                }
                                <div onClick={(e) => {props.updateState(e, 2)}}> <b>Time</b> </div>
                            </li>
                            <li>
                                {/*Fourth status circle*/}
                                {vcurrent === 3 &&
                                    <div onClick={(e) => {props.updateState(e, 3); setmenu(3)}} className = "current"> <b>4</b> </div>
                                }
                                {vcurrent !== 3 &&
                                    <div onClick={(e) => {props.updateState(e, 3); setmenu(3)}}> <b>4</b> </div>
                                }
                                <div onClick={(e) => {props.updateState(e, 3)}}> <b>Details</b> </div>
                            </li>
                            <li>
                                {/*Fifth status circle*/}

                                {vcurrent === 4 &&
                                    <div onClick={(e) => {props.updateState(e, 4); setmenu(4)}} className = "current"> <b>5</b> </div>
                                }
                                {vcurrent !== 4 &&
                                    <div onClick={(e) => {props.updateState(e, 4); setmenu(4)}}> <b>5</b> </div>
                                }
                                <div onClick={(e) => {props.updateState(e, 4)}}> <b>Review</b> </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </prog>

        </>


    )
}

export default NavMenu;