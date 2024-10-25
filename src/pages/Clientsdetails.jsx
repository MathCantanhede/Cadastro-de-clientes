import { Card } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft} from 'lucide-react'
function Clientsdetails(){
    const navigate = useNavigate()
    

    
    const [searchParams]=useSearchParams()
    const name = searchParams.get("name")
    const email = searchParams.get("email")
    const cpf = searchParams.get("cpf")
    const nascimento = searchParams.get("nascimento")
    const cep = searchParams.get("cep")
    return(
        <div
        className='bg-gray-300 h-screen p-3'
        >
        <Card 
        className='m-auto text-center'
        title={name}bordered={false} style={{ width: 600 }}>
        <p>{email}</p>
        <p>{cpf}</p>
        <p>{nascimento}</p>
        <p>{cep}</p>
        <>
        <button
        onClick={()=>navigate(-1)}
        className='mt-7 hover:bg-gray-300 rounded-md'
        ><ChevronLeft />
        </button></>
        </Card>
        
        </div>
    )
}
export default Clientsdetails;