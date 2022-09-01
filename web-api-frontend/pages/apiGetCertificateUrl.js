import React, {useEffect} from "react"
import {getCertificatURL} from "../services/requests";

export default function ApiGetCertificateUrl(){

    const [url, setUrl] = React.useState('bla');

    useEffect(()=>{
        getCertificatURL().then((res)=> {
            setUrl(res)
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
                <h1>Certificat URL: </h1>
                <h2><a style={{color:"blue"}}>{url}</a></h2>
            </div>
        </div>
    )
}