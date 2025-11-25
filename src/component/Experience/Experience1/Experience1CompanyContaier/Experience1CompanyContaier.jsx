import React from "react";
import './Experience1CompanyContaier.css'
const Experience1CompanyContaier=({ designation, timePeriod, companyName, location, workDone})=>{
    return(
        <>
            <div className="experience1CompanyContaier">
                <div className="experience1CompanyDesignationContainer">
                    <div className="experience1Designation">{designation}</div>
                    <div className="experience1TimePeriod">{timePeriod}</div>
                </div>
                <div className="experience1CompanyNameContainer">
                    <div className="experience1CompanyName">{companyName},{location}</div>
                </div>
                <div className="experience1WorkPointContainer">
                    <ul>
                        {workDone.map((e)=><li>{e}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Experience1CompanyContaier;