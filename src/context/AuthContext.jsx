
import { createContext, useState, useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const AuthContext = createContext()


const apikey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const url = import.meta.env.VITE_SUPABASE_URL;

export const supabase = createClient(url, apikey);

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined);


    const signUpNewUser = async (email, password) => {
        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error){
            console.error('Issue signing up.', error)
            return {success: false, error}
        }

        return {success: true}
    }

    const signIn = async (email, password) => {
        try {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })


            console.log('sign in success.', data)
            return {success: true}

        }
        catch (error){
            console.error('Issue signing in.')
        }
    }



    const signOut = () => {
        const {error} = supabase.auth.signOut()

        if (error){
            console.error('Issue signing out.')
            return {success: false, error}
        }

        return {success: true}

    }


    useEffect(() => {
        supabase.auth.getSession().then(({data : {session}}) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])







    return (
        <AuthContext.Provider value = {{session, signUpNewUser, signOut, signIn}}>
            {children}
        </AuthContext.Provider>
    )



}

export const UserAuth = () => {
    return useContext(AuthContext)
}