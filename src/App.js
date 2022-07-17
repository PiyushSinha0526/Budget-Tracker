import { useState } from 'react';
import Main from './components/Main/Main';
function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(curr => (curr === "dark" ? "" : "dark"))
  }
  return (
    <div className={`${theme} App min-h-screen md:w-[760px] m-auto`}>
      <Main toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
