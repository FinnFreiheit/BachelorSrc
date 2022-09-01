import style from "../styles/Components.module.css";
import {Button, List, ListItem, ListItemText, Paper, Snackbar, TextField} from "@mui/material";
import React, {useEffect} from "react";
import permissionData from "../services/getPermissionData"
import {getPermissions} from "../services/requests";

export default function GetPermissions() {

    //TODO Problem beim Rendern der Seite. Wird die Seite. Ursache liegt beim localStorage

    const [permissions, setPermissions] = React.useState([]);

    const mapPermission =
        permissions.map(item => {
            return <ListItemText key={item.name} primary={item.name}/>
            }
        )

    useEffect(()=>{
        getPermissions().then(data => {
            console.log(data);
            setPermissions(data);
        });
    }, [])

    return (
        <div className={style.loginContainer}>

            <Paper
                className={style.paper}
                elevation={6} sx={{
                p:6,
            }}>
                <h2 style={{
                    justifySelf:"center",
                    paddingBottom:10,}}
                >Permissions</h2>

                <List>
                    {mapPermission}
                </List>
            </Paper>

        </div>
    )
}