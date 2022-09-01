import React, {useEffect} from "react";
import {apiBrowse} from "../services/requests";


export default function ApiBrowse() {

    const [res, setRes] = React.useState([])

    useEffect(() => {
        apiBrowse().then(x => {
            if (x.result) {
                console.log(x.result);
                setRes(x.result);
            }
        })
    }, [])

    const printRes =
        res.map(item => {
            return (
                <h2 key={item.name}>{item.name}</h2>
            )
        })

    return (
        <>
            {printRes}
        </>
    )
}