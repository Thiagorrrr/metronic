import Accordion from "./Accordion";
import dados from "../dados/data";

const Aside = () => {
  return (
    <aside className="aside col-sm-4">
      <div className="aside__container">
        <div className="aside__brand">metronic </div>
        <ul className="aside__list" id="asideMenu">
          {
            dados.aside.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  index={index}
                  name={item.name}
                  text={item.text}
                  icon={item.icon}
                  submenu={item.submenu}
                  selected={item.selected}
                />
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}


export default Aside;
