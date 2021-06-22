import React, { useState } from 'react';
import Accordion from "./Accordion";
import dados from "../dados/data";
import Arrow from "../svg/Arrow"

const Aside = ({activeMenu}) => {
  const [close, setClose] = useState(false);
  const [mouse, setMouse] = useState(false);

  return (
    <aside className={`aside ${activeMenu ? 'aside--active': ''}  ${close ? `aside--close` : ''}`}>
      <div className="aside__container">
        <div className="aside__brand d-none d-lg-flex">
          {
            close ?
              null : <h1 className="aside__title"> metronic</h1>
          }
          <span className="aside__arrow" onClick={() => setClose(close ? false : true)}>
            <Arrow />
          </span>
        </div>
        <ul className="aside__list" id="asideMenu"
          onMouseEnter={() => {
            return (
              close === true ? setClose(false) : null,
              close === true ? setMouse(true) : setMouse(false)
            )
          }}
          onMouseLeave={() => mouse === true ? setClose(true) : null}
        >
          {
            dados.aside.map((item, index) => {
              return (
                <Accordion
                  close={close}
                  key={index}
                  index={index}
                  name={item.name}
                  text={item.text}
                  icon={item.icon}
                  submenu={close ? '' : item.submenu}
                  selected={item.selected}
                  classe={item.classe}
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
