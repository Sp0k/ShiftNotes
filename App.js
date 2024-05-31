import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-reanimated";
import tw from "twrnc";

import HomeScreen from "./assets/screens/HomeScreen";
import NoteScreen from "./assets/screens/NoteScreen";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: tw`bg-gray-900`,
            headerTintColor: "white",
            contentStyle: tw`bg-gray-900`,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Note" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
