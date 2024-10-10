import jwtDecode from "jwt-decode";
import { signOut } from "./UserContext";

const useAuth = (history) => {
    
  const token = localStorage.getItem("Token")  
  let IsManager = false;
  let IsAdmin = false;
  let IsSuperAdmin = false;
  let status = "Employee"

  if (token){
    const decoded = jwtDecode(token)
    const roles = decoded.CanArrangeRestTime
    const superAdminRoles = decoded.IsSuperAdmin
    const ManagerRoles = decoded.IsManager
    if( typeof ManagerRoles !== 'undefined' && ManagerRoles?.includes('True')){
      IsManager = true
    }
    else if (typeof ManagerRoles !== 'undefined' && ManagerRoles?.includes('False')){
      IsManager = false
    }
    else {
      window.location.reload()
      signOut(history)
    }
    IsAdmin = roles?.includes('True')
    IsSuperAdmin = superAdminRoles?.includes('True')

    return {roles ,superAdminRoles ,  status , IsManager , IsAdmin ,IsSuperAdmin }
  }

return { roles : [] ,superAdminRoles :[] , IsManager , IsAdmin ,IsSuperAdmin , status  }

}
export default useAuth