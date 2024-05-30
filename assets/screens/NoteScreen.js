import { TextInput, SafeAreaView, Button } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";
import tw, { useDeviceContext } from "twrnc";
import { useUpdateNoteMutation, useDeleteNoteMutation } from "../../db.js";

function NoteScreen({ route, navigation }) {
  useDeviceContext(tw);

  const data = route.params.data;
  const [updateNote] = useUpdateNoteMutation();
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [deleteNote] = useDeleteNoteMutation();

  let emptyContent = !content ? true : false;
  let emptyTitle = !title ? true : false;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerRight: () => (
        <Button
          title="🗑️"
          onPress={() => {
            deleteNote(route.params.data);
            navigation.navigate("Home");
          }}
        />
      ),
    });
  }, []);

  useEffect(() => {
    return () => {
      if (emptyContent) {
        console.log("No content");

        if (emptyTitle) {
          console.log("No title");
          deleteNote(route.params.data);
        }
      }
    };
  }, []);

  return (
    <SafeAreaView style={tw`mx-2`}>
      <TextInput
        style={tw`text-xl mb-2 mt-1 text-white border-b-2 border-gray-700 pb-1`}
        placeholder="Title"
        placeholderTextColor={"grey"}
        onChangeText={(text) => {
          setTitle(text);
          emptyTitle = !text ? true : false;
          updateNote({ id: data.id, title: text, content: content });
          console.log("Title: " + text);
          console.log(emptyTitle);
        }}
        defaultValue={data.title}
      />
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
          console.log("Content: " + text);
          console.log(emptyContent);
        }}
        defaultValue={data.content}
      />
    </SafeAreaView>
  );
}

export default NoteScreen;
