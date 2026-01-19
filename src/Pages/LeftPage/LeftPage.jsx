import React, { useEffect } from "react";
import { useState,useRef } from "react";
import DropContainer from "../../DropContainer/DropContainer";
import './LeftPage.css'

import ReactToPrint, { useReactToPrint } from 'react-to-print'
const LeftPage=({left, right, setLeft, setRight})=>{
    const componentRef=useRef(null)
    const [widthLen,setWidthLen]=useState(59);
    
    useEffect(()=>{
        console.log(100)
        if(widthLen==100) {
            actualPrint();
            setWidthLen(()=>59);
        }
    },[widthLen])
    const handlePrint=()=>{
        setWidthLen(()=>100);
        // setWidthLen(()=>59);
    }
    const actualPrint=useReactToPrint({
        contentRef: componentRef,
    });
    return(
        <>
            <div className="LeftPageOuterContainer">
                <button onClick={handlePrint}>print here</button>
                <div ref={componentRef}>
                <DropContainer
                items={left}
                setItems={setLeft}
                otherItems={right}
                setOtherItems={setRight}
                widthLen={widthLen}
                />
                </div>
            </div>
        </>
    );
}
export default LeftPage