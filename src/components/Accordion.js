import Item from './Item'
import ItemMenu from './ItemMenu';

const Accordion = ({ index, text, name, icon, submenu, selected, classe, close }) => {
    return (
        <li className="accordion">
            <div className="accordion__wrapper">
                {
                    name ?
                        <ItemMenu
                            close={close}
                            text={name}
                        /> : null
                }
                {
                    text ?
                        <>
                            <h2 className="accordion__title mb-0" id={`heading${index}`}>
                                <Item
                                    controls={`collapse${index}`}
                                    target={`#collapse${index}`}
                                    icon={icon}
                                    link=''
                                    classe={classe}
                                    text={close ? '' : text}
                                    selected={selected}
                                    submenu={close ? '' : submenu}

                                />
                            </h2>

                            {
                                submenu ?
                                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#asideMenu">
                                        <ul className="accordion__submenu-list">
                                            {
                                                submenu.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Item
                                                                link={item.link}                                                                alt={item.alt}
                                                                classe={item.classe}
                                                                text={item.name}
                                                                submenu={item.submenu}
                                                            />

                                                        </li>
                                                    )

                                                })
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



