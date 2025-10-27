
import { createContext, useState, useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const AuthContext = createContext()


const apikey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const url = import.meta.env.VITE_SUPABASE_URL;

export const supabase = createClient(url, apikey);

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(null);


    const signUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            console.error('Issue signing up.', error)
            return { success: false, error }
        }

        return { success: true }
    }

    const signIn = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })

            if (error) {
                console.error('Issue signing in.', error)
                return { success: false, error }
            }

            console.log('sign in success.', data)
            return { success: true }

        }
        catch (error) {
            console.error('Issue signing in.', error)
            return { success: false, error }
        }
    }



    const signOut = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.error('Issue signing out.', error)
            return { success: false, error }
        }

        return { success: true }

    }


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])







    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signOut, signIn }}>
            {children}
        </AuthContext.Provider>
    )



}

export const UserAuth = () => {
    return useContext(AuthContext)
}