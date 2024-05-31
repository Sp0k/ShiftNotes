import { SafeAreaView, Text, TextInput, Platform } from "react-native";
import tw from "twrnc";

const Header = ({ searchInput, setSearchInput }) => {
  const twStyle_view =
    Platform.OS === "ios"
      ? tw`bg-[#030712] h-39`
      : tw`bg-[#030712] h-auto py-2.5`;

  const twStyle_input =
    Platform.OS === "ios"
      ? tw`text-white bg-gray-800 w-[96%] h-11 mx-auto rounded-lg px-2`
      : tw`text-white bg-gray-800 w-[93%] h-11 mx-auto rounded-lg px-2`;

  return (
    <SafeAreaView style={twStyle_view}>
      <Text style={tw`text-white text-lg mx-auto font-semibold py-2`}>
        Notes
      </Text>
      <TextInput
        style={twStyle_input}
        placeholder={"Search"}
        placeholderTextColor={"white"}
        onChangeText={(text) => {
          setSearchInput(text);
        }}
        keyboardAppearance={"dark"}
        keyboardDismissMode={"on-drag"}
        clearButtonMode="while-editing"
      />
    </SafeAreaView>
  );
};

export default Header;
