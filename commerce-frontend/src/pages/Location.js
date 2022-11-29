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
        name: "Downtown Kansas City Location", location: {lat: 39.066567743643226, lng: -94.5886265711066}, services: "Savings, Checking, Other"
    },
    {
        name: "Warrensburg Location", location: {lat: 38.7628, lng: -93.7360}, services: "Checking, Other"
    },
    {
        name: "Overland Park Location", location: {lat:38.9822, lng: -94.6708}, services: "Auto Loans, Credit Card, Other"
    },
    {
        name: "Topeka Location", location: {lat:39.0473, lng: -95.6752}, services: "Student Banking, CD/MM Accounts, Other"
    },
    {
        name: "Harrsionville Location", location: {lat:38.6533, lng: -94.3488}, services: "Student Loans, Savings For Retirement, Other"
    },
    {
        name: "Ottawa Location", location: {lat:38.604465, lng: -95.271301}, services: "Credit Card, Investment, Other"
    },
    {
        name: "Higginsville Location", location: {lat:39.0725, lng: -93.7172}, services: "Checking, Credit Card, Other"
    },
    {
        name: "Lee's Summit Location", location: {lat:38.9108, lng: -94.3822}, services: "Home Equity, Mortgage, Other"
    }
];



//function Map will make the Google map
function Map({getLocation}){
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
                        onClick={(e) => {
                            setSelectedLocation(item);
                            getLocation(e,item);
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


export default function Location({updateLocation}){
    //load the Google map using a unique key from Google API
    const {isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyDzPkZ2fM5JKAmWLFVH2rR_HbEvYG-V1uk" })
    //for whatever reason the Google map loading fails, this will replace the space inside
    if(!isLoaded)
        return(
            <div>Loading...</div>
        )

    const getLocation=(e, location)=>{

        //e.preventDefault();
        //setAptmnt(state);
        console.log("Appointment location : " + location.name);
        document.getElementById("loc").value = location.name;

    }



    //begin return
    return (
        <>
            {/*heading and subheading*/}
            <h1>What's the best place to meet?</h1>
            <p className={"subheading"}>To select a location, select one of the options on the map below, and click continue</p>

            {/*render the Google map*/}
            <Map getLocation={getLocation}/>

            {/*button used to continue to next page*/}
            <continue>
                <button onClick={(e) => {updateLocation(e, document.getElementById("loc").value)}} className={"buttonL"} id = {"contButton"}>Continue</button>
            </continue>

            <input type="hidden" id="loc" ></input>

            {/*consistent spacing breaks*/}
            <br/>
            <br/>


        </>
    )
}
