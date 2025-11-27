import React, { useState } from "react";
import data from './../../Data/Data'
import './RightPage.css'
import DropContainer from "../../DropContainer/DropContainer";
import createRangeArray from "../../utility/RangeSliderArray";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const SubComponent=({componentSubComponent,componentSubTypeLength})=>{
    const [initSubComponentIndex,setInitSubComponentIndex]=useState(0);
    let componentTypeArray=createRangeArray(initSubComponentIndex,initSubComponentIndex+3,componentSubTypeLength);
    function subComponentClick(ele){
        console.log(ele);
    }
    return(
        <>
            <SkipPreviousIcon onClick={()=>setInitSubComponentIndex(initSubComponentIndex-1)}/>
            {componentTypeArray.map((e)=><div className="componentBtn" onClick={()=>subComponentClick(componentSubComponent[e%componentSubTypeLength])}>{componentSubComponent[e%componentSubTypeLength]}</div>)} 
            <SkipNextIcon onClick={()=>setInitSubComponentIndex(initSubComponentIndex+1)}/>
        </>
    )
}
const RightPage=({left, right, setLeft, setRight})=>{
    const [componentType,setComponentType]=useState(["Header","Education","Experience","Project","Skills","Achievement","Certification"])
    const [componentSubComponent,setComponentSubComponent]=useState(null);
    const componentTypeLength=componentType.length;
    const [initComponentIndex,setInitComponentIndex]=useState(0);
    let componentTypeArray=createRangeArray(initComponentIndex,initComponentIndex+3,componentTypeLength);
    let ComponentType='Header Types'
    const [componentSubTypeLength,setComponentSubTypeLength]=useState(null);

    function componentClick(ele){
        console.log(ele);
        setComponentSubComponent(data[ele]);
        setComponentSubTypeLength(data[ele]?data[ele].length:null)
    }
    
    return(
        <>
            <div className="rightPageOuterContainer">
                <div className="componentTypeHeading">Component Type</div>
                <div className="rightPageContainer">
                    <SkipPreviousIcon onClick={()=>setInitComponentIndex(initComponentIndex-1)}/>
                    {componentTypeArray.map((e)=><div className="componentBtn" onClick={()=>componentClick(componentType[e%componentTypeLength])}>{componentType[e%componentTypeLength]}</div>)} 
                    <SkipNextIcon onClick={()=>setInitComponentIndex(initComponentIndex+1)}/>
                </div>
                <div>
                    {componentSubComponent && <div className="subComponentHeading">{`${ComponentType}'s Component`}</div>}
                </div>
                <div className="rightPageComponentContainer">
                    {componentSubComponent && <SubComponent componentSubComponent={componentSubComponent} componentSubTypeLength={componentSubTypeLength}/>}
                </div>
                <DropContainer
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