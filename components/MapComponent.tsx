"use client"

import React from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const MapComponent: React.FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
	})

	const mapStyles = {
		height: "400px",
		width: "100%",
	}

	const defaultCenter = {
		lat: 31.4697, // Latitude for Lahore, Pakistan
		lng: 74.2728, // Longitude for Lahore, Pakistan
	}

	if (!isLoaded) return <div>Loading...</div>

	return (
		<GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
			<Marker position={defaultCenter} />
		</GoogleMap>
	)
}

export default MapComponent
