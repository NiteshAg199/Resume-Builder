import React, { useState } from "react";
import Experience1CompanyContaier from "./Experience1CompanyContaier/Experience1CompanyContaier";
import './Experience1.css' 
const Experience1=()=>{
    const [experience1Data,setExperienceData]=useState([
        {
            "designation":"Consultant",
            "timePeriod":"Aug 2024-Present",
            "companyName":"Intellect Design Arena",
            "location":"Chennai",
            "workDone":["Implemented a gRPC Services in IDC Product.","Developed a simulated server environment for client-server integration testing, now used by 10+ team members to streamline cross-departmental collaboration."," Upgraded reporting system to the latest version, ensuring improved performance, compatibility, and feature enhancements for efficient report generation."]
        }
    ])
    return(
        <>
            <div className="experience1Container">
                <div className="experience1Header">Experience</div>
                <hr/>
                <div className="experience1CompanyContainer">
                    {experience1Data.map((e)=><Experience1CompanyContaier designation={e.designation} timePeriod={e.timePeriod} companyName={e.companyName} location={e.location} workDone={e.workDone}/>)}
                </div>
            </div>
        </>
    );
}
export default Experience1;