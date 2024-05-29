import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

function AddButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-blue-500 rounded-full absolute bottom-[8%] right-10 mx-auto items-center flex-1 justify-center w-14 h-14`}
    >
      <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
    </TouchableOpacity>
  );
}

export default AddButton;
