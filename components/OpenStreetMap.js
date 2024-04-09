import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markers from './markers1.js'; // Adjust the path as needed

import {Icon} from 'leaflet'


const Map2 = () => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 })
  const ZOOM_LEVEL = 2
  const mapRef = useRef()

  return (
    <>
      <div className='container'>
        <div className='container'>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='container'>
              <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
             
       {/*   <Marker position={[51.505, -0.09]} image="/image45.png">
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>

        
     
			</Marker>*/}
       {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat,marker.lng]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
            <Marker position={[-10.000,-55.9253]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>
					This coffee is from Brazil <a href="http://google.com">Click Here For More information</a>
				</Popup>
                </Marker>


                <Marker position={[-0.944722, 31.7767]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>
					This coffee is from sfdsdfsdfsdfsdfsd <a href="http://google.com">Click Here For More information</a>
				</Popup>
                </Marker>

                <Marker position={[-3.22083245,  40.1246328348]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>
					This coffee is from Uganda <a href="http://google.com">Click Here For More information</a>
				</Popup>
                </Marker> 
                
                <Marker position={[17.9333296, -76.8499966]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>
					This coffee is from Kenya <a href="http://google.com">Click Here For More information</a>
				</Popup>
                </Marker> 
                
                <Marker position={[-13.22083245,  70.1246328348]} icon={new Icon({iconUrl: ['/images/123a.png'], iconSize: [125, 141], iconAnchor: [41, 41]})}>
            <Popup>
					This coffee is from wer <a href="http://google.com">Click Here For More information</a>
				</Popup>
                </Marker>

			{/* <Marker position={[51.605, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>*/}
		</MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map2
