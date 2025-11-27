import React from "react";
import { useState } from "react";
import DropContainer from "../../DropContainer/DropContainer";
import './LeftPage.css'
const LeftPage=({left, right, setLeft, setRight})=>{
    return(
        <>
            <div className="LeftPageOuterContainer">
                <DropContainer
                items={left}
                setItems={setLeft}
                otherItems={right}
                setOtherItems={setRight}
                widthLen={59}
                />
            </div>
        </>
    );
}
export default LeftPage