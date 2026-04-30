import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';

// View, Text, Image, ImageBackground, TextInput

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Digite seu nome' />
      <TextInput
        placeholder='Digite sua senha'
        // Define que o texto digitado será oculto!
        secureTextEntry={true}
        // Define a cor do texto do placeholder
        placeholderTextColor="red"
      />
      <TextInput
        placeholder='Digite uma descrição'
        // Permite a entrada de múltiplas linhas
        multiline={true}
        // Definimos que é o teclado numérico que vai abrir
        keyboardType='numeric'
      />

      <TextInput
        placeholder='Digite seu e-mail'
        keyboardType='email-address'
      />
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
