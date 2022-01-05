import React, { useState , useEffect} from 'react';
import io from 'socket.io-client'
import {
  ScrollView, //possibilita rolagem
} from 'react-native';
import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const socket = io(String(api.defaults.baseURL))

const messagesQueue: MessageProps[] = []
socket.on('new_message',(newMessage)=>{
  messagesQueue.push(newMessage)
})


function MessagerList(){
  const [currentMessages, SetCurrentMessages] = useState<MessageProps[]>()
  useEffect(()=>{
    
  }, [])
  useEffect(()=>{
    const timer= setInterval(()=>{
      if(messagesQueue.length > 0){
        SetCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
        messagesQueue.shift()
      }
      return clearInterval(timer)
    }, 3000)
  }, [])
  useEffect(() => {
    async function fetchMessagers(){
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3') 
      SetCurrentMessages(messagesResponse.data)
    }
    fetchMessagers()
  },[])
  return (
    <ScrollView 
    style={styles.container}
    contentContainerStyle={styles.content} //estiliza o conteudo
    keyboardShouldPersistTaps="never" // o teclado fecha quando alguem clicar fora
    >
   {
    currentMessages?.map((message)=> <Message key={message.id} data={message}/>)
   }
      
    </ScrollView>
  );
}

export {MessagerList}