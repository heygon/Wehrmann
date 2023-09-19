import React, { useState } from 'react'
import Axios from 'axios'
import capa from "../assets/img/hand12.jpg";

interface Props {
    onLogged: (item: string) => void;
}

function Login( { onLogged } : Props ) {

    let [login, setLogin] = useState('');
    let [senha, setSenha] = useState('');

    function handleLogin(){
        console.log(login,senha)

        Axios.post('http://localhost:8888/cotabank/web/gerenciador/assets/php/index.php',{
            'rota':'loginAdmin',
            login,
            senha
        }).then(function (response:any){
            console.log(response)
        }).catch(function (error:any){
            console.log(error)
        })

    }



  return (
    <div className='col-12 p-0 row'>
        <div className='col-7' style={{ overflow : 'hidden', display:'flex', justifyItems : 'center' }} >
            <img src={capa} style={{ height : '100vh', justifySelf:'center' }} />
        </div>
        <div className='col-5'>
            <div className='col-10 offset-1'>
                <div className='card col-12 ' style={{ marginTop:'20vh' }}>
                    <div className='card-content row p-5'>
                        <h5 className='col-12 text-center'>Login</h5>
                        
                        <div className="mb-3 p-0">
                            <label htmlFor="ontrolInput1" className="form-label">Login</label>
                            <input type="text" className="form-control" onChange={(e) => { setLogin(e.target.value); }} placeholder="Informe seu e-mail"/>
                        </div>
                        <div className="mb-3 p-0">
                            <label htmlFor="ontrolInput1" className="form-label">Senha</label>
                            <input type="password" className="form-control" onChange={(e) => { setSenha(e.target.value); }} placeholder="Informe sua senha"/>
                        </div>
                        <div className="btn btn-primary btnEntrar mb-3" onClick={() => { handleLogin() }} >Entrar</div>
                        <div className="btn-recuperarSenha text-center">Esqueceu sua senha, <strong>clique aqui</strong></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login