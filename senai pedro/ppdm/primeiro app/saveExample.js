
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.quantidade}>
          <Text>+</Text>
          <Text>2</Text>
          <Text>-</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.text}>Menta Cocktail</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple"
  },

  text: {
    fontSize: 25,
    color: "#ffffff"
  },

  top: {
    flex: 1,
    backgroundColor: "purple",
    position: "relative",
    zIndex: 10,
  },

  quantidade: {
    width: 50,
    height: 75,
    padding: 5,
    backgroundColor: "#48485B",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -35,
    right: 50,

  },

  bottom: {
    flex: 1,
    backgroundColor: "#f0f43b",
    padding: 20,
    borderTopRightRadius: 40
  }
});
