
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import HomePage from './components/HomePage';
import { LangProvider } from './contexts/LangContext';




function App() {
  return (
<div>
<LangProvider>
 <HomePage/>
 </LangProvider>

 
</div>
   
  

  );
}

export default App;
