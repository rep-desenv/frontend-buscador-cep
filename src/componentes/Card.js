import '../style2.css'
import { FcApproval } from "react-icons/fc";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FcLock } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { BiAlarm } from "react-icons/bi";

 /*Modelo do Componente: 
 <div class="row">
     <div class="card blue">
         <h2>Login</h2>
         <div className='cardFileName'>
             <p>c:/tesmp/login.cy.js</p>
         </div>                                      
         <div className='cardLoader'>
             <CircularProgress />
         </div>
        
         <div className='cardStatus'>
             <p>Em processamento</p>
         </div>
         <hr />
         <div className='cardDetail'>
             <p>Detalhe:</p>
             <button className='cardButtonHold'><FcLock size={50} /></button>
         </div>                    
     </div> 
 </div> */

function Card(props){

    return(
        <div class={
            props.status === 1 ? "card blue" :
            props.status === 2 ? "card green" :
            props.status=== 3 ? "card red":
            props.status === 0 ? "card yellow":
            ""
        }>
            <h2>{props.fileName}</h2>
            
            <div className='cardFileName'>
                 <p>{props.absolutePath}</p>
            </div>  

            <div className='cardLoader'>
                {props.status === 1 ? <CircularProgress /> :
                props.status === 2 ? <FcApproval size={50} /> :
                props.status=== 3 ? <FcHighPriority size={50} /> :
                <BiAlarm size={50}/>}                
            </div>

            <div className='cardStatus'>
                <p>
                    {props.status === 1 ? "Em processamento" :
                    props.status === 2 ? "Processado" :
                    props.status=== 3 ? "Proc. com Falha":
                    props.status === 0 ? "Aguardando...":
                    ""}
                </p>
            </div>

            { (props.status == null) ? "": <hr /> }

            <div className='cardDetail'>
            { (props.status == null) ? "" : <p>Detalhe:</p> }
                {   (props.status == null) ? ""
                    :(props.status === 1  || props.status === 0 ) ? <button className='cardButtonHold'><FcLock size={50} /></button> 
                    :<button className='cardButton'><FcViewDetails size={40} /></button>}
               
            </div>                    
        </div>
    )
}

export default Card