import { useNavigate } from "react-router-dom";
import Barnav from "../components/Barnav";
import {Trash2} from 'lucide-react'

function Clients({user,removClients}){
    const navigate = useNavigate()
    function onseeDetails(user){
        const query =  new URLSearchParams()
        query.set("name", user.name)
        query.set("email",user.email)
        query.set("cpf",user.cpf)
        query.set("nascimento",user.nascimento)
        query.set("cep",user.cep)
        navigate
        (`/Clientsdetails?${query.toString()}`)
    }
    return(
        <div>
          
            <div className="bg-gray-300 ">
                <p className="font-bold text-gray-600 text-center">Clientes</p>
            <div
             className="grid grid-cols-4 gap-4 w-[98%] m-auto text-center"
            >
                <div>Nome Completo</div>
                <div>CPF</div>
                <div>Data de Nascimento</div>
                <div>CEP</div>
            </div>
            {user.map((use)=>(
            <div>
            <button 
            key={use.id}
            onClick={()=>onseeDetails(use)}
            
            className="grid grid-cols-4 gap-4 w-[98%] m-2 text-center border border-black rounded-md bg-white hover:bg-gray-600 hover:text-white"
            >
               <div>
                <p
                className="text-sm"
                >{use.name}</p>
                <p
                className="text-xs"
                >{use.email}</p>
               </div>
                <div>
                    <p
                    className="text-sm"
                    >{use.cpf}</p>
                </div>
                <div>
                    <p
                    className="text-sm"
                    >{use.nascimento}</p>
                </div>
                <div className="flex gap-3">
                    <p
                    className="text-sm w-full"
                    >{use.cep}</p>
                    
                </div>
                </button>
                <div className="w-[100px] m-auto"><button
                    onClick={()=>removClients(use.id)}
                    className=" p-2 rounded-sm hover:bg-red-300 hover:border-black "
                    ><Trash2 /></button></div>
                
                </div>
            ))}
            </div>
        </div>
    )
}
export default Clients;