import './App.css';
import './style.css';
import {useState} from 'react';
import Login from './component/Login';
import News from './component/News'


function App() {
  let [isLogin, setLogin] = useState(false);
  return (
    <div className="App">
      {
        isLogin
        ? <News isLogin={isLogin} setLogin={setLogin}/>
        : <Login isLogin={isLogin} setLogin={setLogin}/>
      }
     
    </div>
  );
}

export default App;
