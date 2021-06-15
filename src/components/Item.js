const Item = ({ text, selected, classe, icon, link, target, controls, submenu }) => {
    return (
        <a  
            href={link} 
            className={`collapsed item ${classe ? `item__${classe}` : ''} ${selected ? 'item--active' : ''} `}
            type="button" 
            data-toggle="collapse"
            aria-expanded="false"
            data-target={target}
            aria-controls={controls}
        >
            {
                icon ? 
                    <i className={`item__icon ${icon}`}></i> 
                : null
            }  
            {text}
            {
              !!submenu ? <i className="item__arrow fas fa-angle-right"></i> : null  
            }
            
        </a>
    )
}

export default Item;
