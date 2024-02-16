import './style2.css'
// import { FcApproval } from "react-icons/fc";
import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
// import LockClockIcon from '@mui/icons-material/LockClock';
// import { FcLock } from "react-icons/fc";
// import { FcViewDetails } from "react-icons/fc";
// import { FcHighPriority } from "react-icons/fc";
// import apiReport from './sevices/api_report';
// import api from './sevices/api'
// import  { useEffect, useState } from "react";
import Card from './componentes/Card'

function Cards2(){

    // async function carregaTela(){
    //     try {
    //         const response = await api.get(`22743010/json`)
    //         console.log(response)
    //     } catch (error) {
    //       alert('Erro encontrado: ' + error)

    //     }
    // }

    // async function carregaTela2(){
    //     try {
    //         const response = await apiReport.get('')
    //         console.log(response)
    //     } catch (error) {
    //       alert('Erro encontrado: ' + error)

    //     }
    // }

    // useEffect(()=>{
    //     carregaTela2()
    // },[])

    return(       
        <body> 
            <div class="row">
                <Card status='1' fileName='Login' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='2' fileName='Login-Teste' absolutePath='c:/teste/temp/login.cy.js'/>
                <Card status='3' fileName='Mais um teste eeeeeeeeeeeeee' absolutePath='c:/teste/temp/login.cy.js'/> 
                <Card status='1' fileName='Login' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='2' fileName='Login-Teste' absolutePath='c:/teste/temp/login.cy.js'/>
                <Card status='3' fileName='Mais um teste eeeeeeeeeeeeee' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='1' fileName='Login' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='2' fileName='Login-Teste' absolutePath='c:/teste/temp/login.cy.js'/>
                <Card status='3' fileName='Mais um teste eeeeeeeeeeeeee' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='1' fileName='Login' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='2' fileName='Login-Teste' absolutePath='c:/teste/temp/login.cy.js'/>
                <Card status='3' fileName='Mais um teste eeeeeeeeeeeeee' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='1' fileName='Login' absolutePath='c:/teste/temp/login.cy.js'/>            
                <Card status='2' fileName='Login-Teste' absolutePath='c:/teste/temp/login.cy.js'/>
                <Card status='3' fileName='Mais um teste eeeeeeeeeeeeee' absolutePath='c:/teste/temp/login.cy.js'/>                       
            </div>
            {/* <div class="row">

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
                
                
                <div class="card green">
                    <h2>Login</h2>
                    <div className='cardFileName'>
                        <p>c:/tesmp/login.cy.js</p>
                    </div>                                      
                    <div className='cardLoader'>
                        <FcApproval size={50} />
                    </div>
                   
                    <div className='cardStatus'>
                        <p>Processado</p>
                    </div>
                    <hr />
                    <div className='cardDetail'>
                        <p>Detalhe:</p>
                        <button className='cardButton'><FcViewDetails size={40} /></button>
                    </div>                    
                </div>

                <div class="card red">
                    <h2>Login</h2>
                    <div className='cardFileName'>
                        <p>c:/tesmp/login.cy.js</p>
                    </div>                                      
                    <div className='cardLoader'>
                        <FcHighPriority size={50} />
                    </div>
                   
                    <div className='cardStatus'>
                        <p>Proc. com Falha</p>
                    </div>
                    <hr />
                    <div className='cardDetail'>
                        <p>Detalhe:</p>
                        <button className='cardButton'><FcViewDetails size={40} /></button>
                    </div>                    
                </div>
            </div> */}
                
        </body>
    )
}

export default Cards2