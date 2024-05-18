import { Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw, { useDeviceContext } from "twrnc";

function HomeScreen({ navigation }) {
  useDeviceContext(tw);

  const [data, setData] = useState([]);
  const generateData = (count) =>
    Array.from({ length: count }, (_, i) => ({ id: (i + 1).toString() }));

  useEffect(() => {
    setData(generateData(20));
  }, []);

  const onPressHandler = () => {
    navigation.navigate("Note");
  };

  const renderItem = ({ item, i }) => (
    <TouchableOpacity onPress={onPressHandler}>
      <Text
        style={[
          tw`bg-gray-800 text-white m-1`,
          { height: Math.floor(Math.random() * 100) + 50 },
        ]}
      >
        {item.id}
      </Text>
    </TouchableOpacity>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        barTintColor: "#1f2937",
        textColor: "white",
        hideWhenScrolling: false,
        inputType: "text",
        tintColor: "white",
        hintTextColor: "white",
        placeholder: "Search",
      },
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <MasonryList
        style={tw`w-full h-screen mt-38 mb-100`}
        data={data}
        keyExtractor={(item) => item.id}
        numColums={3}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default HomeScreen;
