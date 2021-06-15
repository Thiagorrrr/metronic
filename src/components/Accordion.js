import Item from './Item'
import ItemMenu from './ItemMenu';

const Accordion = ({ index, text, name, valor, icon, submenu, selected }) => {
    return (
        <li className="accordion">
            <div className="accordion__wrapper">
                {
                    name ?
                        <ItemMenu
                            text={name}
                        />
                        : null
                }
                {
                    text ?
                        <>
                            <h2 className="mb-0" id={`heading${index}`}>
                                <Item
                                    controls={`collapse${index}`}
                                    target={`#collapse${index}`}
                                    icon={icon}
                                    link=''
                                    classe="dash"
                                    text={text}
                                    selected={selected}
                                    submenu={submenu}

                                />
                            </h2>

                            {
                                submenu ?
                                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#asideMenu">
                                        <ul>
                                            {
                                                submenu.map((item, index) => <li key={index} style={{ color: "red" }}>{item.name}</li>)
                                            }
                                        </ul>
                                    </div> : null

                            }
                        </> : null
                }
            </div>
        </li>

    )
}

export default Accordion;



