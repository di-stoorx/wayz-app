import { Box, Button, Column, Icon, Row, Text, View } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import RoadMapIcon from "./svg/roadMap";

const HistoryCard = ({ startLocation, endLocation, date, distance }) => {
  return (
    <Row
      bgColor={"green.800"}
      borderColor={"green.800"}
      borderRadius={10}
      borderWidth={1}
      margin={3}
      padding={2}
      height={144}
      pt={8}
      px={4}
      width={"94%"}
      justifyContent={"space-between"}
      alignContent={"center"}
    >
      <Row w={"60%"}>
        <Column marginRight={2}>
          <Icon as={Ionicons} name="location-sharp" color={"white"} />
          <View
            style={{
              borderRightWidth: 1,
              borderColor: "white",
              height: "28%",
              marginRight: 8,
              marginBottom: 1,
              marginTop: 1,
            }}
          />
          <Icon as={Ionicons} name="location-sharp" color={"white"} />
        </Column>
        <Column>
          <Row mb={5}>
            <Text color={"white"}>Location 01</Text>
          </Row>

          <Row>
            <Text color={"white"}>Location 02</Text>
          </Row>
        </Column>
      </Row>

      <Box w={"40%"}>
        <Row mb={2}>
          <Icon as={Fontisto} name="date" color={"white"} marginRight={2} />
          <Text color={"white"} textAlign={"right"}>
            17 Juil 2021
          </Text>
        </Row>
        <Row mb={2}>
          <RoadMapIcon marginRight={2} />
          <Text color={"white"} textAlign={"right"}>
            11 km
          </Text>
        </Row>
        <Button
          bgColor={"white"}
          _text={{ color: "green.800" }}
          borderRadius={20}
          borderWidth={1}
          borderColor={"white"}
        >
          Details
        </Button>
      </Box>
    </Row>
  );
};

export default HistoryCard;
