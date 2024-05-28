import { SafeAreaView, Text, TextInput } from "react-native";
import tw from "twrnc";

const Header = () => {
  return (
    <SafeAreaView style={tw`bg-[#030712] h-39`}>
      <Text style={tw`text-white text-lg mx-auto font-semibold py-2`}>
        Notes
      </Text>
      <TextInput
        style={tw`text-white bg-gray-800 w-[96%] h-11 mx-auto rounded-md px-2`}
        placeholder={"Search"}
        placeholderTextColor={"white"}
      />
    </SafeAreaView>
  );
};

export default Header;
