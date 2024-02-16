import './style2.css'
// import { FcApproval } from "react-icons/fc";
import * as React from 'react';
import apiReport from './sevices/api_report';
import api from './sevices/api'
import { useEffect, useState } from "react";
import Card from './componentes/Card'
import axios from "axios";
import { CheckBox } from '@mui/icons-material';
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function Cards2(){

    var jsonDados = [
        {
            "id": 157,
            "file_name": "login",
            "status_process": 0,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 158,
            "file_name": "login-sbs",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 159,
            "file_name": "login-sbs",
            "status_process": 2,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 160,
            "file_name": "login",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 157,
            "file_name": "login",
            "status_process": 3,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 158,
            "file_name": "login-sbs",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 159,
            "file_name": "login-sbs",
            "status_process": 2,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 160,
            "file_name": "login",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 157,
            "file_name": "login",
            "status_process": 0,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 158,
            "file_name": "login-sbs",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 159,
            "file_name": "login-sbs",
            "status_process": 2,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 160,
            "file_name": "login",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 157,
            "file_name": "login",
            "status_process": 3,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 158,
            "file_name": "login-sbs",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "d6274e92-c1d0-43cc-96d3-58f68fc76e58"
        },
        {
            "id": 159,
            "file_name": "login-sbs",
            "status_process": 2,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login-sbs.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        },
        {
            "id": 160,
            "file_name": "login",
            "status_process": 1,
            "created_at": "2024-02-14T03:00:00.000Z",
            "absolute_path": "C:/Users/diego.p.pereira/OneDrive - Accenture/Projeto Equatorial-Ligth/Projetos/ofs-cypress/cypress/e2e/login/login.cy.js",
            "id_exec": "b01f33a0-883b-4461-98d9-68669c1e299a"
        }
    ]
   
    //var jsonDados = [{}]
    
    const [dados, setDados] = useState(jsonDados);
    // const [isChecked, setIsChecked] = useState(1)

    // const checkHandler = () => {
    //     setIsChecked(!isChecked)
    //     if (isChecked == 1){
    //         setIsChecked(0)
    //     }else{
    //         setIsChecked(1)
    //     }
    //     console.log(isChecked)
    // }

    useEffect(()=>{
        const fetchData = async() => {
            // axios.get(`${baseUrl}/`).then(({ data }) => setDados(data));
            console.log('Executado', dados)
            setDados(jsonDados)
        }

        fetchData()      
        
        const intervalId = setInterval(() => {
            fetchData(); // Fetch data every 2 minutes
        }, 3200);        

        return() => clearInterval(intervalId);
   
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json; charset=UTF-8');
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        // headers.append('GET', 'POST', 'OPTIONS');

        // fetch("https://localhost:3001/testsprocess", {
        //         method: "GET",                
        //         mode: 'no-cors',
        //         headers: headers
        //     })
        // .then(res => res.json())
        // .then(json => setDados(json))
        // .catch(err => console.log('Erro na Requisição: ', err))
    },[]);

    return(           
        <body>                
            <div class="row">                    
                {
                    dados.map((dado, index) => (                    
                        <Card status={dado.status_process} fileName={dado.file_name} absolutePath={dado.absolute_path}/>   
                    ))
                }  
            </div>                            
        </body>
    )
}

export default Cards2