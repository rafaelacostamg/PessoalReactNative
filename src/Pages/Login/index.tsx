import React, { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import YellowFaceIcon from '../../Assets/yellow_face_icon.png';
import { ButtonComponents } from '../../Components/ButtonComponent';
import { TextInputComponent } from '../../Components/TextInputComponent';
import { styles } from './style';


interface Props {
  logado: () => void;
}

export function Login({ logado }: Props) {
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUser = (value: string) => {
    setUser(value);
    console.log('Valor do user: ' + value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log('Valor da senha: ', value);
  };

  const handleLogin = () => {
    Alert.alert(
      "Bem vindo(a) " + user,
      undefined,
      [
        { text: "OK", onPress: () => logado() }
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={YellowFaceIcon} style={styles.icon} />
        <Text style={styles.title}>Bem Vindo(a)</Text>

        <TextInputComponent
          recebendoFuncao={handleUser}
          recebendoValue={user}
          recebendoPlaceHolder="Insira seu usuário"
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Insira sua senha"
          recebendoTipoDoInput={true}
          recebendoBackgroundColor='#e2e2e2'
        />

        <ButtonComponents title="Entrar" recebendoFuncao={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
}