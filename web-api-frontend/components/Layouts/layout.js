import style from "../../styles/Showroom.module.css";
import {CircularProgress} from "@mui/material";
import React, {useEffect} from "react"
import ApiBrowseNav from "../apiBrowseNav";
import {ping} from "../../services/requests";


export default function Layout({children}) {


    const [timeLogin, setTimeLogin] = React.useState(1);


    /**
     *  Zeitverlauf Uhr
     */
    useEffect(() => {
        //TODO Api.Ping
        setInterval(() => {
            setTimeLogin(prevState => (prevState + 1))
        }, 1200)

        setInterval(() => {
            ping()
        }, 30000)

    }, []);


    return (
        <div className={style.showroom}>
            <div className={style.leftNav}>
                <ApiBrowseNav/>
            </div>
            <div className={style.main}>
                {children}
            </div>
            {/*
            <div className={style.footer}>
                <CircularProgress variant={"determinate"} value={timeLogin}/>
            </div>
            */}
        </div>
    )
}