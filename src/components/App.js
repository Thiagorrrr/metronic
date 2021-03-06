import '../styles/App.scss'
import { ThemeContext } from './ThemeContext';
import Aside from '../components/Aside'
import Header from '../components/Header'
import Section from './Section'
import MenuUser from './MenuUser'
import { useState } from 'react';
function App() {
  const [active, setActive] = useState(false)
  const [user, setActiveUser] = useState(false)

  const activeMenu = () => {
    setActive(active ? false : true)
  }
  const activeUser = () => {
    setActiveUser(user ? false : true)
  }

  return (
    <ThemeContext.Provider value={{ activeMenu, activeUser }}>
      <div className="app">
        <Header />
        <MenuUser
          user={user}
        />
        <main className="app__main">
          <Aside
            activeMenu={active}
          />
          <Section />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
