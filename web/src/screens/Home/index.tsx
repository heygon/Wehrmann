import Rect, { useState, useEffect } from 'react' 
import Axios from 'axios';
import Turmas from '../../components/Turmas'
import api from '../../services/api';


export default function Home(){

    const [turmas, setTurmas] = useState([])
    const [editturma, setEditTurma] = useState(false)
    const [dados, setdados] = useState({

    })

    async function listaTurmas(){
        let turmas:any = await Axios.get(api+'/turma');

        console.log(turmas)
        setTurmas(turmas.data);
    }

    useEffect(() => {
        listaTurmas()
    },[])

    function verAlunos(id: any): void {
        console.log(id)
    }

    function editarTurma(id: any): void {
        throw new Error('Function not implemented.');
    }
    function setDados(type: string, info:string): void {
        throw new Error('Function not implemented.');
    }
    function handleSalvar(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            {!editturma && (
                <div className='row'>
                    {turmas.map((e:any) => {
                        return (
                            <div className='col s3'>
                                <Turmas 
                                    key={e.id}
                                    CodTurma = {e.CodTurma}
                                    dtInicio = {e.dtInicio}
                                    dtFim = {e.dtFim}
                                    qtAlunos = {e.qtAlunos}
                                    onSelectItem={() => verAlunos(e.id)}
                                    onEditItem={() => editarTurma(e.id)}
                                />
                            </div>
                        )
                    })}
                </div>
            )}

            {editturma && (
                <div className='row'>

                    <div className='card col-4 offset-4' >
                        <div className='card-content'>

                            <h5 className='col s12 center-align'>Login</h5>

                            <div className="input-field col s12">
                                <input type="text" className="form-control" onChange={(e) => { setDados('',e.target.value); }}/>
                                <label htmlFor="login">Cod turma</label>
                            </div>

                            <div className="input-field col s12">
                                <input type="text" className="form-control" onChange={(e) => { setDados('',e.target.value); }}/>
                                <label htmlFor="login">Data de início</label>
                            </div>

                            <div className="input-field col s12">
                                <input type="text" className="form-control" onChange={(e) => { setDados('',e.target.value); }}/>
                                <label htmlFor="login">Data Fim</label>
                            </div>

                            <div className="input-field col s12">
                                <input type="text" className="form-control" onChange={(e) => { setDados('',e.target.value); }}/>
                                <label htmlFor="login">Quantidade de alunos</label>
                            </div>



                            <div className=" col s12 btn btn-primary" onClick={() => handleSalvar()}>Entrar</div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}