import React from "react";
import { useState } from "react";
import DropContainer from "../../DropContainer/DropContainer";
import './LeftPage.css'
const LeftPage=({left, right, setLeft, setRight})=>{
    return(
        <>
            <div className="LeftPageOuterContainer">
                <DropContainer
                title="Left Container"
                items={left}
                setItems={setLeft}
                otherItems={right}
                setOtherItems={setRight}
                widthLen={60}
                />
            </div>
        </>
    );
}
export default LeftPage