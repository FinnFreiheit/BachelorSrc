import {Alert} from "@mui/material";
import React from "react";

export default function ApiAlert(props){
    if(props.alert.isAlert){
        return(<Alert severity="error">{props.alert.msg}</Alert>)

    }
}