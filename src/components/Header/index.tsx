import React, {useState} from 'react';
import Logo from '../../assets/logo.svg' //necessário instalar a biblioteca svg e o svg transform
import { UserPhoto } from '../UserPhoto';
import {
  View,
  Text, 
  TouchableOpacity //torna a região aside clicável
} from 'react-native';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';


export function Header(){
  const {user, signOut} = useAuth()
  return (
    <View style={styles.container}>
       {!user?
       <View style={{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:60,
      }}>
        <Logo/>
      </View>
      :
        <Logo/>
      }
      
      {user &&
      <View style={styles.headerRight}>
        <TouchableOpacity  onPress={signOut}> 
          <Text style={styles.SignOut}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto 
        imageUri = {user?.avatar_url}
        />
      </View>
      }
    </View>
  ); 
}

