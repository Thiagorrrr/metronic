const ItemMenu = ({ text, close }) => 
    <div className="itemMenu"> 
        {
             text && !close ?

             <h4 className='itemMenu__title'>{text} </h4>: null
        }
        {
            text && close ?
            <i className="accordion__icon fas fa-ellipsis-h"></i> : null 
        }
    </div>

export default ItemMenu;
