import {BookOpenText,Bell,LogOut} from 'lucide-react'
import logo from './img/logo.png'
import { useNavigate } from 'react-router-dom';
function Barnav(){
    const navigate = useNavigate()
    return(
        <div className="rounded-md w-full">
            <img
            className='m-auto' 
            src={logo} alt="" />
            <ul className=" flex justify-around">
                
                <li 
                onClick={()=>navigate("/")}
                className="flex font-bold text-gray-600 hover:bg-gray-200 hover:rounded-md text-sm">
                <BookOpenText />Cadastro</li>
                <li 
                onClick={()=>navigate("/Sobre")}
                className="flex font-bold text-gray-600 hover:bg-gray-200 hover:rounded-md text-sm">
                <Bell />Sobre</li>
                <li 
                onClick={()=>navigate("/Sair")}
                className="flex font-bold text-gray-600 hover:bg-gray-200 hover:rounded-md text-sm">
                <LogOut />Sair</li>
            </ul>
        </div>
    )
}
export default Barnav;