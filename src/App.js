import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Theme from './components/Theme';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <Theme/>
      <Todo/>
    </div>
  );
}

export default App;