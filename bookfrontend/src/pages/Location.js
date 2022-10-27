import '../components/Header';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import './Location.css';
import {useMemo, useState} from "react";
import Reg from '../images/mapMarkerReg.png';
import '../images/mapMarkerSelect.png';
import '../images/mapMarkerService.png';

//const to display center, this is so that the instance doesn't reset every time we reload



//function Map will make the Google map
function Map(){
    const location = "yes";
    const [selectedLocation, setSelectedLocation] = useState(null);
    //const to display center, this is so that the instance doesn't reset every time we reload
    const center = useMemo(() => ({lat: 39.066567743643226, lng: -94.5886265711066}), []);
    return(
        <GoogleMap zoom = {9} center = {center} mapContainerClassName={"map-container"}>
            <Marker position={{lat: 39.066567743643226, lng: -94.5886265711066}}
                    onClick={() => {{setSelectedLocation(location);}}}
                    icon={{
                        url: {Reg},
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                    />
            {selectedLocation && (
                <InfoWindow
                position={{lat: 39.066567743643226, lng: -94.5886265711066}}
                onCloseClick={() => {setSelectedLocation(null)}}
                ><h2>Downtown Kansas City<br/>Location</h2>
                </InfoWindow>

            )}
        </GoogleMap>
    )
}


export default function Location(){
    const {isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyDzPkZ2fM5JKAmWLFVH2rR_HbEvYG-V1uk" })

    if(!isLoaded)
        return(
        <div>Loading...</div>
        )

    return (
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
                                <div className = "done"><a  href={"./"}><b>1</b></a></div>
                                <div><a  href={"./"}><b>Purpose</b></a></div>
                            </li>
                            <li>
                                {/*Second status circle*/}
                                <div className={"current"}><b>2</b></div>
                                <div><b>Location</b></div>
                            </li>
                            <li>
                                {/*Third status circle*/}
                                <div><a href = "./Time" ><b>3</b></a></div>
                                <div><a href = "./Time"><b>Time</b></a></div>
                            </li>
                            <li>
                                {/*Fourth status circle*/}
                                <div><a href = "./Details"><b>4</b></a></div>
                                <div><a href = "./Details"><b>Details</b></a></div>
                            </li>
                            <li>
                                {/*Fifth status circle*/}
                                <div><a href = "./Review"><b>5</b></a></div>
                                <div><a href = "./Review"><b>Review</b></a></div>
                            </li>
                        </ul>

                    </div>
                </div>
            </prog>

            <h1>What's the best place to meet?</h1>
            <p className={"subheading"}>To select a location, select one of the options on the map below, and click continue</p>


            <Map />

            {/*button used to continue to next page*/}
            <continue>
                <a href= "./Time"><button className={"buttonL"}>Continue</button></a>
            </continue>

            {/*consistent spacing breaks*/}
            <br/>
            <br/>


        </>
    )
}
