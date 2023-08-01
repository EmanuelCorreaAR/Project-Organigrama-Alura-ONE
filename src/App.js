
import { useState } from 'react';
import Formulario from './components/Form';
import Header from './components/Header';
import MiOrg from './components/MiOrg';

function App() {

  const [form, setForm] = useState(true)

  const changeForm = ()=>{
    setForm(!form)
  }

  return (
    <div className="App">
      <Header />
      {form === true ? <Formulario/> : <div></div>}   
      <MiOrg changeForm={changeForm}/>
    </div>
  );
}

export default App;
