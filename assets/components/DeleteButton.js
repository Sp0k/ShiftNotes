// External imports
import { TouchableOpacity, Text, Alert } from "react-native";
import tw from "twrnc";

// Internal imports
import { useDeleteNoteMutation } from "../../db";

/* Delete Button
 * A custom component used in the note screen to allow users to delete
 * the note. It prompts an alert confirming the action before the
 * deletion is complete.
 *
 * @params: data: The note's data specifyin which note to delete
 *          navigation: The note's navigation
 * @return: The custom button used in the header of the note screen
 */
function DeleteButton({ data, navigation }) {
  // Component's constants
  // deleteNote function: makes use of the delete note mutation to
  // erase the current note open from the database
  const [deleteNote] = useDeleteNoteMutation();

  /* delete handler
   * The handler for the delete function used by the TouchableOpacity
   * component. It opens an alert prompting the user to confirm they
   * want to delete the note before actually deleting it.
   */
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
