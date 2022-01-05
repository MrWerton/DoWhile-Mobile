import React, {createContext, useContext, useEffect, useState} from 'react'
import * as AuthSessions from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../services/api'

  const CLIENT_ID = '378cc9d32b246ddf4f3c'
  const SCOPE = 'read:user' //o que você deseja
  const USER_STORAGE = '@nlw:user'
  const TOKEN_STORAGE = '@nlw:token'


 type User = {
  name: string;
  id: string;
  avatar_url: string;
  login: string
}

type AuthContextData ={
  user: User | null;
  isSigningIn:boolean;
  signIn: ()=>Promise<void>;
  signOut: ()=>Promise<void>;
}
type AuthProviderProps = {
  children: React.ReactNode
}

type AuthResponse={
  token: string;
  user: User
}

type AuthorizationResponse={
  params:{
    code?: string
  }

}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}: AuthProviderProps){
  const [isSigningIn, SetisSigningIn] = useState(true)
  const [user, SetUser] = useState<User | null >(null)
  

  async function signIn(){
    try{
      SetisSigningIn(true)
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
      
      const {params} = await AuthSessions.startAsync({authUrl}) as AuthorizationResponse
      
     if(params && params.code){
        const authResponse = await api.post('/authenticate', {code: params.code})
        const {user, token} = authResponse.data as AuthResponse
  
        api.defaults.headers.common['Authorization'] = ` Bearer ${token}`
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
        await AsyncStorage.setItem(TOKEN_STORAGE, token)
  
        SetUser(user)
      }

    }catch(err){
        console.log(err)
    }finally{
      SetisSigningIn(false)
    }


  }

  async function signOut(){
     SetUser(null)
     await AsyncStorage.removeItem(USER_STORAGE)
     await AsyncStorage.removeItem(TOKEN_STORAGE)
  }

  useEffect(()=>{
    async function loadUserStorageData() {
      const useStorage = await AsyncStorage.getItem(USER_STORAGE)
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE)

      if(useStorage && tokenStorage){

      api.defaults.headers.common['Authorization'] = ` Bearer ${tokenStorage}`
      SetUser(JSON.parse(useStorage))
      }
      SetisSigningIn(false)
    }
    loadUserStorageData()
  },[])

  return(
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      isSigningIn
    }}>
    {children}
  </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}
export {AuthProvider, useAuth}