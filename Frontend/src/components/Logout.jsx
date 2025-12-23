import React from 'react'
import { useAuth } from "../context/AuthContext";
import toast from 'react-hot-toast';

const Logout = () => {
   const [authUser, setAuthUser] = useAuth();
   const handleLogout = () =>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        toast.success("Logout Succesfully..")
        window.location.reload();
    } catch (error) {
        toast.error("Error ::" + error.message )
    }
   }
  return (
    <div>
        <button className="btn bg-black text-white dark:bg-white dark:text-black"
        onClick={handleLogout}
        >
            Logout
        </button>
    </div>
  )
}

export default Logout