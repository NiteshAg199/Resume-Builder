import React, { useState,useReducer, useContext } from "react";
import data from './../../Data/Data'
import './RightPage.css'
import DropContainer from "../../DropContainer/DropContainer";
import createRangeArray from "../../utility/RangeSliderArray";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { COMP_DATA_TRAN } from "../../utility/RegistryData";
import { useEffect } from "react";
import DataComponent from "../../DataComponent/DataComponent";
import DataRenderContext from '../../utility/context/DataRenderContext'
import Registry_Data_Model from "../../utility/RegistryDataJson";

const SubComponent=({componentSubComponent,componentSubTypeLength, renderComponent})=>{
    const dataContext=useContext(DataRenderContext);
    const [initSubComponentIndex,setInitSubComponentIndex]=useState(0);
    let componentTypeArray=createRangeArray(initSubComponentIndex,initSubComponentIndex+Math.min(3,componentSubTypeLength-1),componentSubTypeLength);
    function subComponentClick(ele){
        dataContext({type:"ChangeValue",id:`${ele}Data`})
        renderComponent({type:ele,id:1},ele)
    }
    return(
        <>
            <div className="rightPageContainer">
            <SkipPreviousIcon onClick={()=>setInitSubComponentIndex(initSubComponentIndex-1)}/>
            {componentTypeArray.map((e)=><div className="componentBtn" onClick={()=>subComponentClick(componentSubComponent[e%componentSubTypeLength])}>{componentSubComponent[e%componentSubTypeLength]}</div>)} 
            <SkipNextIcon onClick={()=>setInitSubComponentIndex(initSubComponentIndex+1)}/>
            </div>
        </>
    )
}
const RightPage=({left, right, setLeft, setRight,upperFunction})=>{
    const [componentType,setComponentType]=useState(["Header","Education","Experience","Project","Skills","Achievement","Certification"])
    const [componentSubComponent,setComponentSubComponent]=useState(null);
    const componentTypeLength=componentType.length;
    const [initComponentIndex,setInitComponentIndex]=useState(0);
    let componentTypeArray=createRangeArray(initComponentIndex,initComponentIndex+3,componentTypeLength);
    let ComponentType='Header Types'
        let [compData,setCompData]=useState([]);

    const [componentSubTypeLength,setComponentSubTypeLength]=useState(null);
    

    

    const [element,setElement]=useState(null);
    function componentClick(ele){
        console.log(ele);
        setComponentSubComponent(data[ele]);
        setComponentSubTypeLength(data[ele]?data[ele].length:null)
    }

    function renderComponent(ele){
        upperFunction(ele);
        console.log("Hi i am in component",ele)
    }

     const dataModelReducer=(state,action)=>{
        switch(action.type){
            case "ChangeValue":
                return Registry_Data_Model[action.id];
            case "ChangeInput":
                return {...state,[action.id.name]:action.id.value}
            case "SubmitEvent":
                return Registry_Data_Model[`${right[0].type}Data`]
            default:
                return state
        }
    }
    const [dataModel,dispatch] = useReducer(dataModelReducer,null);

   useEffect(()=>{
        setCompData(right.map(e=>`${e.type}Data`) )
    },[right,dataModel]);

    return(
        <>
            <DataRenderContext.Provider value={dispatch}>
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
                    {componentSubComponent && <SubComponent componentSubComponent={componentSubComponent} componentSubTypeLength={componentSubTypeLength} renderComponent={renderComponent}/>}
                </div>
                <div>
                {compData.map(e=><DataComponent compName={e} dataModel={dataModel}/>)}
                </div>
                <DropContainer
                items={right}
                setItems={setRight}
                otherItems={left}
                setOtherItems={setLeft}
                widthLen={40}
                dataModel={dataModel}
                />
            </div>
            </DataRenderContext.Provider>
        </>
    );
}
export default RightPage;