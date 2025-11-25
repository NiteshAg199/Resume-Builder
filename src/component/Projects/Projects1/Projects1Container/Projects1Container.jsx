import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects1Container=()=>{
    return(
        <>
            <div className="projects1ProjectContainer">
                <div className="projects1ProjectDetailsContainer">
                    <div className="projects1ProjectName"></div>
                    <div className="projects1ProjectTechStack"></div>
                    <div className="projects1ProjectRepo"><a href={dgd}><GitHubIcon/></a></div>
                </div>
                <div className="projects1Feature">
                    <ul>
                        {project1Feature.map((e)=><li>{e}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Projects1Container;