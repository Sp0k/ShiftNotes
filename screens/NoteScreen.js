import { Text, View } from "react-native";
import tw, { useDeviceContext } from "twrnc";

function HomeScreen({ navigation }) {
  useDeviceContext(tw);

  return (
    <View>
      <Text style={tw`w-screen mt-40 text-center text-xl`}>
        Here is a note!
      </Text>
    </View>
  );
}

export default HomeScreen;
