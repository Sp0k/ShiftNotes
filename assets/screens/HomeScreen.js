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

// Internal Imports
import { useSearchNotesQuery, useAddNoteMutation } from "../../db";
import Card from "../components/Card";
import AddButton from "../components/AddButton";
import Header from "../components/Header";

/* Home Screen
 * The home screen component. It has a header which can be used to
 * search for notes. It also displays all of the notes (or the ones
 * that are left when using the search feature) using a MasonryList.
 *
 * @params: navigation: The app's navigation
 * @return: The home screen displaying the notes and the header.
 */
function HomeScreen({ navigation }) {
  // Component's constants
  // Search input and data function and states
  const [searchInput, setSearchInput] = useState("");
  const {
    data: searchData,
    error,
    isLoading,
  } = useSearchNotesQuery(searchInput);

  // Handler for the pressing the notes' cards
  const cardOnPressHandler = () => {
    navigation.navigate("Note");
  };

  // Turning notes into cards
  const renderItem = ({ item }) => (
    <Card
      item={item}
      onPress={() => navigation.navigate("Note", { data: item })}
    />
  );

  // The width of the list based on the platform used
  const twStyle_list =
    Platform.OS === "ios"
      ? tw`px-0.5 pt-0.5 pb-20`
      : tw`w-[95%] pt-0.5 pb-20 mx-auto`;

  // Updating the header when the screen is loaded
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
