import React from "react";
import {useEffect} from "react";
import {getApiVersion} from "../services/requests";

export default function ApiVersion(){

    const [version, setVersion] = React.useState("")

    useEffect(()=>{
        getApiVersion().then((res)=> {
            setVersion(res)
        })
    },[])

    return(
        <div style={{
            display:"grid",
            width:'100%',
            height:'100%',
            justifyItems:"center",
            alignItems:"center"
        }}>
            <div>
                <h1>Api Version: </h1>
                <h2>{version}</h2>
            </div>
        </div>
    )
}