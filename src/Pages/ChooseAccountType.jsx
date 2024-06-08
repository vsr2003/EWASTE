
import operatorPng from '../assets/operator.png'
import adminPng from '../assets/admin.png'
import { useNavigate } from 'react-router-dom'

const ChooseAccountType = () => {
    const navigator = useNavigate();
  return (
    <div className='flex flex-col overflow-x-hidden relative items-center mt-[13vh] justify-center w-screen h-[87vh] bg-gray-100'>

        <div className='w-6/12 bg-white h-[80%] flex justify-center items-center'>

            <div className=" w-[90%] flex justify-center items-center gap-10 border border-black h-[80%] ">

                <div onClick={()=>navigator("/admin")}  className=" w-[35%] hover:cursor-pointer hover:bg-blue-50">
                    <img src={adminPng} alt="" className="h-[200px] w-[90%]" />
                    <p className="text-center">Admin</p>
                </div>

                <div onClick={()=>navigator("/operator")} className=" w-[35%] hover:cursor-pointer hover:bg-blue-50">
                    <img src={operatorPng} alt="" className="h-[200px] w-full" />
                    <p className="text-center">Operator</p>
                </div>

            </div>
            
        </div>
        
    </div>
  )
}

export default ChooseAccountType