import SearchBarRead from "./searchBarRead";
import {useState} from "react";

export default function PlcRead(params){

    const [searchValues, setSearchValues] = useState({
        variable:"",
        mode:""
    })

    const handleSearchSubmit = ()=>{
        console.log(searchValues);
    }

    return(
        <>
            <h1>Plc Programm Read</h1>
            <SearchBarRead
                searchValues={searchValues}
                setSearchValues={setSearchValues}
                handleSearchSubmit={handleSearchSubmit}/>

        </>
    )
}