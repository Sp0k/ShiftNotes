// External imports
import { SafeAreaView, Text, TextInput, Platform } from "react-native";
import tw from "twrnc";

/* Header
 * The custom component for the header of the home screen. It displays
 * the word 'notes' and a search bar to search through notes.
 *
 * @params: searchInput: Pointer to the state variable of the search data
 *          setSearchInput: Function to use the search feature from the
 *                          database
 * @return: Custom header component used in the home screen
 */
const Header = ({ searchInput, setSearchInput }) => {
  // Style for the size of the header based on the platform used
  const twStyle_view =
    Platform.OS === "ios"
      ? tw`bg-[#030712] h-39`
      : tw`bg-[#030712] h-auto py-2.5`;

  // Style for the size of the search bar based on the platform used
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
