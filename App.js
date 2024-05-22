import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-reanimated";

import HomeScreen from "./assets/screens/HomeScreen";
import NoteScreen from "./assets/screens/NoteScreen";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#030712" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#111827" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Notes" }}
          />
          <Stack.Screen
            name="Note"
            component={NoteScreen}
            options={{ headerTitle: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
