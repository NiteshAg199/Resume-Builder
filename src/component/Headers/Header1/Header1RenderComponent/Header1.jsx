import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header1.css'
const Header1=({dataComponent})=>{
    const [data,setData]=useState({
        "name":"Your Name",
        "email":"abc@gmail.com",
        "phone":"+91-9052212312",
        "linkedin":"linkedinurl",
        "github":"https://www.linkedin.com/in/nitesh-agarwal-613a6a235/"
    })

    console.log("inside header1", dataComponent)
    useEffect(()=>{
        if(dataComponent) setData(dataComponent)
    },[dataComponent])
    return(
        <>
            <div className="HeaderContainer">
                <div className="HeaderName">{data?.name}</div>
                <div className="ResumerInfo">
                    <div className="infoClassContainer"><div className="email"><EmailIcon/></div><div>{data.email}</div></div>
                    <div className="infoClassContainer"><div className="phone"><LocalPhoneIcon/>{data.phone}</div></div>
                    <div className="infoClassContainer"><div className="linkedin"><LinkedInIcon/>{data.linkedin}</div></div>
                    <div className="infoClassContainer"><div className="github"><GitHubIcon/><span>{data.github && <a href={data.github}>{data.github}</a>}</span></div></div>
                </div>
            </div>
        </>
    )
}
export default Header1;
