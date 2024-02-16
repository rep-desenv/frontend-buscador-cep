import '../style2.css'
import { FcApproval } from "react-icons/fc";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FcLock } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
// import apiReport from '../sevices/api_report';
// import api from '../sevices/api'
// import  { useEffect, useState } from "react";


function Card(props){

    return(
        <div class={
            props.status === '1' ? "card blue" :
            props.status === '2' ? "card green" :
            props.status=== '3' ? "card red":
            ""
        }>
            <h2>{props.fileName}</h2>
            <div className='cardFileName'>
                 <p>{props.absolutePath}</p>
            </div>                                      
            <div className='cardLoader'>
                {props.status === '1' ? <CircularProgress /> :
                props.status === '2' ? <FcApproval size={50} /> :
                props.status=== '3' ? <FcHighPriority size={50} /> :
                ""}                
            </div>

            <div className='cardStatus'>
                <p>
                    {props.status === '1' ? "Em processamento" :
                    props.status === '2' ? "Processado" :
                    props.status=== '3' ? "Proc. com Falha":
                    "Nada"}
                </p>
            </div>
            <hr />
            <div className='cardDetail'>
                <p>Detalhe:</p>
                {props.status ==='1'? <button className='cardButtonHold'><FcLock size={50} /></button>:
                <button className='cardButton'><FcViewDetails size={40} /></button>}
               
            </div>                    
        </div>
    )
}

export default Card