import { TouchableOpacity, SafeAreaView, Text, TextInput } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
import { useSearchNotesQuery, useAddNoteMutation } from "../../db";

import Card from "../components/Card";
import AddButton from "../components/AddButton";
import Header from "../components/Header";

function HomeScreen({ navigation }) {
  const [addNote, { data: addNoteData, error: addNoteError }] =
    useAddNoteMutation();
  const addNoteHandler = () => {
    addNote({ title: "", content: "" });
    console.log("New Note");
  };
  const cardOnPressHandler = () => {
    navigation.navigate("Note");
  };
  const renderItem = ({ item }) => (
    <Card
      item={item}
      onPress={() => navigation.navigate("Note", { data: item })}
    />
  );
  const [searchInput, setSearchInput] = useState("");
  const {
    data: searchData,
    error,
    isLoading,
  } = useSearchNotesQuery(searchInput);

  useEffect(() => {
    if (addNoteData != undefined) {
      console.log(addNoteData.title);
      navigation.navigate("Note", { data: addNoteData });
    }
  }, [addNoteData]);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      ),
      headerTitle: "Notes",
    });
  }, []);

  return (
    <SafeAreaView style={tw`w-full h-full`}>
      {searchData ? (
        <MasonryList
          style={tw`px-0.5 pt-0.5 pb-20`}
          data={searchData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <></>
      )}
      <AddButton onPress={addNoteHandler} />
    </SafeAreaView>
  );
}

export default HomeScreen;
