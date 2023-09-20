import Rect, { useState } from 'react' 
import Axios from 'axios'
import api from '../../services/api';

import styles from './styles'
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [email, setLogin] = useState('');
    const [password, setSenha] = useState('');
    const [msg, setMsg] = useState({
        type : '',
        msg : ''
    });

    async function handleEntrar() {
        let rest:any = await Axios.post(api+'/login',{
            email,
            password
        });

        console.log(rest.data.resp)

        if(rest.data.resp == 's'){
            localStorage.setItem('dadosTeste', rest.data.user)
            setMsg({
                type : 's',
                msg : 'Sucesso!'
            })


            setTimeout(() => {
                const navigate = useNavigate();
                navigate('Home');
            }, 3000);
        }else{
            setMsg({
                type : 'n',
                msg : 'Erro ao realizar login'
            })
        }
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

                        {msg.type == 'n' && (
                            <div className='chip red white-text text-center'>{msg.msg}</div>
                        )}

                        {msg.type == 's' && (
                            <div className='chip green white-text text-center'>{msg.msg}</div>
                        )}


                        <div className=" col s12 btn btn-primary" onClick={() => handleEntrar()}>Entrar</div>

                    </div>
                </div>
            </div>
        </>
    )
}