import React, { useState } from "react";
import Education1UniContainer from "./Education1UniContainer/Education1UniContainer";
import './Education1.css';
const Education1=()=>{

    const [education1Data,setEducation1Data]=useState([{
            "university":"Maulana Azad Naional Institute of Technology",
            "universityCity":"Bhopal",
            "session":"2021-2024",
            "percentage":"87",
            "course":"Master of Computer Application",
            "percentageType":"CGPA"
        }]
    )

    return(
        <>
            <div className="education1Container">
                <div className="education1Header">Education </div>
                <hr/>
                <div className="education1educations">
                    {education1Data.map(e=><Education1UniContainer university={e.university} universityCity={e.universityCity} universitySession={e.session} percentage={e.percentage} percentageType={e.percentageType} course={e.course}/>)}
                </div>
            </div>
        </>
    );
}
export default Education1