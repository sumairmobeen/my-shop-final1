import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState, useGlobalStateUpdate } from "./../context/globalContext";
import {
    useHistory
} from "react-router-dom";
import LogoutButton from "./logoutButton";

function Dashboard() {

    let url = 'http://localhost:5000'
    const globalState = useGlobalState();
    const setGlobalState = useGlobalStateUpdate();

    let history = useHistory()
    

    return (
        <>
            {/* <LogoutButton />            */}
             <h1>Dashboard</h1>
            <div className="row1">
               
            {globalState.user ?
                <div>
                    <h2>{globalState.user.name}</h2>
                </div> : null}
            </div>


            {'===>' + JSON.stringify(globalState)}

        </>
    )
}

export default Dashboard;