import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

function DeleteButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={tw`mr-2 mt-1`}>
      <Text>🗑️</Text>
    </TouchableOpacity>
  );
}

export default DeleteButton;
