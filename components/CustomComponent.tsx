import { StyleSheet, Text, View } from "react-native";
interface CustomComponentProps {
  name: string;
}
export default function CustomComponent({ name }: CustomComponentProps) {
  return (
    <View style={{ marginTop: 70 }}>
      <Text>Hello, {name}</Text>
      <View style={[styles.lightBlue, styles.box]}>
        <Text>Hello blue</Text>
      </View>
      <View style={[styles.box, styles.lightGreen, styles.boxShadow]}>
        <Text>Hello green</Text>
      </View>
      <View style={styles.dark}>
        <Text style={styles.darkText}>
          Hello mark <Text style={styles.darkBold}>In bold</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    padding: 10,
    // paddingHorizontal:10,
    backgroundColor: "black",
  },
  lightBlue: {
    backgroundColor: "blue",
  },
  lightGreen: {
    backgroundColor: "green",
  },
  boxShadow: {
    // borderRadius: 20,
    shadowColor: "blue",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
  dark: {
    backgroundColor: "black",
  },
  darkText: {
    color: "white",
  },
  darkBold: {
    fontWeight: "bold",
  },
});
