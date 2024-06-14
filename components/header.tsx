import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text>Logo</Text>
        <Text>Notifications</Text>
      </View>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    gap: 150,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 5,
  },
});
