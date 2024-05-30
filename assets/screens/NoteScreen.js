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

  return (
    <SafeAreaView style={tw`mx-2`}>
      <TextInput
        style={tw`text-xl mb-2 mt-1 text-white border-b-2 border-gray-700 pb-1`}
        placeholder="Title"
        placeholderTextColor={"grey"}
        onChangeText={(text) => {
          setTitle(text);
          updateNote({ id: data.id, title: text, content: content });
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
          updateNote({ id: data.id, title: title, content: text });
        }}
        defaultValue={data.content}
      />
    </SafeAreaView>
  );
}

export default NoteScreen;
