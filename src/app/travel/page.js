"use client"

import { useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api'

export default function Travel() {

    const mapRef = useRef();
    const onLoad = useCallback((map) => (mapRef.current = map), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if(!isLoaded) return <div>...Loading</div>;

    return (  
        <>
        <div className='container'>
            <h1>Where have I been?</h1>

            <GoogleMap
                mapContainerClassName='map-container'
                onLoad={onLoad}
                zoom={3}
                center={{lat: 40, lng: -74}}
                options={{mapId: "27648274008c5f05", disableDefaultUI: true, clickableIcons: false, minZoom: 2}}
            >
                <Marker position={{ lat:22.3230413, lng:114.1420963 }}/> // HK
                <Marker position={{ lat:18.4801193, lng:-69.9880796 }}/> // Santo Domingo
                <Marker position={{ lat:51.5287398, lng:-0.2664032 }}/> // London
                <Marker position={{ lat:48.8589384, lng:2.26463 }}/> // Paris
                <Marker position={{ lat:25.0855388, lng:121.4791003 }}/> // Taipei
            </GoogleMap>
        </div>
        </>
    )
}