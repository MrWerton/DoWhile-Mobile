import axios from "axios";

const api = axios.create({ 
  //ip do pc + porta do backend
  baseURL:'http://192.168.100.5:3100'
})


export {api}

