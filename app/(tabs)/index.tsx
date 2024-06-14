import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import logoImg from "../../assets/images/adaptive-icon.png";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CustomComponent from "@/components/CustomComponent";
import Mapping from "@/components/Maping";
import Header from "@/components/header";
export default function HomeScreen() {
  const [isModal, setIsModal] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    margin: "auto",
  },
});
