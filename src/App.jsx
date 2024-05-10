import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AuthTemplate from './Pages/AuthTemplate'
import { LoginDets, SignupDets } from './data/data'
import Error from './Pages/Error'
import {useSelector} from 'react-redux'
import Navbar from './Components/Navbar'
import GadgetCard from './Components/GadgetCard'
import Gadgets from './Components/Gadgets'
import HowWeWork from './Components/HowWeWork'
import Map from './Components/Map'
import CenterDetailCard from './Components/CenterDetailCard'
import DeviceNotFoundForm from './Components/DeviceNotFoundForm'
import DeviceNotFound from './Pages/DeviceNotFound'
import Stepper from './Components/Stepper'
import Dispose from './Pages/Dispose'
import DeviceInfoTable from './Components/DeviceInfoTable'
import DashboardTemplate from './Pages/DashboardTemplate'
import Profile from './Pages/Profile'
import AppointmentTable from './Pages/AppointmentTable'
import Appointments from './Pages/Appointments'
import ProcessAppointment from './Pages/ProcessAppointment'
import Ewaste_Add from './Pages/Ewaste_Add'
import AddEducationalPopup from './Pages/AddEducationalPopup'
import Requests from './Pages/Requests'
import FinalizeAppointment from './Pages/FinalizeAppointment'
import Home from './Pages/Home'
import ContactUsPage from './Pages/ContactUs'
import Store from './Pages/Store'
import Test from './Pages/Test'
import MyOrders from './Pages/MyOrders'
import AccessError from './Pages/AccessError'
import Operator from './Authorization/Operator.authorization'
import Admin from './Authorization/Admin.authorization'
import AboutUs from './Pages/AboutUs'
import Layout from './Components/Layout'
import EducationalPopup from './Pages/EducationalPopup'
import E_Waste from './Pages/E_Waste'
import AdminAuthPage from './Pages/AdminAuthPage'
import OperatorAuthPage from './Pages/OperatorAuthPage'
import IsLoggedIn from './Authorization/LoggedIn.authorization'
import OperatorNotApproved from './Pages/OperatorNotApproved'
import OperatorRequestAdmin from './Pages/OperatorRequestAdmin'
import AdminMessages from './Pages/AdminMessages'
import User from './Authorization/User.authorization'

const App = () => {
  return (
    
    <div className='w-screen bg-slate-200'>

      <Layout>

        <Routes>
          
          <Route path='/' element={<Home/>} />

          <Route path='/login' element={<AuthTemplate dets={LoginDets} />} />
          <Route path='/signup' element={<AuthTemplate dets={SignupDets}/>} />
          <Route path='/admin' element={<AdminAuthPage/>} />
          <Route path='/operator' element={<OperatorAuthPage/>} />
          <Route path='/about' element={<AboutUs/>} />



          <Route path='/dispose' element={
            <User>
              <Dispose/>
            </User>
          } />

          <Route path='/contact' element={
            <User>
              <ContactUsPage/>
            </User>
          } />
          
          <Route path='/store' element={
            <User>
              <Store/>
            </User>
          } />    

          <Route path='/dashboard' element={<User> <DashboardTemplate/> </User> } >
            <Route path='/dashboard/' element={<Profile/>} />
            <Route path='/dashboard/appointments' element={<Appointments/>} />
            <Route path='/dashboard/my_orders' element={<MyOrders/>} />
          </Route>

          
          <Route path='/editorDashboard' element={ <Operator> <DashboardTemplate/> </Operator> } >
            <Route path='/editorDashboard/' element={<Profile/>} />
            <Route path='/editorDashboard/process_appointment' element={<ProcessAppointment/>} />
            <Route path='/editorDashboard/ewaste_add' element={<Ewaste_Add/>} />
            <Route path='/editorDashboard/ewaste' element={<E_Waste/>} />
            <Route path='/editorDashboard/educationalPopup_add' element={<AddEducationalPopup/>} />
            <Route path='/editorDashboard/educationalPopup' element={<EducationalPopup/>} />
            <Route path='/editorDashboard/not_approved' element={<OperatorNotApproved />} />
            <Route path='/editorDashboard/requestAdmin' element={<OperatorRequestAdmin />} />
          </Route>
          
          <Route path='/adminDashboard' element={ <Admin> <DashboardTemplate/> </Admin> } >
            <Route path='/adminDashboard/' element={<Profile/>} />
            <Route path='/adminDashboard/requests' element={<Requests/>} />
            <Route path='/adminDashboard/process_appointment' element={<ProcessAppointment/>} />
            <Route path='/adminDashboard/ewaste_add' element={<Ewaste_Add/>} />
            <Route path='/adminDashboard/ewaste' element={<E_Waste/>} />
            <Route path='/adminDashboard/educationalPopup_add' element={<AddEducationalPopup/>} />
            <Route path='/adminDashboard/educationalPopup' element={<EducationalPopup/>} />
            <Route path='/adminDashboard/messages' element={<AdminMessages/>} />
          </Route>
          
          
          <Route path='/error' element={<Error/>} />
          <Route path='/accessError' element={<AccessError/>} />
          <Route path='*' element={<Error/>} />

          <Route path='/test' element={<Test/>} />
          
        </Routes>
        
      </Layout>
      
    </div>
    
  )
}

export default App