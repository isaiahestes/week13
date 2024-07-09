
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import LoginForm from './components/login-form';
import Nav from './components/nav-bar';

function App() {
  return (
    <>
      <Nav />
      <br></br>
      <div>
      <LoginForm />
      </div>
    </>
  );
}

export default App;
