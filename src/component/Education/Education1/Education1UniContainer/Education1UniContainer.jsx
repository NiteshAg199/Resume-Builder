import React from "react";
import './Education1UniContainer.css'
const  Education1UniContainer=({university,universityCity, session, percentage, percentageType,course, universitySession})=>{
    return(
        <>
            <div className="education1UniContainer">
                <div className="education1UniContainerUpper">
                    <div className="education1UniName"> {university}, <span>{universityCity}</span></div>
                    <div className="education1UniSession">{universitySession}</div>
                </div>
                <div className="education1UniContainerLower">
                    <div className="education1UniCourseName">{course}</div>
                    <div className="education1UniPercentage">{`${percentageType}: ${percentage}`}</div>
                </div>
            </div>
        </>
    );
}
export default Education1UniContainer;