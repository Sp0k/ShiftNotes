import { Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
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
          tw`bg-gray-300 text-gray-900 m-1`,
          { height: Math.floor(Math.random() * 100) + 50 },
        ]}
      >
        {item.id}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <MasonryList
        style={tw`w-full h-screen mb-100`}
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
