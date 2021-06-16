import '../styles/App.scss'
import { ThemeContext } from './ThemeContext';
import Aside from '../components/Aside'
import Header from '../components/Header'
import Section from './Section'
import { useState } from 'react';
function App() {
  const [active, setActive] = useState(false)

    const activeMenu = ()=> {
      setActive(active ? false : true)
    }
      
  return (
    <ThemeContext.Provider value={{ activeMenu }}>
      <div className="app">
        <Aside 
          activeMenu={active}
        />
        <main className="app__main">
          <Header />
          <Section />
          <footer> teste</footer>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
