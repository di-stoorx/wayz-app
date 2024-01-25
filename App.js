import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Navigation from "./src/navigation/navigation";


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
