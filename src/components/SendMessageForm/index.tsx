import React, {useState} from 'react';

import {
  Alert,
  Keyboard,
  TextInput,
  View
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){

  const [message, setMessage] = useState('')
  const [sendMessage, setSendMessage] = useState(false)

  async function HandleMessageSubmit(){
      const messageFormatted = message.trim()
      if(messageFormatted.length > 0){
          setSendMessage(true)
          await api.post('/message', {message: messageFormatted})
          setMessage('')
          Keyboard.dismiss(); //fecha o teclado
          setSendMessage(false)
          Alert.alert('mensagem enviada com Sucesso')
      }else{
        Alert.alert('Escreva a mensagem para enviar')
      }
  }
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      keyboardAppearance='dark'
      placeholder='Qual a sua espectativa para o evento?'
      placeholderTextColor={COLORS.GRAY_PRIMARY}
      multiline
      maxLength={200}
      onChangeText={setMessage}
      value={message}
      editable={!sendMessage}
      />
      <Button
      title="Enviar Menssagem"
      backgroundColor= {COLORS.PINK}
      color={COLORS.WHITE}
      isLoading={sendMessage}
      onPress={HandleMessageSubmit}
      />
    </View>
  );
}