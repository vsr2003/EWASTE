import { toast } from "react-toastify";
import { setToken, setUser } from "../../slices/Auth.slice.js";
import { apiConnector } from "../apiConnector";


import {Auth} from '../ApiConstants.js'


const {
    LOGIN,
    SIGNUP,
}  = Auth ;


export function login(loginDets,navigator,setLoading,setError)
{
    return async(dispatch) => {

        setLoading(true)
        try {
            const res = await fetch(LOGIN, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(loginDets)
            });

            const data = await res.json()
            if(data?.success)
            {
                dispatch(setToken(data?.token))
                dispatch(setUser(data?.user))

                if(data?.user?.Role === "Normal")  navigator("/")
                else if(data?.user?.Role === "Operator")  navigator("/editorDashboard")
                else  navigator("/adminDashboard")
                
                toast.success("Logged in",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
            }
            else{
                setError(data?.message)
                toast.error("Failed",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
            }
            
            
        } catch (error) {
            toast.error("Something went wrong.")
        }
        setLoading(false)
    }
}

export async function signup(signupDets,navigator,setLoading,setError)
{
    setLoading(true)
    try {
        const res = await fetch(SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(signupDets)
        });

        
        const data = await res.json()
        if(data?.success)
        {
            navigator("/login")
            toast.success("Signed Up",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
        }
        else{
            setError(data?.message)
            toast.error("Failed",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        }
        
        
    } catch (error) {
        toast.error("Something went wrong.",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}

export async function test(){
    const data = await apiConnector("GET","http://localhost:5000/test",{},{withCredentials: true});
    console.log(data);
}