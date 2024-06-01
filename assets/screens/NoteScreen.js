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
import { useUpdateNoteMutation, useDeleteNoteMutation } from "../../db";

import DeleteButton from "../components/DeleteButton";
import ShareButton from "../components/ShareButton";

function NoteScreen({ route, navigation }) {
  useDeviceContext(tw);

  const data = route.params.data;
  const [updateNote] = useUpdateNoteMutation();
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [deleteNote] = useDeleteNoteMutation();
  const [cursorPosition, setCursorPosition] = useState({ end: 0, start: 0 });

  const twStyle_title =
    Platform.OS === "ios"
      ? tw`text-xl mb-2 mt-1 text-white border-b-2 border-gray-700 pb-1`
      : tw`text-xl mt-1 text-white border-b-2 border-gray-700 pb-1`;

  let emptyContent = !content ? true : false;
  let emptyTitle = !title ? true : false;

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
