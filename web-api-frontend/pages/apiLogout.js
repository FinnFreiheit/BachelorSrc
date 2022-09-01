import {useEffect} from "react";
import {logout} from "../services/requests";
import {Alert, Button, Snackbar} from "@mui/material";
import {Logout} from "@mui/icons-material";
import React from "react";

export default function ApiLogout() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h1>Api Logout</h1>
            <div style={{
             display:"grid",
             width:"100%",
             alignContent:"center",
             justifyContent:"center"
            }}>
                <Button
                variant={"contained"}
                size={"large"}
                endIcon={<Logout />}
                onClick={()=>{
                    setOpen(true)
                    logout().then(x=>{
                        console.log(x)
                    })
                }}
                >Logout</Button>
            </div>

            <Snackbar
                open={open}
                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                autoHideDuration={1000}
                onClose={handleClose}
            >
                <Alert severity={"success"}> Logout erfolgreich</Alert>
            </Snackbar>
        </>
    )
}