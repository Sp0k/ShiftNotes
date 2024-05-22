import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

function Card({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          tw`bg-gray-800 text-white m-1`,
          { height: Math.floor(Math.random() * 100) + 50 },
        ]}
      >
        {item.id}
      </Text>
    </TouchableOpacity>
  );
}

export default Card;
