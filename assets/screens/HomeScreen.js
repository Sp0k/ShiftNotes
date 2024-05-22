import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw, { useDeviceContext } from "twrnc";

import Card from "../components/Card";
import FillList from "../components/FillList";

function HomeScreen({ navigation }) {
  useDeviceContext(tw);

  const data = FillList();

  const onPressHandler = () => {
    navigation.navigate("Note");
  };

  const renderItem = ({ item, i }) => (
    <Card onPress={onPressHandler} item={item} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <SafeAreaView style={tw`w-full h-full`}>
      <MasonryList
        data={data}
        keyExtractor={(item) => item.id}
        numColums={3}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
