import { Box, Text, View } from "native-base";
import React from "react";
import HistoryCard from "../components/historyCard";
import CustomMap from "../components/map";
import MapView, { Marker } from "react-native-maps";
import { theme } from "../core/theme";

const HomeScreen = () => {
  const coordinates = [
    [2.352316, 48.857243],
    [2.390226, 48.827328],
    [2.344243, 48.804465],
    [2.306381, 48.703988],
    [2.491874, 48.555504],
    [2.6079, 48.323959],
    [3.021685, 48.103654],
    [3.253186, 47.930827],
    [3.602715, 47.84973],
    [3.755686, 47.721606],
    [3.901272, 47.652792],
    [3.995613, 47.512615],
    [4.292801, 47.445338],
    [4.481642, 47.329363],
    [4.521385, 47.261989],
    [4.677176, 47.18535],
    [4.773597, 47.061438],
    [4.871203, 47.029684],
    [4.819405, 46.925704],
    [4.819281, 46.774284],
    [4.919731, 46.530306],
    [4.795653, 46.31301],
    [4.715992, 45.951242],
    [4.780805, 45.778142],
    [4.835663, 45.763837],
  ];

  // Convert coordinates to the format [{latitude: ..., longitude: ...}, {latitude: ..., longitude: ...}, ...]
  const formattedCoordinates = coordinates.map((coordinate) => ({
    latitude: coordinate[1],
    longitude: coordinate[0],
  }));
  console.log(theme.colors.primary);
  return (
    <Box flex={1}>
      {/* <HistoryCard /> */}
      <CustomMap coordinates={formattedCoordinates} />
    </Box>
  );
};

export default HomeScreen;
