const Card = ({ title, icon, subtitle, number, color }) =>
    
    <div className={`card card--${color || ''}`}>
        <div className="card__wrapper">
            { 
                icon ?
                    <div className="card__icon">
                        <i className={icon}> </i> 
                    </div> : null
            }
            { 
                title ?
                    <h4 className="card__title"> {title} </h4>: null
            }
            {
                number ? 
                    <span className="card__number"> {number}</span> : null 
            }
            {
                subtitle ?
                    <span className="card__subtitle"> {subtitle}</span>: null
            }
        </div>
    </div>


export default Card;