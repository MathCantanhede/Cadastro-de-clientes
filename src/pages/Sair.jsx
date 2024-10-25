import logo from '../components/img/logo.png'
function Sair(){
    return(
        <div className='mt-[180px]'>
            <img
            className=' w-[30%] m-auto'
            src={logo} alt="" />
            <div
            className='text-center'
            >
                Obrigado por vir até aqui !!
            </div>

        </div>
    )
}
export default Sair;