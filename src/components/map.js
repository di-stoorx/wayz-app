// import { Box, Icon, View } from "native-base";
// import React from "react";
// import { TouchableOpacity } from "react-native";
// import MapView, { Geojson, Marker } from "react-native-maps";
// import { Ionicons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";

// const CustomMap = () => {
//   const handleZoomIn = () => {
//     mapRef.current.animateToRegion({
//       latitude: mapRef.current.__lastRegion.latitude,
//       longitude: mapRef.current.__lastRegion.longitude,
//       latitudeDelta: mapRef.current.__lastRegion.latitudeDelta / 2,
//       longitudeDelta: mapRef.current.__lastRegion.longitudeDelta / 2,
//     });
//   };

//   const handleZoomOut = () => {
//     mapRef.current.animateToRegion({
//       latitude: mapRef.current.__lastRegion.latitude,
//       longitude: mapRef.current.__lastRegion.longitude,
//       latitudeDelta: mapRef.current.__lastRegion.latitudeDelta * 2,
//       longitudeDelta: mapRef.current.__lastRegion.longitudeDelta * 2,
//     });
//   };

//   const generateCoordinatesAroundLocation = (
//     latitude,
//     longitude,
//     distance,
//     numberOfPoints
//   ) => {
//     const coordinates = [];
//     const earthRadius = 6371; // Earth's radius in kilometers

//     // Convert distance from meters to kilometers
//     const radius = distance / 1000;

//     // Generate random angles for each point
//     for (let i = 0; i < numberOfPoints; i++) {
//       const randomAngle = Math.random() * Math.PI * 2; // Random angle in radians
//       const randomDistance = Math.sqrt(Math.random()) * radius; // Random distance within radius

//       // Calculate new latitude and longitude using Haversine formula
//       const newLatitude =
//         latitude + (randomDistance / earthRadius) * (180 / Math.PI);
//       const newLongitude =
//         longitude +
//         ((randomDistance / earthRadius) * (180 / Math.PI)) /
//           Math.cos((latitude * Math.PI) / 180);

//       coordinates.push([newLongitude, newLatitude]);
//     }

//     return coordinates;
//   };

//   const generateGeoJSON = (latitude, longitude, distance, numberOfPoints) => {
//     const coordinates = generateCoordinatesAroundLocation(
//       latitude,
//       longitude,
//       distance,
//       numberOfPoints
//     );

//     // Create GeoJSON object
//     const geojson = {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           geometry: {
//             type: "LineString",
//             coordinates: coordinates,
//           },
//         },
//       ],
//     };

//     return geojson;
//   };

//   // Example usage for Cotonou, Benin
//   const cotonouLatitude = 6.3654;
//   const cotonouLongitude = 2.4183;
//   const distance = 1000; // Distance in meters
//   const numberOfPoints = 10; // Number of points to generate

//   const generatedGeoJSON = generateGeoJSON(
//     cotonouLatitude,
//     cotonouLongitude,
//     distance,
//     numberOfPoints
//   );
//   console.log(generatedGeoJSON.features[0].geometry.coordinates);

//   const mygeojson = {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         geometry: {
//           type: "LineString",
//           coordinates: [
//             [2.404283, 6.367387],
//             [2.40561, 6.368178],
//             [2.406318, 6.367255],
//             [2.407557, 6.368178],
//             [2.408221, 6.367343],
//             [2.411406, 6.369717],
//             [2.419325, 6.363386],
//             [2.413884, 6.359121],
//             [2.418175, 6.357934],
//           ],
//         },
//       },
//     ],
//   };
//   return (
//     <Box flex={1}>
//       <MapView
//         style={{ flex: 1, width: "100%", height: "100%" }}
//         initialRegion={{
//           latitude: cotonouLatitude,
//           longitude: cotonouLongitude,
//           latitudeDelta: 0.1,
//           longitudeDelta: 0.1,
//         }}
//         zoomControlEnabled={true}
//         toolbarEnabled={true}
//         showsCompass={true}
//         showsScale={true}
//         zoomEnabled={true}
//         zoomTapEnabled={true}
//         // mapType={"osm"}
//       >
//         <Geojson geojson={mygeojson} strokeColor="blue" strokeWidth={2} />
//       </MapView>
//       <View position={"absolute"} bottom={20} right={5}>
//         <TouchableOpacity>
//           <Icon as={Ionicons} name={"add"} size={22} mb={6} />
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Icon as={AntDesign} name={"minus"} size={22} />
//         </TouchableOpacity>
//       </View>
//     </Box>
//   );
// };

// export default CustomMap;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Geojson, Marker, Polyline } from "react-native-maps";

const CustomMap = ({ coordinates }) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // Function to fetch route data from OSRM API
  // const fetchRouteData = async (origin, destination) => {
  //   try {
  //     const url = `http://router.project-osrm.org/route/v1/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching route data:", error);
  //     return null;
  //   }
  // };

  // // Function to calculate and display route
  // const calculateAndDisplayRoute = async (origin, destination) => {
  //   try {
  //     const routeData = await fetchRouteData(origin, destination);
  //     console.log("response : ", routeData.routes[0].geometry.coordinates);
  //     const routeGeometry = routeData.routes[0].geometry.coordinates;

  //     // Update route coordinates
  //     setRouteCoordinates(
  //       routeGeometry.map((coordinate) => ({
  //         latitude: coordinate[1],
  //         longitude: coordinate[0],
  //       }))
  //     );

  //     // Update turn-by-turn instructions
  //     const routeInstructions = routeData.routes[0].legs[0].steps.map(
  //       (step) => step.maneuver.instruction
  //     );
  //     setInstructions(routeInstructions);
  //   } catch (error) {
  //     console.error("Error calculating and displaying route:", error);
  //   }
  // };

  // // Example usage
  // useEffect(() => {
  //   const origin = [2.3522, 48.8566];
  //   const destination = [4.8357, 45.764];

  //   calculateAndDisplayRoute(origin, destination);
  // }, []);

  // Given coordinates in the format [[longitude, latitude], [longitude, latitude], ...]

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Display route polyline */}
        <Polyline
          coordinates={coordinates}
          strokeWidth={4}
          strokeColor="#7F0000"
        />
      </MapView>
    </View>
  );
};

export default CustomMap;
