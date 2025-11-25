import React from "react";

const Projects1=()=>{
    const [projects1Data,setProjects1Data]=[
        {
            "ProjectName":"",
            "TechStack":"",
            "GithubRepo":"",
            "ProjectsFeatures":[]
        }
    ]
    return(
        <>
            <div className="projects1Conatiner">
                {projects1Data.map((e)=> <Projects1Container ProjectName={e.ProjectName} TechStack={e.TechStack} GithubRepo={e.GithubRepo} ProjectsFeatures={e.ProjectsFeatures}/>)}
            </div>
        </>
    );
}
export default Projects1;