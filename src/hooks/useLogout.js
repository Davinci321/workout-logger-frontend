import { useAuthContext } from "./useAuthContext"
import {useWorkoutsContext} from "./useWorkoutsContext"

export const useLogout = () =>{
    const {dispatch} = useAuthContext();
    const {dispatch: workoutsDispatch} = useWorkoutsContext(); //called the dispatch a different name because we cant have two same variable name

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem("user") //only the key is needed for that

        //update the global variable or state
        //dipatch logout action
        dispatch({type: "LOGOUT"})
        workoutsDispatch({type: "SET_WORKOUTS", payload: null})
    }

    return {logout}
}