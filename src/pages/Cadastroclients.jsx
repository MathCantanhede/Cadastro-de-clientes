

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {  PatternFormat } from "react-number-format";

function Cadastroclients({addUser}){
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[cpf,setCpf]=useState('')
    const[nascimento,setNascimento]=useState('')
    const[cep,setCep]=useState('')

    const Schema = z.object({
        name: z.string()
        .nonempty("Nome Obrigatorio")
        .min(15,"Preencha com nome completo"),
        email: z.string()
        .email("Prrencha campo de E-mail corretamente"),
        cpf: z.string()
        .min(11,"Preencha campo de cpf corretamente"),
        nascimento: z.string()
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida (ddd/mmm/yyy)"),
        cep: z.string()
        .min(8,"CEP deve ter 8 dígitos")
    })
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(Schema)
    })
    return(
        
        <div >
            <div className=" border-black">
                <p className="font-bold text-gray-600 text-center">Cadastro de clientes</p>
                <div className="bg-gray-50 ">
                    <form
                    onSubmit={handleSubmit(addUser)}
                    className=" border border-black grid grid-cols-4 h-[200px] rounded-sm">
                        <div>
                            <p>Nome Completo</p>
                        <input 
                        className={`border w-[250px] rounded-md hover:border-black ${errors.name && 'border-red-500 && bg-red-200'}`}
                        type="text"
                        placeholder="Nome completo"
                        {...register("name")}
                        onChange={(event)=>setName(event.target.value)}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                        
                        </div>
                        <div>
                            <p>E-mail</p>
                        <input 
                        className={`border w-[250px] rounded-md hover:border-black ${errors.email && 'border-red-500 && bg-red-200'}`}
                        placeholder="Email completo"
                        {...register("email")}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <p>CPF</p>
                        <PatternFormat 
                        className={`border w-[250px] rounded-md hover:border-black ${errors.cpf && 'border-red-500 && bg-red-200'}`}
                        format="###.###.###-##"
                        placeholder="___.___.___-__"
                         mask="_"
                        {...register("cpf")}
                        onChange={(event)=>setCpf(event.target.value)}
                        />
                        {errors.cpf && <p className="text-xs text-red-500">{errors.cpf.message}</p>}
                        </div>
                        <div>
                            <p>Data de Nascimento</p>
                        <PatternFormat 
                        className={`border w-[250px] rounded-md hover:border-black ${errors.nascimento && 'border-red-500 && bg-red-200'}`}
                        format="##/##/####"
                        placeholder="__/__/____"
                        {...register("nascimento")}
                        onChange={(event)=>setNascimento(event.target.value)}
                        />
                        {errors.nascimento && <p className="text-xs text-red-500">{errors.nascimento.message}</p>}
                        </div>
                        <div>
                            <p>Localização CEP</p>
                        <PatternFormat
                        className={`border w-[250px] rounded-md hover:border-black ${errors.cep && 'border-red-500 && bg-red-200'}`}
                        placeholder="CEP completo"
                        format="##.###.###"
                        mask="_"
                        {...register("cep")}
                        onChange={(event)=>setCep(event.target.value)}
                        />
                        {errors.cep && <p className="text-xs text-red-500">{errors.cep.message}</p>}
                        </div>
                        <div>
                          <button 
                          className="w-[200px] bg-green-400 border border-black rounded-lg"
                        onClick={()=>
                        addUser(name,email,cpf,nascimento,cep)} >Enviar</button>  
                        
                        </div>
                    </form>
                    <div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Cadastroclients;