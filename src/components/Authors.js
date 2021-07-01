import { useState } from "react";

const Authors = ({ dados, title }) => {

    const [select, setSelect] = useState("all");

    const setSelectValue = (valor) => {
        setSelect(valor)
    }
    return (
        <div className="authors">
            <div className="authors__container">
                <div className="authors__box">
                    <span className="authors__title">{title}</span>
                    <select className="authors__select" onChange={e => setSelectValue(e.target.value)}>
                        <option className="authors__option " value="all">filtrar</option>
                        <option className="authors__option" value="pre">Pré-incubados</option>
                        <option className="authors__option" value="en">Incubados</option>
                        <option className="authors__option" value="re">Residente</option>
                        <option className="authors__option" value="nre">Não Residente</option>
                    </select>
                </div>
                <ul className="authors__list">
                    {
                        dados.map((item, index) =>
                            <>
                                {
                                    item.status === select || select === 'all'  ?
                                        <li className="authors__item" key={index} >
                                            <img className="authors__img" src={`${process.env.PUBLIC_URL}${item.icon}.png`} alt="imagem icone"></img>
                                            <div className="authors__box-text">
                                                <span className="authors__name">{item.name}</span>
                                                <span className="authors__info">{item.info}</span>
                                            </div>
                                        </li> : null
                                }
                            </>
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default Authors;