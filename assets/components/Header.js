import { SafeAreaView, Text, TextInput } from "react-native";
import tw from "twrnc";

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <SafeAreaView style={tw`bg-[#030712] h-39`}>
      <Text style={tw`text-white text-lg mx-auto font-semibold py-2`}>
        Notes
      </Text>
      <TextInput
        style={tw`text-white bg-gray-800 w-[96%] h-11 mx-auto rounded-lg px-2`}
        placeholder={"Search"}
        placeholderTextColor={"white"}
        onChangeText={(text) => {
          setSearchInput(text);
          console.log(text);
        }}
      />
    </SafeAreaView>
  );
};

export default Header;
