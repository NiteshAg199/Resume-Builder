import React, { useEffect } from "react"
import { useState } from "react"
import './Header1Data.css'
import DataRenderContext from "../../../../utility/context/DataRenderContext"
import { useContext } from "react"
import Header1DataJson from "../Header1DataModel/Header1Data"
const Header1Data=(dataModel)=>{
    const dispatch=useContext(DataRenderContext);

    const [formData, setFormData] = useState({...dataModel})

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type:"SubmitEvent"})
        setFormData(Header1DataJson);
    }

    useEffect(()=>{
        console.log("Hi i am in datamodel for that i am checking",dataModel)
        setFormData(dataModel);
    },[dataModel])
    const handleChange=(e)=>{
        dispatch({type:"ChangeInput",id:{name:e.target.name,value:e.target.value}})
        setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    }
    return(
        <>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your Phone Number"/>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="Enter your Linkedin Profile"/>
            <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="Enter your Github"/>
            <button className="dtClick" onClick={handleSubmit}>Enter Data</button>
        </>
    )
}
export default Header1Data