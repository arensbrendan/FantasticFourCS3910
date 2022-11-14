import '../components/Header';
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import './Location.css';
import {useMemo, useState} from "react";
import '../images/mapMarkerSelect.png';
import Serv1 from '../images/mapMarkerService.png';

//var cont for testing continue button functionality
var cont = 0;

//array of locations that will be loaded onto the map including their name, location, and services
var locations = [
    {
        name: "Downtown Kansas City Location", location: {lat: 39.066567743643226, lng: -94.5886265711066}, services: "Checking, Savings, Other"
    },
    {
        name: "Warrensburg Location", location: {lat: 38.7628, lng: -93.7360}, services: "Checking, Other"
    }
];

//function Map will make the Google map
function Map(){
    //set selectedLocation properties, to know what location has been selected
    const [selectedLocation, setSelectedLocation] = useState(null);
    const onSelect = item => {
        setSelectedLocation(item);
    }
    //const to display center, this is so that the instance doesn't reset every time we reload
    const center = useMemo(() => ({lat: 39.066567743643226, lng: -94.5886265711066}), []);
    var Reg = Serv1; //DO NOT DELETE
    //return google map, this will render the map
    return(
        //set zoom level, center, and the CSS for the map
        <GoogleMap zoom = {8} center = {center} mapContainerClassName={"map-container"}>
            {/*markers on the map, this will be changed to whatever locations fit the services described, this is one marker*/}
            {/*return the array of locations as markers on the map, with their own click functions*/}
            {locations.map(item => {
                return (
                    <Marker
                        key={item.name}
                        position={item.location}
                        //when clicked, call to selectedLocation to both update the location to the backend, and open a viewing window
                        onClick={() => {
                                setSelectedLocation(item);
                        }}
                        //custom icon for markers
                        icon={{
                            url: Reg,
                            scaledSize: new window.google.maps.Size(25, 40)
                        }}
                    />
                )
            })
            }
            {/*clicked the marker starts here*/}
            {selectedLocation && (
                //open an info window with what the location has to offer
                <InfoWindow
                position={selectedLocation.location} // an info window in the exact position of where the marker once was
                onCloseClick={() => {
                        setSelectedLocation(null)
                }} //when closed, close info window, should also make this delete location as well
                ><div className={"info"}>
                    {/*present information of the location that has been chosen*/}
                    <p className={"pL"}>
                        <h2 className={"h2L"}>{selectedLocation.name}</h2>
                        <span className={"kpop"}>
                        Services</span> <br/>{selectedLocation.services}</p>
                </div>
                </InfoWindow> //end of info window

            )}
        </GoogleMap> //end of google map
    )
}


export default function Location(){
    //load the Google map using a unique key from Google API
    const {isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyDzPkZ2fM5JKAmWLFVH2rR_HbEvYG-V1uk" })
    //for whatever reason the Google map loading fails, this will replace the space inside
    if(!isLoaded)
        return(
        <div>Loading...</div>
        )
    //begin return
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
                                <div className = "done"><a  class= {"doneA"} href={"./"}><b>1</b></a></div>
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

            {/*heading and subheading*/}
            <h1>What's the best place to meet?</h1>
            <p className={"subheading"}>To select a location, select one of the options on the map below, and click continue</p>

            {/*render the Google map*/}
            <Map />

            {/*button used to continue to next page*/}
            <continue>
                <a href= "./Time"><button className={"buttonL"} id = {"contButton"}>Continue</button></a>
            </continue>

            {/*consistent spacing breaks*/}
            <br/>
            <br/>


        </>
    )
}
