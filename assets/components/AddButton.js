// External imports
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";
import { useEffect } from "react";

// Internal imports
import { useAddNoteMutation } from "../../db";

/* Add Button
 * The custom component is a circle containing a '+'. When pressed, it
 * generates a new note saved in the database.
 *
 * @params: navigation: The app's navigation
 * @return: The custom component to be used in the home screen
 */
function AddButton({ navigation }) {
  // Component's constants
  // addNote function: creates a new note using the useAddNoteMutation
  const [addNote, { data: addNoteData, error: addNoteError }] =
    useAddNoteMutation();

  // addNoteHandler: a handler constant to call addNote on press
  const addNoteHandler = () => {
    addNote({ title: "", content: "" });
  };

  // Checks if the data for the note is empty, which it is, then
  // navigates to the note screen to edit the note
  useEffect(() => {
    if (addNoteData != undefined) {
      navigation.navigate("Note", { data: addNoteData });
    }
  }, [addNoteData]);

  return (
    <TouchableOpacity
      onPress={addNoteHandler}
      style={tw`bg-blue-500 rounded-full absolute bottom-[8%] right-10 mx-auto items-center flex-1 justify-center w-14 h-14`}
    >
      <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
    </TouchableOpacity>
  );
}

export default AddButton;
