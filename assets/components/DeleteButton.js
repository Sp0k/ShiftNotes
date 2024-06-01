import { TouchableOpacity, Text, Alert } from "react-native";
import tw from "twrnc";
import { useDeleteNoteMutation } from "../../db";

function DeleteButton({ data, navigation }) {
  const [deleteNote] = useDeleteNoteMutation();

  const deleteHandler = () => {
    Alert.alert(
      "Delete your note?",
      "You are about to delete this note. You will not be able to recover it later. Do you wish to continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Canceled"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteNote(data);
            navigation.navigate("Home");
          },
          style: "destructive",
        },
      ],
    );
  };

  return (
    <TouchableOpacity onPress={deleteHandler} style={tw`ml-3`}>
      <Text>🗑️</Text>
    </TouchableOpacity>
  );
}

export default DeleteButton;
