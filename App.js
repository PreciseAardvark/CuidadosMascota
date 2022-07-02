import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => Alert.alert("Bienvenido a gatos")}
          style={styles.button}
        >
          <ImageBackground
            source={require("./assets/gato.jpg")}
            style={styles.image}
          >
            <Text style={styles.text}>Gatos</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Bienvenido a conejos")}
          style={styles.button}
        >
          <ImageBackground
            source={require("./assets/conejo_portada.jpg")}
            style={styles.image}
          >
            <Text style={styles.text}>Conejos</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => Alert.alert("Bienvenido a perros :D")}
          style={styles.button}
        >
          <ImageBackground
            source={require("./assets/perro.jpg")}
            style={styles.image}
          >
            <Text style={styles.text}>Perros</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Bienvenido a tortugas :D")}
          style={styles.button}
        >
          <ImageBackground
            source={require("./assets/tortuga2.jpg")}
            style={styles.image}
          >
            <Text style={styles.text}>Tortugas</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 400,
    width: 200,
  },
  text: {
    color: "white",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
