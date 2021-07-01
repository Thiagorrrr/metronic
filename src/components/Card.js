const Card = ({ title, icon, image, alt, subtitle, number, color, index }) =>

    <div className={`card card--${color || ''}`} key={index}>
        <div className="card__wrapper">
            {
                icon ?
                    <div className="card__icon">
                        {
                            icon &&
                            <i className={icon}> </i>
                        }
                    </div> : null
            }
            {
                image ?
                    <div className="card__box-image">
                        {
                            image &&
                            <img className="card__image" src={process.env.PUBLIC_URL + image + '.png'} alt={alt}></img>
                        }
                    </div> : null

            }
            {
                title ?
                    <h4 className="card__title"> {title} </h4> : null
            }
            {
                number ?
                    <span className="card__number"> {number}</span> : null
            }
            {
                subtitle ?
                    <span className="card__subtitle"> {subtitle}</span> : null
            }
        </div>
    </div>


export default Card;