import { icons } from "lucide-react";
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer';
 
 
export const POST=async(res)=>{
    const respost= await res.json()
    try {
      const transporter = nodemailer.createTransport({
        service:"gmail",
        port: 465,
        secure: false,
        auth: {
          user: 'rohitgobade239@gmail.com',
          pass: 'fwoz peho sxrc ibfe',
        },
      });
      const emailHtml = `<b>Hello ${respost.name} ,</b><p>This is a test email sent by <b>${respost.name}</b>. </p> <p>This is Message ${respost.message}</p>`;
      const info = await transporter.sendMail({
        from:'rohitgobade239@gmail.com' , // sender address
        to: 'rohitgobade277@gmail.com', // list of receivers
        subject: "From Portfolio", // Subject line
        text: 'cxsdcds', // plain text body
        html: emailHtml // html body
      });
 
      return NextResponse.json({
        "data":{"mesg":"done"}
    })
    } catch (error) {
      console.log(error);
 
      return NextResponse.json({
        "data":{"error":error}
    })
    }

   
}