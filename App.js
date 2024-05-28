import { StatusBar, TextInput, Text, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-reanimated";
import tw from "twrnc";

import HomeScreen from "./assets/screens/HomeScreen";
import NoteScreen from "./assets/screens/NoteScreen";
import Header from "./assets/components/Header";

function App() {
  const Stack = createNativeStackNavigator();

  const deleteHandler = () => {
    console.log("Delete");
  };

  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: tw`bg-gray-900`,
            headerTintColor: "white",
            contentStyle: tw`bg-gray-900`,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Notes",
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="Note"
            component={NoteScreen}
            options={{
              headerTitle: "",
              headerRight: () => <Button title="🗑️" onPress={deleteHandler} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
