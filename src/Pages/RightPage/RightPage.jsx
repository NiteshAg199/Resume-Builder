import React, { useState } from "react";
import data from './../../Data/Data'
import './RightPage.css'
import DropContainer from "../../DropContainer/DropContainer";
const RightPage=({left, right, setLeft, setRight})=>{
    const [componentType,setComponentType]=useState(["Header","Education","Experience","Project","Skills","Achievement","Certification"])
    const [componentSubComponent,setComponentSubComponent]=useState(null);
    let ComponentType='Header Types'
    function componentClick(ele){
        console.log(ele);
        setComponentSubComponent(data[ele]);
    }
    function subComponentClick(ele){
        console.log(ele);
    }
    return(
        <>
            <div className="rightPageOuterContainer">
                <div className="rightPageContainer">
                    {componentType.map(e=><div className="componentBtn" onClick={()=>componentClick(e)}>{e}</div>)}
                </div>
                <div>
                    {componentSubComponent && <div className="subComponentHeading">{`${ComponentType}'s Component`}</div>}
                </div>
                <div className="rightPageComponentContainer">
                    {componentSubComponent && componentSubComponent.map((e)=><div className="componentBtn" onClick={()=>subComponentClick(e.route)}>{e.name}</div>)}
                </div>
                <DropContainer
                title="Right Container"
                items={right}
                setItems={setRight}
                otherItems={left}
                setOtherItems={setLeft}
                widthLen={40}
                />
            </div>
        </>
    );
}
export default RightPage;