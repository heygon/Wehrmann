import { MouseEvent, useState } from "react"

interface Props {
    CodTurma: string[];
    dtInicio: string[];
    dtFim: string[];
    qtAlunos: string[];
    onSelectItem: (id: any) => void; // ! Aqui prepara uma funcion para mandar o evento parao pai
    onEditItem: (id: any) => void; // ! Aqui prepara uma funcion para mandar o evento parao pai
}

function Turmas({ CodTurma, dtInicio, dtFim, qtAlunos, onSelectItem, onEditItem }: Props) {


    const [selectedIndex, setSelecteIndex] = useState(-1);


    return <>

        <div className="card blue-grey darken-1 col s12">
            <div className="card-content white-text">
                <span className="card-title">{CodTurma}</span>
                Data de Início : {dtInicio}<br/>
                Data de Fim : {dtFim}<br/>
                Quantidade de alunos : {qtAlunos}<br/>
            </div>
            <div className="card-action">
                <a  href="#"
                    onClick={(id) => {
                        onSelectItem(id); // ! Passa os dados para a function pai
                    }}
                >
                    Ver alunos
                </a>

                <a  href="#"
                    onClick={(id) => {
                        onEditItem(id); // ! Passa os dados para a function pai
                    }}
                >
                    Editar turma
                </a>
                
            </div>
        </div>
    </>
}
export default Turmas