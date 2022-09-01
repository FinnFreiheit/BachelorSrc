import {Select, TextField, MenuItem, InputLabel, FormControl, Button, Paper} from "@mui/material";
import React from "react";
import style from "../../styles/Components.module.css"

export default function SearchBarRead(props){

    const handleChangeDD = (e) =>{
        props.setSearchValues({
            ...props.searchValues,
            mode: e.target.value
        })
    };

    const submitSearch = () =>{
        console.log("Submit")
        props.handleSearchSubmit()
    };

    const handleChangeTextField = (e) => {
        props.setSearchValues({
            ...props.searchValues,
            variable:e.target.value
        });
    }

    return (
        <Paper>
            <div className={style.searchBarContainer}>
                <TextField label={"variable"} value={props.variable} onChange={handleChangeTextField}/>
                <FormControl>
                    <InputLabel id="modeDD">mode</InputLabel>
                    <Select
                        labelId="modeDD"
                        id={"modeDD"}
                        value={props.mode}
                        label="mode"
                        autoWidth
                        onChange={handleChangeDD}
                    >
                        <MenuItem value={"raw"}>raw</MenuItem>
                        <MenuItem value={"simple"}>simple</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={submitSearch} variant={"contained"}>Search</Button>
            </div>
        </Paper>
    )
}