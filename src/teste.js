import axios from "axios";
import { useState } from 'react'

function Teste(){
    const [dados, setDados] = useState('')

    // const response = axios.get("https://viacep.com.br/ws/22743010/json" )
    const response = axios.get("localhost:3001/testsprocess" )
    .then(({ data }) => {        
        setDados(data)
    })
    .catch((error) => {
        console.error('#####Erro: ', error);
    });
    

    return(
        <div>Dados: {dados.file_name}</div>
    )
}

export default Teste
// fetch('http://localhost:3001/testsprocess', {
//                               method: "GET",
//                               body: JSON.stringify(data),
//                               headers: {"Content-type": "application/json; charset=UTF-8"}
//                             })
//                             .then(response => response.json())
//                             .then(json => console.log('executado em tests',json))
//                             .catch(err => console.log('erro', err))            
                       