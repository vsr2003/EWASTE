import Loader from '../Components/Loader'
import appointmentGif from '../assets/appointment_ani.gif'
import { getUserAppointment } from '../services/Operations/appointment'
import { useEffect, useState } from 'react'
import ThreeGuysStandingImg from '../assets/three_guys_standing.svg'
import notFoundGif from '../assets/Data_notfound_ani.gif'
import binRecycle from '../assets/bin-recycle-recycling-sorting-waste-2-svgrepo-com.png'

const Appointments = () => {

  const [UserAppointments, setUserAppointments] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getUserAppointment(setUserAppointments, setLoading)
  }, [])


  return (
    <div className="w-full h-full p-5">
      {loading && <Loader />}

      <div className="max-w-xl">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">My Appointments</h1>
        <p className="mt-2 text-sm text-gray-500">
          These are all your appointments
        </p>
      </div>

      {UserAppointments?.length > 0 ? (
        UserAppointments.map((appointment, i) => (
          <div key={i} className="hover:shadow-lg rounded p-4 mb-4 mt-3 flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <img src={ThreeGuysStandingImg} alt="Map 1" className="h-full w-full md:w-48 object-cover rounded" />
            </div>

            <div className="mt-4 md:mt-0 md:ml-4 w-full flex flex-col justify-between">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="bg-green-500 w-6 h-6 flex items-center justify-center rounded mr-2">
                    <img src={binRecycle} alt="binImg" />
                  </div>
                  <h2 className="text-xl font-semibold">{appointment?.waste?.name}</h2>
                </div>

                <div className="relative">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${appointment?.processed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {appointment?.processed ? 'Active' : 'Pending'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <table className="w-full">
                  <tbody>
                    <tr className="text-sm">
                      <td>Name:</td>
                      <td>{appointment?.waste?.name}</td>
                    </tr>
                    <tr className="text-sm">
                      <td>Model:</td>
                      <td>{appointment?.waste?.modelNumber}</td>
                    </tr>
                    <tr className="text-sm">
                      <td>Green Points:</td>
                      <td>{appointment?.waste?.greenPoints}</td>
                    </tr>
                    <tr className="text-sm">
                      <td>Centre Name:</td>
                      <td>{appointment?.centerName}</td>
                    </tr>
                    <tr className="text-xs">
                      <td>Centre Address:</td>
                      <td>{appointment?.centerAddress}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={notFoundGif} alt="Not Found" className="w-48 h-48" />
          <p className="font-semibold text-center text-red-600">Data Not Found</p>
        </div>
      )}
    </div>

  )
}

export default Appointments