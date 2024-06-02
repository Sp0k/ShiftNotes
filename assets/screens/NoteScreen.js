// External imports
import {
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Text,
  Platform,
} from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import tw, { useDeviceContext } from "twrnc";

// Internal imports
import { useUpdateNoteMutation, useDeleteNoteMutation } from "../../db";
import DeleteButton from "../components/DeleteButton";
import ShareButton from "../components/ShareButton";

/* Note (editing) Screen
 * The screen on which notes will be edited, deleted and shared. It's
 * header holds the share and delete button. The rest of it's screen
 * holds a TextInput for the title and another for the content.
 *
 * @params: route: The navigation route used to get to the screen
 *          navigation: The app's navigation
 * @returns: The screen used to edit notes holding two TextInputs
 */
function NoteScreen({ route, navigation }) {
  useDeviceContext(tw);

  // Component's constants
  const data = route.params.data; // The note's data
  const [updateNote] = useUpdateNoteMutation(); // Function to update the db
  const [title, setTitle] = useState(data.title); // State of the title
  const [content, setContent] = useState(data.content); // State of the content
  const [deleteNote] = useDeleteNoteMutation(); // Function to delete notes from db
  const [cursorPosition, setCursorPosition] = useState({ end: 0, start: 0 }); // State to keep track of cursor position on the screen

  // The style of the title area based on the platform used
  const twStyle_title =
    Platform.OS === "ios"
      ? tw`text-xl mb-2 mt-1 text-white border-b-2 border-gray-700 pb-1`
      : tw`text-xl mt-1 text-white border-b-2 border-gray-700 pb-1`;

  // Variables used to verify if notes are empty
  let emptyContent = !content ? true : false;
  let emptyTitle = !title ? true : false;

  // Update the header when the screen is loaded as well as when the
  // data (title or content) is updated
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerRight: () => (
        <View style={[{ flexDirection: "row" }, tw`mr-4 mt-1`]}>
          <ShareButton title={title} content={content} />
          <DeleteButton data={route.params.data} navigation={navigation} />
        </View>
      ),
    });
  }, [title, content]);

  // Checks if the note is empty, deletes it when leaving the screen if it is
  useEffect(() => {
    return () => {
      if (emptyContent && emptyTitle) {
        deleteNote(route.params.data);
      }
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={tw`flex mx-2`}
      behavior="padding"
      enabled={true}
    >
      <TextInput
        style={twStyle_title}
        placeholder="Title"
        placeholderTextColor={"grey"}
        onChangeText={(text) => {
          setTitle(text);
          emptyTitle = !text ? true : false;
          updateNote({ id: data.id, title: text, content: content });
        }}
        defaultValue={data.title}
        keyboardAppearance={"dark"}
        keyboardDismissMode={"on-drag"}
      />
      <ScrollView
        style={tw`flex mb-20`}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={(x, y) =>
          this.scrollView.scrollTo({
            y: cursorPosition.end + 50,
            animated: true,
          })
        }
        indicatorStyle={"white"}
      >
        <TextInput
          style={tw`text-xl text-white`}
          placeholder="Note"
          placeholderTextColor={"grey"}
          multiline
          numberOfLines={4}
          defaultValue={data.content}
          onChangeText={(text) => {
            setContent(text);
            emptyContent = !text ? true : false;
            updateNote({ id: data.id, title: title, content: text });
          }}
          defaultValue={data.content}
          keyboardAppearance={"dark"}
          onSelectionChange={(event) =>
            setCursorPosition(event.nativeEvent.selection)
          }
          keyboardDismissMode={"on-drag"}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default NoteScreen;
