
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View: Componente, atua como um container básico
    // que organiza os elementos na tela
    // style: Propriedade no React Native que vai aplicar estilos no componente
    // utilizando OBJETOS JS
    // <></>: É um fragmento, ele nos permite agrupar uma lista de componentes
    // sem adicionar um nó/componente extra.
    <>
      <View style={styles.container}>
        {/* Text: É o componente obrigatório para exibir um texto na tela */}
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={{ color: "pink", fontSize: 50 }}>Outro Texto!</Text>

        {/* StatusBar: É um componente nativo para controlar a barra
      de status do dispositivo (topo da tela) */}
        <StatusBar style="auto" />

      </View>
    </>
  );
}

// StyleSheet: Ele permite a criação de OBJETOS de estilo, fora do componente,
// usando as propriedades camelCase (ex: backgroundColor, fontSize, borderRadius)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },


  text: {
    fontSize: 16
  }
});
