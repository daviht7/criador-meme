import React,{useState} from 'react';
import { View, StyleSheet,Text, TextInput,Image } from 'react-native';

// import { Container } from './styles';

export default function App() {

  const [texto1,setTexto1] = useState("")
  const [texto2,setTexto2] = useState("")

  function escrever(texto) {

    setTexto1(texto)
    setTexto2(mudarVogais(texto))

  }

  function mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g,"i");
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g,"i");
    novoTexto = novoTexto.replace(/(é|è|ê)/g,"i");
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g,"i");
    novoTexto = novoTexto.replace(/(ú|ù|û)/g,"i");

    return novoTexto
  }

  return (
    <View style={styles.body}>

      <View>
        <Text style={styles.titulo}> Criador de mimimi </Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput style={styles.input} 
                   placeholder="Digite seu mimimi"
                   onChangeText={e => escrever(e)} />
      </View>

      <View style={styles.area}>
          <Text style={[styles.texto,styles.texto1]}>{ texto1.toUpperCase() }</Text>
          <Image style={styles.guri} source={require("./images/meme.jpg")} />
          <Text style={[styles.texto,styles.texto2]}>{ texto2.toUpperCase() }</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  body : {
    backgroundColor : "#999",
    paddingTop : 30,
    flex:1,
    flexDirection : "column",
    alignItems : "center"
  },
  titulo : {
    fontSize :30,
    color : "#fff"
  },
  inputArea : {
    alignSelf : "stretch"
  },
  input : {
    borderWidth : 1,
    borderColor : "#999999",
    backgroundColor : "#eeeeee",
    color : "#000000",
    height: 40,
    margin: 20,
    padding : 10
  },
  area : {
    width: 350,
    height: 400,
    marginTop : 10
  }, 
  guri : {
    width: 350,
    height: 400,
    marginTop : -70,
    zIndex : 0
  },
  texto : {
    fontSize : 25,
    color : "#ffffff",
    padding: 10,
    backgroundColor : "transparent",
    fontWeight : "bold",
    textAlign: "center",
    height: 70

  },
  texto1 : {
    zIndex : 1
  },
  texto2 : {
    zIndex: 1,
    marginTop : -70
  }

})