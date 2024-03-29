
import {Resend} from "resend";

 const resend = new Resend(process.env.RESEND_API_KEY);

 export const sendVerificationEmail = async (email:string, token: string) =>{
     const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

     await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"Confirm your email",
        html:`<p><a href=${confirmLink}> click here to confirm your email<a></p>`
     })
 }

 export const sendPasswordResetEmail = async (email:string, token: string) =>{
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"Password reset",
        html: `<p><a href=${resetLink}> click here to reset password<a></p>`

    })
 }

 export const sendTwoFactorTokenEmail = async(
    email:string,
    token:string
 ) =>{
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"2FA code",
        html:`<p>Your 2FA code: ${token}<p/>`
    })
 }