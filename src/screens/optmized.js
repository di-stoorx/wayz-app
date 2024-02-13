import { Text, View } from "native-base";
import React from "react";
import CustomMap from "../components/map";

const OptmizedScreen = ({ start, end }) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // Function to fetch route data from OSRM API
  const fetchRouteData = async (origin, destination) => {
    try {
      const url = `http://router.project-osrm.org/route/v1/driving/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching route data:", error);
      return null;
    }
  };

  // Function to calculate and display route
  const calculateAndDisplayRoute = async (origin, destination) => {
    try {
      const routeData = await fetchRouteData(origin, destination);
      console.log("response : ", routeData.routes[0].geometry.coordinates);
      const routeGeometry = routeData.routes[0].geometry.coordinates;

      // Update route coordinates
      setRouteCoordinates(
        routeGeometry.map((coordinate) => ({
          latitude: coordinate[1],
          longitude: coordinate[0],
        }))
      );

      // Update turn-by-turn instructions
      const routeInstructions = routeData.routes[0].legs[0].steps.map(
        (step) => step.maneuver.instruction
      );
      setInstructions(routeInstructions);
    } catch (error) {
      console.error("Error calculating and displaying route:", error);
    }
  };

  // Example usage
  useEffect(() => {
    const origin = [2.3522, 48.8566];
    const destination = [4.8357, 45.764];

    calculateAndDisplayRoute(origin, destination);
  }, []);

  // Convert coordinates to the format [{latitude: ..., longitude: ...}, {latitude: ..., longitude: ...}, ...]
  const formattedCoordinates = coordinates.map((coordinate) => ({
    latitude: coordinate[1],
    longitude: coordinate[0],
  }));

  return (
    <Box flex={1}>
      {/* <HistoryCard /> */}
      <CustomMap coordinates={formattedCoordinates} />
    </Box>
  );
};

export default OptmizedScreen;
