import { Text, View } from "react-native";
import { useEffect } from "react";
import tw, { useDeviceContext } from "twrnc";

function HomeScreen({ navigation }) {
  useDeviceContext(tw);

  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return (
    <View>
      <Text style={tw`w-screen mt-40 text-center text-xl text-white`}>
        Here is a note!
      </Text>
    </View>
  );
}

export default HomeScreen;
