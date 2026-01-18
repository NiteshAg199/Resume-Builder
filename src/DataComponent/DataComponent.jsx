import React, { useEffect } from "react";
import { COMP_DATA_TRAN } from "../utility/RegistryData";
const DataComponent=({compName,dataModel})=>{
    const Component= COMP_DATA_TRAN[compName];
    return(
        <>
            <Component dataModel={dataModel}/>
        </>
    )
}
export default DataComponent