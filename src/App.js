import './App.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/init';

function App() {
  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function NavigatorLogin() {
    
  }
  
  return (
    <div className="App">
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;
