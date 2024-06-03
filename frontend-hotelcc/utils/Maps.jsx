import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps"

export default class Maps extends Component {

    render() {
        return (
            <div>
                <GoogleMaps
                apiKey={"AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"}
                style={{ height:"500px", width: "100%" }}
                zoom={10}
                center={{
                    lat: -34.57645,
                    lng: -58.42188
                }}
                />
            </div>
        );
    }
}