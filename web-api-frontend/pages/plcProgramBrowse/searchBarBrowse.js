import {Select, TextField, MenuItem, InputLabel, FormControl, Button, Paper} from "@mui/material";
import React from "react";
import style from "../../styles/Components.module.css"

export default function SearchBarBrowse(props){

    const handleChange = (e) =>{
        props.setMode(e.target.value);
    };

    const submitSearch = () =>{
        console.log("Submit")
        props.handleSearchSubmit()
    };

    const handleChangeTextField = (e) => {
        props.setVariable(e.target.value);
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
                    onChange={handleChange}
                >
                    <MenuItem value={"children"}>children</MenuItem>
                    <MenuItem value={"var"}>var</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={submitSearch} variant={"contained"}>Search</Button>
        </div>
        </Paper>
    )
}