import { signOut } from "next-auth/react";

export const logout = async ()=>{
    // some server stuff
    await signOut();
}