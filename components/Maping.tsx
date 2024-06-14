import { Text, View, ScrollView, FlatList, StyleSheet } from "react-native";

export default function Mapping() {
  const array = [
    {
      name: "ravi",
      age: "21",
    },
    {
      name: "karan",
      age: "11",
    },
    {
      name: "navi",
      age: "34",
    },
    {
      name: "abhi",
      age: "21",
    },
  ];
  const MapOne = ({ item }) => (
    <View>
      <Text style={styles.item}>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>
  );
  return (
    <ScrollView>
      {/* {array.map((e, index) => (
        <View key={index}>
          <Text>{e.name}</Text>
          <Text>{e.age}</Text>
        </View>
      ))} */}
      <FlatList data={array} renderItem={MapOne} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "green",
    padding: 10,
  },
});
