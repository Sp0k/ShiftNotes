// External imports
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

/* Card Component
 * The component is a blue-ish rectangle that will display the title as
 * well as a part of the note's content so the user can easily see them
 *
 * @params: onPress: A function holding the function to call through
 *                   the onPress prop
 * @return: returns the custom card component
 */
function Card({ onPress, item }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={tw`bg-gray-800 m-1 flex rounded-md overflow-hidden`}>
        <Text style={tw`font-bold text-white text-lg px-2 pt-1`}>
          {item.title}
        </Text>
        <Text style={tw`text-gray-300 px-2 text-base pb-1 max-h-70`}>
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
