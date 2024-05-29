import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation } from "../../db";

function Card({ onPress, item }) {
  const [deleteNote] = useDeleteNoteMutation();
  const deleteHandler = () => deleteNote(item);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={tw`bg-gray-800 m-1 flex rounded-md`}>
        <Text style={tw`font-bold text-white text-lg px-2 pt-1`}>
          {item.title}
        </Text>
        <Text style={tw`text-white px-2 text-base pb-1 max-h-70`}>
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
