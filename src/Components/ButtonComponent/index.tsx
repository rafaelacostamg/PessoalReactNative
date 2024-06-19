import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style"


type PropsButton ={
  title: string;
  recebendoFuncao:() => void;
}

export function ButtonComponents({recebendoFuncao, title}: PropsButton){
    return(
        <>
        <TouchableOpacity style={styles.button} onPress={recebendoFuncao}>
          <Text
            style={{
              position: 'absolute',
            }}
          />

          <Text style={styles.textButton}>
           {title}
          </Text>
        </TouchableOpacity>
        </>
    )
}