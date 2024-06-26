import { useState,useEffect } from "react"
import EduPopupAddForm from "../Components/EduPopupAddForm"
import Modal from "../Components/Modal"
import DataNotFoundGif from '../assets/Data_notfound_ani.gif'
import { getAllEducationalPopup } from "../services/Operations/educationalPopup.op"

const EducationalPopup = () => {

    const [allEducationalPopup, setAllEducationalPopup] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [loading, setLoading] = useState(false)
    

    function addEducationalPopupHandler() {
        setModalData(<EduPopupAddForm/>)
        setShowModal(true)
    }
    const closeModal = ()=> setShowModal(false)
    
    function editHandler(formInitial) {
        setModalData(<EduPopupAddForm isEdit={true} formInitial={formInitial} />)
        setShowModal(true)
    }


    useEffect(()=>{
        getAllEducationalPopup(setAllEducationalPopup,setLoading)
    },[])
    
    
  return (
    <div className='w-full h-full bg-white'>

        <section class="bg-gray-50  p-3 sm:p-5">
            
            <div class="mx-auto max-w-screen-xl px-4 lg:px-5">
                
                <div class="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        
                        {/* search field */}
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                        
                        {/* add device button */}
                        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button onClick={addEducationalPopupHandler}
                              class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                    <svg className='h-3.5 w-3.5 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                                    <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 15 L 10 15 L 10 17 L 15 17 L 15 22 L 17 22 L 17 17 L 22 17 L 22 15 L 17 15 L 17 10 Z"></path>
                                    </svg>
                                    Add Educational Popup
                            </button>
                        </div>
                        
                    </div>
                    
                    <div className="overflow-x-auto">
                        
                        {
                            allEducationalPopup ? 
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                        <tr>
                                            <th scope="col" class="px-4 py-3">Title</th>
                                            <th scope="col" class="px-4 py-3">Description</th>
                                            <th scope="col" class="px-4 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allEducationalPopup?.map((popup,i)=>(
                                                <tr key={i}  class="border-b w-full">
                                                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{popup?.title}</th>
                                                    <td class="px-4 py-3">{popup?.description}</td>
                                                    <td class="px-4 py-3 flex items-center justify-center">
                                                        <button onClick={()=>editHandler(popup)}   class="flex p-2.5 bg-gray-50 rounded-xl hover:rounded-3xl hover:bg-gray-100 transition-all duration-300 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            :
                                <div className="flex flex-col items-center justify-center py-10">
                                    <img src={DataNotFoundGif} alt="" />
                                    <p className="font-bold text-red-600">Data Not Found</p>
                                </div>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </section>

        {
            showModal && 
            <Modal isOpen={showModal} onClose={closeModal} >
                {modalData}
            </Modal>
        }
        
    </div>
  )
}

export default EducationalPopup