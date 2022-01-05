import React from 'react'
import { View } from 'react-native'
import {styles} from './styles'
import { Header } from '../../components/Header'
import { MessagerList } from '../../components/MessagerList'
import { SignInBox } from '../../components/SignInBox'
import { SendMessageForm } from '../../components/SendMessageForm'
import { useAuth } from '../../hooks/auth'

 function Home() {
   const {user} = useAuth()


  return (
    <View style={styles.container}>
      <Header/>
      <MessagerList/> 
      {user? <SendMessageForm/>: <SignInBox/>}
     
     
    </View>
  )
}

export {Home}