import { SafeAreaView, Text, Button } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-reanimated";

const CustomText = ({ title, color }) => {
  return <Text style={tw`text-${color}-800 text-4xl`}>{title}</Text>;
};

function App() {
  useDeviceContext(tw);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text style={tw`w-screen mt-40 text-center text-xl`}>Shift Notes</Text>
        <Button
          title={"Click me!"}
          onPress={() => {
            console.log("Pressed!");
          }}
        />
        <CustomText title={"Hello, World!"} color={"red"} />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
