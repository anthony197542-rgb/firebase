import './App.css';
import { createUserWithEmailAndPassword } from './firebase/init';

function App() {
  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123');
  .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    console.log(error);

  })
  }

  functtion NavigatorLogin() {
    
  }
  return (

    <div className="App">
      <button onclick={register}>Register</button>

    </div>
  );
}

export default App;
