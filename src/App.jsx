import { useEffect, useState } from 'react'
import './App.css'
import Barnav from './components/Barnav'
import Cadastroclients from './pages/Cadastroclients'
import Clients from './pages/Clients'


function App() {
  const[user,setUser]=useState(
    JSON.parse(localStorage.getItem("user")) || []
  );
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(user))
  },[user]);
  function addUser(name,email,cpf,nascimento,cep){
    if(!name || !email || !cpf || !nascimento | !cep){
      return alert("Preencha campos de formulários devidamente correto")
    }
    const newList ={
      id: user.length + 1,
      name,
      email,
      cpf,
      nascimento,cep
    };
    setUser([...user,newList]);
  }
  function removClients(onId){
    const newList = user.filter(user=> user.id != onId)
    setUser(newList)
  }
  return (
    <div
    className=' overflow-hidden h-full'
    >
      <Barnav/>
      <Cadastroclients addUser={addUser} />
      <Clients user={user} removClients={removClients}/>
    </div>
  )
}

export default App