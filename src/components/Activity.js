const Activity = ({dados}) => {
    return (
        <div className="activity">
            <div className="activity__container">
                <div className="activity__box">
                    <span className="activity__title">Atividades Recentes</span>
                </div>
                <ul className="activity__list">
                    {
                        dados.map((item) =>

                            <li className="activity__item">
                                <span className="activity__data">{item.data}</span>
                                <i className={`activity__icon fa fa-genderless  activity__icon--${item.status}`}></i>                             
                                <div className="activity__box-text">
                                    <span className="activity__description">{item.description}</span>
                                    <span className="activity__info">{item.info}</span>
                                    <a className="activity__link" href={item.link}>{item.nameLink}</a>    
                                </div>
                            </li>
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default Activity;