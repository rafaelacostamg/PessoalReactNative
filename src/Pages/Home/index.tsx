import React from 'react';
import {
  Alert,
  Image,
  Text,
  View
} from 'react-native';
import gaguinho from '../../Assets/gaguinho_looney_tunes_capa.jpg';
import { ButtonComponents } from '../../Components/ButtonComponent';
import { styles } from './style';

export function Home() {

  const mensagem = () => {
    Alert.alert("era só isso mesmo")
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Isso é tudo pe-pe-pessoal</Text>

      <Image source={gaguinho} alt="gaguinho" style={styles.image} />

      <ButtonComponents title="Aperte" recebendoFuncao={mensagem} />



    </View>)
}
