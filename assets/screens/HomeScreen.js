import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
// import {
//   useSearchNotesQuery,
//   useAddNoteMutation,
//   useDeleteNoteMutation,
// } from "./db";

import FillList from "../components/FillList";
import Card from "../components/Card";

function HomeScreen({ navigation }) {
  // const { data: searchData, error, isLoading } = useSearchNotesQuery("");
  // const [addNote, { data: addNoteData, error: addNoteError }] =
  //   useAddNoteMutation();
  // const [deleteNode] = useDeleteNoteMutation();
  //
  // useEffect(() => {
  //   if (addNoteData != undefined) {
  //     console.log(addNoteData.title);
  //     navigation.navigate("Edit", { data: addNoteData });
  //   }
  // }, [addNoteData]);
  const data = FillList(20);

  const cardOnPressHandler = () => {
    navigation.navigate("Note");
  };

  const renderItem = ({ item }) => (
    <Card item={item} onPress={cardOnPressHandler} />
  );

  return (
    <SafeAreaView style={tw`w-full h-full`}>
      <MasonryList
        style={tw`px-0.5 pt-0.5 pb-20`}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={() => console.log("New item")}
        style={tw`bg-blue-500 rounded-full absolute bottom-[8%] right-10 mx-auto items-center flex-1 justify-center w-14 h-14`}
      >
        <Text style={tw`text-white text-center text-3xl mt--1`}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
