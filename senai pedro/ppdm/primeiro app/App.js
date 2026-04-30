import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';

// View, Text, Image, ImageBackground, TextInput

export default function App() {
  return (
    <View style={styles.container}>
      {/* position relative posiciona o elemento em relação à sua posição original */}
      <View style={{ position: "static", width: "30%", height: "30%", backgroundColor: "red", top: 30 }}>

        {/* position absolute remove o elemento do fluxo normal, posicionando em relação ao seu "ancestral" posicionado mais próximo (qualquer pai com position diferente de static). */}
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: "black",
          top: 0,
          left: 0,
          position: "absolute"
        }}></View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
});


{/* <View style={styles.container}>
      <Text style={styles.text}>Exemplo Imagens</Text>
      <Image
        style={{ width: "100%", height: "30%" }}
        source={imgGroot}
        blurRadius={5} // desfoque da imagem
        resizeMode='cover' // controla como a imagem se ajusta
      // cover, contain, stretch, repeat, center
      />
      <Image
        style={{ width: "100%", height: "30%" }}
        source={{ uri: "https://wallpapers.com/images/hd/4k-laptop-chilling-astronaut-on-moon-aphdjg4xrc9j8cyz.jpg" }}
      />
      <Image
        style={{ width: "100%", height: "30%" }}
        source={require("./src/wallpaper.jpg")}
      />
      <StatusBar style="auto" />
    </View> */}
