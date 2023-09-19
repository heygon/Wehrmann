import Rect, { useState } from 'react' 
import Axios from 'axios'
import api from '../../services/api';

import styles from './styles'

export default function Login(){

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleEntrar() {
        let rest = await Axios.post(api+'/login',{
            login,
            senha
        });

        console.log(rest)
        return rest;
    }

    return (
        <>
            <div className='row'>

                <div className='card col-4 offset-4' style={styles.card}>
                    <div className='card-content'>

                        <h5 className='col s12 center-align'>Login</h5>

                        <div className="input-field col s12">
                            <input type="text" className="form-control" onChange={(e) => { setLogin(e.target.value); }}/>
                            <label htmlFor="login">Login</label>
                        </div>

                        <div className="input-field col s12">
                            <input type="password" className="form-control" onChange={(e) => { setSenha(e.target.value); }} />
                            <label htmlFor="Senha">Senha</label>
                        </div>

                        <div className=" col s12 btn btn-primary" onClick={() => handleEntrar()}>Entrar</div>

                    </div>
                </div>
            </div>
        </>
    )
}