// External Imports
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  Platform,
} from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
import { useSearchNotesQuery, useAddNoteMutation } from "../../db";

// Internal Imports
import Card from "../components/Card";
import AddButton from "../components/AddButton";
import Header from "../components/Header";

function HomeScreen({ navigation }) {
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

  const twStyle_list =
    Platform.OS === "ios"
      ? tw`px-0.5 pt-0.5 pb-20`
      : tw`w-[95%] pt-0.5 pb-20 mx-auto`;

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
          style={twStyle_list}
          data={searchData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <></>
      )}
      <AddButton navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
