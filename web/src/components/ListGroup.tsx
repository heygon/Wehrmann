import { MouseEvent, useState } from "react"

interface Props {
    items : string[];
    heading: string;
    onSelectItem: (item: string) => void; // ! Aqui prepara uma funcion para mandar o evento parao pai
}

function ListGroup({ items, heading, onSelectItem }: Props) {


    const [ selectedIndex, setSelecteIndex ] = useState(-1);


    return <>
        <h1>{heading}</h1>
        {items.length === 0 ? <p>No item found</p> : null}
        <ul className="list-group">
            {
                items.map((item, index) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === index 
                                ? "list-group-item active" 
                                : "list-group-item"
                        }
                        onClick={() => {
                            setSelecteIndex(index)
                            onSelectItem(item); // ! Passa os dados para a functio  pai
                        }}
                    >
                        {item}
                    </li>
                ))
            }
        </ul>
    </>
}
export default ListGroup