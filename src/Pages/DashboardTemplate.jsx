import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
import { setToken, setUser } from "../slices/Auth.slice"
import { useState } from "react"


const DashboardTemplate = () => {

    const {user} = useSelector(store => store.Auth)
    const [isOpen, setIsOpen] = useState(false);

    
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const Normal = [
        {
            title:"Profile",
            path:"/dashboard",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
            viewBox="0 0 512 512">
            <path
                d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                data-original="#000000" />
                </svg>
        },
        {
            title:"Appointments",
            path:"/dashboard/appointments",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
            viewBox="0 0 510 510">
            <g fill-opacity=".9">
            <path
                d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
                data-original="#000000" />
            <path d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z" data-original="#000000" />
            </g>
                </svg>
        },
        {
            title:"Notifications",
            path:"/dashboard/notifications",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                        viewBox="0 0 371.263 371.263">
                        <path
                        d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                        data-original="#000000"></path>
                </svg>
        },
    ]

    const Operator = [
        {
            title:"Profile",
            path:"/editorDashboard",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
            viewBox="0 0 512 512">
            <path
                d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                data-original="#000000" />
                </svg>
        },
        {
            title:"Process Appoinment",
            path:"/editorDashboard/process_appointment",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
            viewBox="0 0 510 510">
            <g fill-opacity=".9">
            <path
                d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
                data-original="#000000" />
            <path d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z" data-original="#000000" />
            </g>
                </svg>
        },
        {
            title:"E-waste",
            path:"/editorDashboard",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                        viewBox="0 0 371.263 371.263">
                        <path
                        d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                        data-original="#000000"></path>
                </svg>,
            subLinks:[
                {
                    title:"Add E-waste",
                    path:"/ewaste",
                    svg:""
                },
                {
                    title:"Delete E-waste",
                    path:"/ewaste",
                    svg:""
                },
                {
                    title:"Edit E-waste",
                    path:"/ewaste",
                    svg:""
                },
                {
                    title:"Search E-waste",
                    path:"/ewaste",
                    svg:""
                },
            ]
        },
    ]

    const Admin = [
        {
            title:"Requests",
            path:"/adminDashboard/requests",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
            viewBox="0 0 512 512">
            <path
                d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                data-original="#000000" />
                </svg>
        },
    ]

    let NavItems = [];

    if(user.Role === "Normal") NavItems=Normal;
    else if(user.Role === "Operator") NavItems=Operator;
    else NavItems=Admin ;

    const logoutHandler = ()=>{
        dispatch(setUser(null))
        dispatch(setToken(null))
        navigator("/")
        window.location.reload();
    }
 
  return (
    <div className=" flex h-[87vh]">

        <div className="min-w-[230px] h-full">
            <nav class="mt-[13vh] border-r border-black bg-white h-full fixed top-0 left-0 min-w-[230px] py-6 px-1 font-[sans-serif] flex flex-col overflow-auto">

                <div class="flex flex-wrap items-center cursor-pointer">
                    
                <img src='https://readymadeui.com/profile.webp' class="w-10 h-10 rounded-full border-2 border-white" />
                <div class="ml-4">
                    <p class="text-sm text-black">{user.Name}</p>
                    <p class="text-xs text-gray-600 mt-1">{user.Email}</p>
                </div>
                </div>

                <hr class="mt-6 border-gray-600" />

                <ul class="space-y-3 mt-8">

                    {
                        user.Role === "Admin" &&
                        NavItems.map((item,i)=>(
                            <li key={i}>
                                <button onClick={()=>navigator(item.path)} 
                                    class="text-black w-full hover:text-white text-sm flex items-center hover:bg-gray-900 rounded px-4 py-3 transition-all">
                                    {item.svg}
                                    <span>{item.title}</span>
                                </button>
                            </li>
                        ))
                    }
                    
                    {
                        
                        user.Role === "Normal" &&
                        NavItems.map((item,i)=>(
                            <li key={i}>
                                <button onClick={()=>navigator(item.path)} 
                                    class="text-black w-full hover:text-white text-sm flex items-center hover:bg-gray-900 rounded px-4 py-3 transition-all">
                                    {item.svg}
                                    <span>{item.title}</span>
                                </button>
                            </li>
                        ))
                    }

                    {
                        user.Role === "Operator" &&
                        NavItems.map((item,i)=>(

                            item.title !== "E-waste" ?
                                <li key={i}>
                                    <button onClick={()=>navigator(item.path)} 
                                        class="text-black w-full hover:text-white text-sm flex items-center hover:bg-gray-900 rounded px-4 py-3 transition-all">
                                        {item.svg}
                                        <span>{item.title}</span>
                                    </button>
                                </li>
                            :
                                // <li>
                                //     <button
                                //         type="button"
                                //         className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                                //         aria-controls="dropdown-example"
                                //         data-collapse-toggle="dropdown-example"
                                //         onClick={toggleDropdown}
                                //     >
                                //         {item.title}
                                //     </button>
                                    
                                //     <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen ? '' : 'hidden'}`}>
                                //         {
                                //             item.subLinks.map((subLink)=>(
                                //                 <li key={i}>
                                //                             <button onClick={navigator(subLink.path)}
                                //                             class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                                //                                 {subLink.title}
                                //                             </button>
                                //                 </li>
                                //             ))
                                //         }
                                //     </ul>
                                // </li>
                                <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
                  <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                  <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <ul id="dropdown-pages" class="hidden py-2 space-y-2">
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Settings</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Kanban</a>
                  </li>
                  <li>
                      <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Calendar</a>
                  </li>
              </ul>
                                </li>
                                
                        ))
                    }

                </ul>

                <hr class="my-8 border-gray-600" />

                {/* logout button */}
                <ul class="space-y-3">

                <li>
                    <button onClick={logoutHandler}
                    class="text-black hover:text-white text-sm flex w-full items-center hover:bg-gray-900 rounded px-4 py-3 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                        viewBox="0 0 6.35 6.35">
                        <path
                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                        data-original="#000000" />
                    </svg>
                    <span>Logout</span>
                    </button>
                </li>

                </ul>

            </nav>
        </div>

        <div className=" w-[calc(100%-230px)] h-full bg-slate-50">
            <Outlet/>
        </div>

    </div>
  )
}

export default DashboardTemplate